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
import { useProductsDataHook, useFiltersDataHook } from "../custom-hooks";

const getDefaultProductsState = (filtersData) => {
	return {
		filterName: "Reset",
		filterType: "default",
		sortBy: "",
		sortByType: "",
		filterSelectClassName: "",
	};
};

const ProductsContext = createContext({});

const ProductsProvider = ({ children }) => {
	const productsData = useProductsDataHook();
	const filtersData = useFiltersDataHook();
	const defaultProductsState =
		Object.keys(filtersData).length !== 0
			? getDefaultProductsState(filtersData)
			: {};
	const [productsState, productsDispatch] = useReducer(
		productsReducer,
		defaultProductsState
	);
	const filteredProductsData = Compose(
		productsState,
		sortByReducer
		// CategoryProducts,
		// BrandProducts
	)(productsData);
	return (
		<ProductsContext.Provider
			value={{
				productsState,
				productsData: filteredProductsData,
				filtersData: filtersData,
				productsDispatch,
			}}
		>
			{children}
		</ProductsContext.Provider>
	);
};

const useProducts = () => useContext(ProductsContext);

export { ProductsProvider, useProducts };
