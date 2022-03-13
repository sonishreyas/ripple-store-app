import { createContext, useContext, useReducer } from "react";
import { productsReducer } from "../reducers/index";
import { useFiltersHook, useProductsHook } from "../utilities";
// import { useFilters } from "./filter-context";
import {
	Compose,
	sortByReducer,
	BrandProducts,
	CategoryProducts,
} from "../reducers/products-reducer";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
	const { filtersData } = useFiltersHook();
	console.log("filterData kaha hai: ", filtersData);

	const { productsData } = useProductsHook();
	const defaultProductsState = {
		filterName: "Reset",
		filterType: { status: false },
		categoryFilters: filtersData?.categoryFilters.reduce((prev, curr) => {
			prev[curr.name] = curr.status;
			return prev;
		}, {}),
		brandFilters: filtersData?.brandFilters.reduce((prev, curr) => {
			prev[curr.name] = curr.status;
			return prev;
		}, {}),
		sortBy: "",
		sortByType: "",
	};

	const [productsState, productsDispatch] = useReducer(
		productsReducer,
		defaultProductsState
	);
	const filteredProductsData = Compose(
		productsState,
		sortByReducer,
		CategoryProducts,
		BrandProducts
	)(productsData);

	return (
		<ProductsContext.Provider
			value={{
				productsState,
				productsData: filteredProductsData,
				productsDispatch,
				filtersData,
			}}
		>
			{children}
		</ProductsContext.Provider>
	);
};

const useProducts = () => useContext(ProductsContext);

export { ProductsProvider, useProducts };
