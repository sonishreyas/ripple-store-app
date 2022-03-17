export const filters = [
	{
		sortByList: [
			{
				name: "Price: Low to high",
				btnType: "SORT_BY_PRICE_LOW_TO_HIGH",
			},
			{
				name: "Price: High to low",
				btnType: "SORT_BY_PRICE_HIGH_TO_LOW",
			},
			{
				name: "Customer Rating",
				btnType: "SORT_BY_CUSTOMER_RATING",
			},
			{
				name: "Better Discount",
				btnType: "SORT_BY_BETTER_DISCOUNT",
			},
		],
		categoryFilters: [
			{
				name: "Casual Shoes",
				btnType: "FILTER_CATEGORY",
				status: false,
			},
			{
				name: "Sports Shoes",
				btnType: "FILTER_CATEGORY",
				status: false,
			},
			{
				name: "Formal Shoes",
				btnType: "FILTER_CATEGORY",
				status: false,
			},
			{
				name: "Sneakers",
				btnType: "FILTER_CATEGORY",
				status: false,
			},
			{
				name: "Sandles & Floaters",
				btnType: "FILTER_CATEGORY",
				status: false,
			},
			{
				name: "Socks",
				btnType: "FILTER_CATEGORY",
				status: false,
			},
		],
		brandFilters: [
			{
				name: "Adidas",
				btnType: "FILTER_BRAND",
				status: false,
			},
			{
				name: "PUMA",
				btnType: "FILTER_BRAND",
				status: false,
			},
			{
				name: "U.S. Polo Assn.",
				btnType: "FILTER_BRAND",
				status: false,
			},
			{
				name: "Woodland",
				btnType: "FILTER_BRAND",
				status: false,
			},
			{
				name: "BATA",
				btnType: "FILTER_BRAND",
				status: false,
			},
			{
				name: "Roadster",
				btnType: "FILTER_BRAND",
				status: false,
			},
		],
		priceFilter: {
			minPrice: 100,
			maxPrice: 15000,
		},
		ratingFilter: {
			minRating: 0,
			maxRating: 5,
		},
	},
];
