import { v4 as uuid } from "uuid";

export const navData = [
	{
		id: uuid(),
		route: "/",
		name: "Home",
		icon: "fa-solid fa-house-chimney",
	},
	{
		id: uuid(),
		route: "/products",
		name: "Products",
		icon: "fa-solid fa-bag-shopping",
	},
	{
		id: uuid(),
		route: "/profile",
		name: "Profile",
		icon: "fa-solid fa-user",
	},
	{
		id: uuid(),
		route: "/wishlist",
		name: "Wishlist",
		icon: "fas fa-heart",
	},
	{
		id: uuid(),
		route: "/cart",
		name: "Cart",
		icon: "fas fa-shopping-cart",
	},
];
