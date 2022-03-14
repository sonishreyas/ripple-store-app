import {
	createContext,
	useContext,
	useReducer,
	useState,
	useEffect,
} from "react";
import { productsReducer } from "../reducers/index";
import {
	Compose,
	sortByReducer,
	BrandProducts,
	CategoryProducts,
} from "../reducers/products-reducer";
// import { filters as filtersData } from "../data/filters";
import { useProductsDataHook, useFiltersDataHook } from "../custom-hooks";

const getDefaultProductsState = (filtersData) => {
	return {
		filterName: "Reset",
		filterType: { status: false },
		categoryFilters: filtersData.categoryFilters.reduce((prev, curr) => {
			prev[curr.name] = curr.status;
			return prev;
		}, {}),
		brandFilters: filtersData.brandFilters.reduce((prev, curr) => {
			prev[curr.name] = curr.status;
			return prev;
		}, {}),
		sortBy: "",
		sortByType: "",
	};
};

const ProductsContext = createContext({});

const ProductsProvider = ({ children }) => {
	const productsData = useProductsDataHook();
	const filtersData = useFiltersDataHook();
	console.log(filtersData);
	// const [productsState, productsDispatch] = useReducer(
	// 	productsReducer,
	// 	defaultProductsState
	// );
	// const filteredProductsData = Compose(
	// 	productsState,
	// 	sortByReducer,
	// 	CategoryProducts,
	// 	BrandProducts
	// )(productsData);

	return (
		<ProductsContext.Provider
			value={{
				// productsState,
				productsData: productsData,
				filtersData: filtersData,
				// productsDispatch,
			}}
		>
			{children}
		</ProductsContext.Provider>
	);
};

const useProducts = () => useContext(ProductsContext);

export { ProductsProvider, useProducts };
