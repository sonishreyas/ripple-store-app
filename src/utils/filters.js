/**
 *
 * @param {Object} productsState State values for products
 * @param  {...any} functions Any function that is called
 * @returns {array} Filtered data based on the functions called.
 */
const ProductsCompose =
	(productsState, ...functions) =>
	(productsData) =>
		functions.reduce((prev, curr) => curr(productsState, prev), productsData);

/**
 *
 * @param {Object} productsState State values for products
 * @param {array} productsData Products Data
 * @returns {array} Array of products filtered based on selected categories
 */
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

/**
 *
 * @param {Object} productsState State values for products
 * @param {array} productsData Products Data
 * @returns {array} Array of products filtered based on selected brands
 */
const BrandProducts = (productsState, productsData) =>
	Object.keys(productsState.brandFilters).filter(
		(item) => productsState.brandFilters[item]
	).length !== 0
		? Object.keys(productsState.brandFilters).reduce(
				(prev, curr) =>
					productsState.brandFilters[curr]
						? [
								...prev,
								...productsData.filter((product) => product.brand === curr),
						  ]
						: prev,
				[]
		  )
		: productsData;

/**
 *
 * @param {Object} productsState State values for products
 * @param {array} productsData Products Data
 * @returns {array} Array of products filtered based on price
 */
const PriceProducts = (productsState, productsData) =>
	productsData.filter(
		(item) =>
			item.price >= productsState.minPrice &&
			item.price <= productsState.maxPrice
	);

/**
 *
 * @param {Object} productsState State values for products
 * @param {array} productsData Products Data
 * @returns {array} Array of products filtered based on rating
 */
const RatingProducts = (productsState, productsData) =>
	productsData.filter(
		(item) =>
			item.rating >= productsState.minRating &&
			item.rating <= productsState.maxRating
	);

export {
	BrandProducts,
	CategoryProducts,
	ProductsCompose,
	PriceProducts,
	RatingProducts,
};
