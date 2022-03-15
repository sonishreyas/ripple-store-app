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
				sortBy: productsAction.sortByType,
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
			return productsState;
	}
};

const sortByReducer = (productsState, productsData) => {
	switch (productsState.sortBy) {
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
	productsState.categoryFilters[productsState.filterName]
		? productsData.filter(
				(item) => item.productCategory === productsState.filterName
		  )
		: productsData;

const BrandProducts = (productsState, productsData) => {
	console.log(productsState);
	return productsState.brandFilters[productsState.filterName]
		? productsData.filter(
				(item) => item.productBrand === productsState.filterName
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

// Backup

// const productsReducer = (productsState, productsAction) => {
//   switch (productsAction.filterType) {
//     case "SORT_BY_PRICE_LOW_TO_HIGH":
//       return {
//         ...productsState,
//         productsData: [...productsState.productsData].sort(
//           (currProduct, nextProduct) =>
//             currProduct.price - nextProduct.price
//         )
//       };
//     case "SORT_BY_PRICE_HIGH_TO_LOW":
//       return {
//         ...productsState,
//         productsData: [...productsState.productsData].sort(
//           (currProduct, nextProduct) =>
//             nextProduct.price - currProduct.price
//         )
//       };
//     case "SORT_BY_CUSTOMER_RATING":
//       return {
//         ...productsState,
//         productsData: [...productsState.productsData].sort(
//           (currProduct, nextProduct) =>
//             nextProduct.rating - currProduct.rating
//         )
//       };
//     case "SORT_BY_BETTER_DISCOUNT":
//       return {
//         ...productsState,
//         productsData: [...productsState.productsData].sort(
//           (currProduct, nextProduct) =>
//             nextProduct.discountPercent -
//             currProduct.discountPercent
//         )
//       };
//     case "FILTER_CATEGORY":
//       console.log(productsAction);
//       return productsAction.filterStatus
//         ? {
//             ...productsState,
//             productsData: [...productsState.productsData].filter(
//               (currProduct) =>
//                 currProduct.productCategory === productsAction.filterName
//             )
//           }
//         : productsState;
//     case "FILTER_BRAND":
//       return {
//         ...productsState,
//         productsData: [...productsState.productsData].filter(
//           (currProduct) =>
//             currProduct.productBrand === productsAction.filterName
//         )
//       };
//     default:
//       return productsState;
//   }
// };
