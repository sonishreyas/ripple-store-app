import { Response } from "miragejs";
import { formatDate, requiresAuth } from "backend/utils/authUtils";

/**
 * All the routes related to Order are present here.
 * These are private routes.
 * Client needs to add "authorization" header with JWT token in it to access it.
 * */

/**
 * This handler handles getting items to user's Order.
 * send GET Request at /api/user/Order
 * */
export const getOrderItemsHandler = function (schema, request) {
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
	const userOrder = schema.users.findBy({ _id: userId }).orders;
	return new Response(200, {}, { orders: userOrder });
};

/**
 * This handler handles adding items to user's Order.
 * send POST Request at /api/user/Order
 * body contains {product}
 * */

export const addItemToOrderHandler = function (schema, request) {
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
		const userOrder = schema.users.findBy({ _id: userId }).orders;
		const { product } = JSON.parse(request.requestBody);
		userOrder.push({
			...product,
			createdAt: formatDate(),
			updatedAt: formatDate(),
		});
		this.db.users.update({ _id: userId }, { orders: userOrder });
		return new Response(201, {}, { orders: userOrder });
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
