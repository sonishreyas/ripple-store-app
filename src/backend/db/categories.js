import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
	{
		featuredCategories: [
			{
				_id: uuid(),
				name: "Sneakers",
				discountOffer: "Up to 30-50% Off",
				imgURL:
					"https://raw.githubusercontent.com/sonishreyas/rippleUI/dev/components/media/images/sneaker.png",
			},
			{
				_id: uuid(),
				name: "Casual Shoes",
				discountOffer: "Up to 20-50% Off",
				imgURL:
					"https://raw.githubusercontent.com/sonishreyas/rippleUI/dev/components/media/images/sneaker.png",
			},
			{
				_id: uuid(),
				name: "Sports Shoes",
				discountOffer: "Up to 50-70% Off",
				imgURL:
					"https://raw.githubusercontent.com/sonishreyas/rippleUI/dev/components/media/images/sneaker.png",
			},
			{
				_id: uuid(),
				name: "Socks",
				discountOffer: "Up to 10-20% Off",
				imgURL:
					"https://raw.githubusercontent.com/sonishreyas/rippleUI/dev/components/media/images/sneaker.png",
			},
			{
				_id: uuid(),
				name: "Flip Flops",
				discountOffer: "Up to 30-50% Off",
				imgURL:
					"https://raw.githubusercontent.com/sonishreyas/rippleUI/dev/components/media/images/sneaker.png",
			},
		],
		featuredBrands: [
			{
				_id: uuid(),
				name: "Adidas",
				discountOffer: "Up to 30-50% Off",
				imgURL:
					"https://raw.githubusercontent.com/sonishreyas/rippleUI/dev/components/media/images/brand-logo.png",
			},
			{
				_id: uuid(),
				name: "PUMA",
				discountOffer: "Up to 20-50% Off",
				imgURL:
					"https://raw.githubusercontent.com/sonishreyas/rippleUI/dev/components/media/images/brand-logo.png",
			},
			{
				_id: uuid(),
				name: "U.S. Polo Assn.",
				discountOffer: "Up to 50-70% Off",
				imgURL:
					"https://raw.githubusercontent.com/sonishreyas/rippleUI/dev/components/media/images/brand-logo.png",
			},
			{
				_id: uuid(),
				name: "Woodland",
				discountOffer: "Up to 10-20% Off",
				imgURL:
					"https://raw.githubusercontent.com/sonishreyas/rippleUI/dev/components/media/images/brand-logo.png",
			},
			{
				_id: uuid(),
				name: "BATA",
				discountOffer: "Up to 30-50% Off",
				imgURL:
					"https://raw.githubusercontent.com/sonishreyas/rippleUI/dev/components/media/images/brand-logo.png",
			},
			{
				_id: uuid(),
				name: "Roadster",
				discountOffer: "Up to 30-50% Off",
				imgURL:
					"https://raw.githubusercontent.com/sonishreyas/rippleUI/dev/components/media/images/brand-logo.png",
			},
		],
	},
];
