import { v4 as uuid } from "uuid";
import bcyrpt from "bcryptjs";
import { formatDate } from "backend/utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
	{
		_id: uuid(),
		firstName: "Adarsh",
		lastName: "Balika",
		email: "adarshbalika@gmail.com",
		password: bcyrpt.hashSync("adarshBalika123", 5),
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		firstName: "test",
		lastName: "test",
		email: "test@gmail.com",
		password: bcyrpt.hashSync("test123", 5),
		createdAt: formatDate(),
		updatedAt: formatDate(),
		address: [
			{
				addressId: uuid(),
				name: "Test",
				houseNo: "D-203",
				society: "Nisarg Nirman",
				area: "Pimple Saudagar",
				city: "Pune",
				state: "Maharashtra",
				country: "India",
				pincode: "411027",
				default: true,
			},
			{
				addressId: uuid(),
				name: "Shreyas",
				houseNo: "A-203",
				society: "Nisarg Nirmiti",
				area: "Pimple Saudagar",
				city: "Pune",
				state: "Maharashtra",
				country: "India",
				pincode: "411027",
				default: false,
			},
		],
	},
];
