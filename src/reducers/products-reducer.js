/**
 *
 * @param {Object} productsState State values for products
 * @param {Array} type action to perform payload The changed state
 * @returns Updates productsState value
 */
const productsReducer = (productsState, { type, payload }) => {
	switch (type) {
		case "PRODUCTS_SORT_BY":
			return {
				...productsState,
				sortByType: payload.sortByType,
			};
		case "FILTER_CATEGORY":
			return {
				...productsState,
				filterName: payload.filterName,
				filterType: payload.filterType,
				categoryFilters: { ...payload.categoryFilters },
			};
		case "FILTER_BRAND":
			return {
				...productsState,
				filterName: payload.filterName,
				filterType: payload.filterType,
				brandFilters: { ...payload.brandFilters },
			};
		case "MIN_PRICE":
			return {
				...productsState,
				filterType: payload.filterType,
				minPrice: payload.minPrice,
				progressStatusMinPrice: payload.progressStatusMinPrice,
			};
		case "MAX_PRICE":
			return {
				...productsState,
				filterType: payload.filterType,
				maxPrice: payload.maxPrice,
				progressStatusMaxPrice: payload.progressStatusMaxPrice,
			};
		case "MIN_RATING":
			return {
				...productsState,
				filterType: payload.filterType,
				minRating: payload.minRating,
				progressStatusMinRating: payload.progressStatusMinRating,
			};
		case "MAX_RATING":
			return {
				...productsState,
				filterType: payload.filterType,
				maxRating: payload.maxRating,
				progressStatusMaxRating: payload.progressStatusMaxRating,
			};
		case "GET_DATA":
			return { ...productsState, ...payload };
		default:
			return productsState;
	}
};

/**
 *
 * @param {Object} productsState State values for products
 * @param {Array} productsData Array of products
 * @returns Sorted Array of products
 */
const sortByReducer = ({ sortByType }, productsData) => {
	switch (sortByType) {
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
