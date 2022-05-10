import { Response } from "miragejs";
import { formatDate, requiresAuth } from "backend/utils/authUtils";
import { v4 as uuid } from "uuid";

/**
 * All the routes related to Address are present here.
 * These are private routes.
 * Client needs to add "authorization" header with JWT token in it to access it.
 * */

/**
 * This handler handles getting items to user's address.
 * send GET Request at /api/user/address
 * */
export const getAddressItemsHandler = function (schema, request) {
	const userId = requiresAuth.call(this, request);
	if (!userId) {
		new Response(
			404,
			{},
			{
				errors: ["The email you entered is not Registered. Not Found error"],
			}
		);
	}
	const userAddress = schema.users.findBy({ _id: userId }).address;
	return new Response(200, {}, { address: userAddress });
};

/**
 * This handler handles adding items to user's Address.
 * send POST Request at /api/user/address
 * body contains {address}
 * */

export const addItemToAddressHandler = function (schema, request) {
	const userId = requiresAuth.call(this, request);
	try {
		if (!userId) {
			new Response(
				404,
				{},
				{
					errors: ["The email you entered is not Registered. Not Found error"],
				}
			);
		}
		const userAddress = schema.users.findBy({ _id: userId }).address;
		const { address } = JSON.parse(request.requestBody);
		userAddress.push({
			...address,
			addressId: uuid(),
			createdAt: formatDate(),
			updatedAt: formatDate(),
		});
		this.db.users.update({ _id: userId }, { address: userAddress });
		return new Response(201, {}, { address: userAddress });
	} catch (error) {
		return new Response(
			500,
			{},
			{
				error,
			}
		);
	}
};

/**
 * This handler handles removing items to user's address.
 * send DELETE Request at /api/user/address/:addressId
 * */

export const removeItemFromAddressHandler = function (schema, request) {
	const userId = requiresAuth.call(this, request);
	try {
		if (!userId) {
			new Response(
				404,
				{},
				{
					errors: ["The email you entered is not Registered. Not Found error"],
				}
			);
		}
		const userAddress = schema.users.findBy({ _id: userId }).address;
		const addressId = request.params.addressId;
		const newUserAddress = userAddress.filter(
			(item) => item.addressId !== addressId
		);
		this.db.users.update({ _id: userId }, { address: newUserAddress });
		return new Response(200, {}, { address: newUserAddress });
	} catch (error) {
		return new Response(
			500,
			{},
			{
				error,
			}
		);
	}
};

/**
 * This handler handles adding items to user's address.
 * send POST Request at /api/user/address/:addressId
 * body contains {action} (whose 'type' can be increment or decrement)
 * */

export const updateAddressItemHandler = function (schema, request) {
	const addressId = request.params.addressId;
	const userId = requiresAuth.call(this, request);
	try {
		if (!userId) {
			new Response(
				404,
				{},
				{
					errors: ["The email you entered is not Registered. Not Found error"],
				}
			);
		}
		const userAddress = schema.users.findBy({ _id: userId }).address;
		const updatedAddress = JSON.parse(request.requestBody);
		const newUserAddress = userAddress.reduce(
			(prev, curr) =>
				curr.addressId === addressId
					? [...prev, { ...curr, ...updatedAddress }]
					: [...prev, { ...curr }],
			[]
		);
		this.db.users.update({ _id: userId }, { address: newUserAddress });
		return new Response(200, {}, { address: newUserAddress });
	} catch (error) {
		return new Response(
			500,
			{},
			{
				error,
			}
		);
	}
};
