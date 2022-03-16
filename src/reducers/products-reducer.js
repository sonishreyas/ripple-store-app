const Compose =
	(productsState, ...functions) =>
	(productsData) => {
		return functions.reduce(
			(prev, curr) => curr(productsState, prev),
			productsData
		);
	};

const productsReducer = (productsState, productsAction) => {
	switch (productsAction.filterType) {
		case "PRODUCTS_SORT_BY":
			return {
				...productsState,
				sortByType: productsAction.sortByType,
			};
		case "FILTER_CATEGORY":
			return {
				...productsState,
				filterName: productsAction.filterName,
				filterType: productsAction.filterType,
				categoryFilters: { ...productsAction.categoryFilters },
			};
		case "FILTER_BRAND":
			return {
				...productsState,
				filterName: productsAction.filterName,
				filterType: productsAction.filterType,
				brandFilters: { ...productsAction.brandFilters },
			};
		default:
			return { ...productsState, ...productsAction };
	}
};

const sortByReducer = (productsState, productsData) => {
	switch (productsState.sortByType) {
		case "SORT_BY_PRICE_LOW_TO_HIGH":
			return [...productsData].sort(
				(currProduct, nextProduct) => currProduct.price - nextProduct.price
			);
		case "SORT_BY_PRICE_HIGH_TO_LOW":
			return [...productsData].sort(
				(currProduct, nextProduct) => nextProduct.price - currProduct.price
			);
		case "SORT_BY_CUSTOMER_RATING":
			return [...productsData].sort(
				(currProduct, nextProduct) => nextProduct.rating - currProduct.rating
			);
		case "SORT_BY_BETTER_DISCOUNT":
			return [...productsData].sort(
				(currProduct, nextProduct) =>
					nextProduct.discountPercent - currProduct.discountPercent
			);
		default:
			return productsData;
	}
};

const CategoryProducts = (productsState, productsData) =>
	Object.keys(productsState.categoryFilters).filter(
		(item) => productsState.categoryFilters[item]
	).length !== 0
		? Object.keys(productsState.categoryFilters).reduce(
				(prev, curr) =>
					productsState.categoryFilters[curr]
						? [
								...prev,
								...productsData.filter((product) => product.category === curr),
						  ]
						: prev,
				[]
		  )
		: productsData;

const BrandProducts = (productsState, productsData) => {
	Object.keys(productsState.brandFilters).filter(
		(item) => productsState.brandFilters[item]
	).length !== 0
		? Object.keys(productsState.brandFilters).reduce(
				(prev, curr) =>
					productsState.brandFilters[curr]
						? [
								...prev,
								...productsData.filter((product) => product.category === curr),
						  ]
						: prev,
				[]
		  )
		: productsData;
};

export {
	productsReducer,
	Compose,
	sortByReducer,
	BrandProducts,
	CategoryProducts,
};
