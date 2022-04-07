import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
	{
		_id: uuid(),
		name: "Puma White Sneakers",
		brand: "PUMA",
		type: "Men Sneakers",
		category: "Sneakers",
		imgURL:
			"https://raw.githubusercontent.com/sonishreyas/rippleUI/dev/components/media/images/sneaker.png",
		rating: 4,
		reviews: 400,
		price: 2999,
		mrp: 5999,
		discountPercent: 50,
		discount: 3000,
	},
	{
		_id: uuid(),
		name: "Puma Grey & Fluorescent Green Sneakers",
		brand: "PUMA",
		type: "Men Sneakers",
		category: "Casual Shoes",
		imgURL:
			"https://raw.githubusercontent.com/sonishreyas/ripple-store-app/dev/src/backend/media/images/pume-grey-flourasant.png",
		rating: 4,
		reviews: 31,
		price: 1599,
		mrp: 3999,
		discountPercent: 60,
		discount: 2400,
	},
	//
	{
		_id: uuid(),
		name: "Adidas Sports",
		brand: "Adidas",
		type: "Sports Shoes",
		category: "Sports Shoes",
		imgURL:
			"https://raw.githubusercontent.com/sonishreyas/rippleUI/dev/components/media/images/sneaker.png",
		rating: 3,
		reviews: 400,
		price: 1499,
		mrp: 1999,
		discountPercent: 20,
		discount: 500,
	},
	{
		_id: uuid(),
		name: "Woodland Formal Shoes",
		brand: "Woodland",
		type: "Formal Shoes",
		category: "Formal Shoes",
		imgURL:
			"https://raw.githubusercontent.com/sonishreyas/rippleUI/dev/components/media/images/sneaker.png",
		rating: 5,
		reviews: 200,
		price: 8999,
		mrp: 12999,
		discountPercent: 30,
		discount: 4000,
	},
	{
		_id: uuid(),
		name: "Roadster Casuals",
		brand: "Roadster",
		type: "Casual Shoes",
		category: "Casual Shoes",
		imgURL:
			"https://raw.githubusercontent.com/sonishreyas/rippleUI/dev/components/media/images/sneaker.png",
		rating: 3,
		reviews: 100,
		price: 699,
		mrp: 1999,
		discountPercent: 65,
		discount: 1300,
	},
	{
		_id: uuid(),
		name: "U.S. Polo Casuals",
		brand: "U.S. Polo Assn.",
		type: "Casual Shoes",
		category: "Casual Shoes",
		imgURL:
			"https://raw.githubusercontent.com/sonishreyas/rippleUI/dev/components/media/images/sneaker.png",
		rating: 4,
		reviews: 250,
		price: 1299,
		mrp: 4999,
		discountPercent: 75,
		discount: 3700,
	},
];
