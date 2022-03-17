/**
 *
 * @param {Object} productsState State values for products
 * @param {Array} productsAction The changed state
 * @returns Updates productsState value
 */
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
		case "MIN_PRICE":
			return {
				...productsState,
				filterType: productsAction.filterType,
				minPrice: productsAction.minPrice,
				progressStatusMinPrice: productsAction.progressStatusMinPrice,
			};
		case "MAX_PRICE":
			return {
				...productsState,
				filterType: productsAction.filterType,
				maxPrice: productsAction.maxPrice,
				progressStatusMaxPrice: productsAction.progressStatusMaxPrice,
			};
		case "MIN_RATING":
			return {
				...productsState,
				filterType: productsAction.filterType,
				minRating: productsAction.minRating,
				progressStatusMinRating: productsAction.progressStatusMinRating,
			};
		case "MAX_RATING":
			return {
				...productsState,
				filterType: productsAction.filterType,
				maxRating: productsAction.maxRating,
				progressStatusMaxRating: productsAction.progressStatusMaxRating,
			};
		default:
			return { ...productsState, ...productsAction };
	}
};

/**
 *
 * @param {Object} productsState State values for products
 * @param {Array} productsData Array of products
 * @returns Sorted Array of products
 */
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

export { productsReducer, sortByReducer };
