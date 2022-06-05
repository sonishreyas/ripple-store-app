import {
	createContext,
	useContext,
	useReducer,
	useState,
	useEffect,
} from "react";
import { productsReducer, sortByReducer } from "reducers";
import {
	BrandProducts,
	ProductsCompose,
	CategoryProducts,
	PriceProducts,
	RatingProducts,
} from "utils";
import { useProductsDataHook, useFiltersDataHook } from "custom-hooks";

const getDefaultProductsState = (filtersData) => {
	return {
		filterName: "Reset",
		sortByType: "",
		filterSelectClassName: "",
		categoryFilters: filtersData.categoryFilters.reduce((prev, curr) => {
			prev[curr.name] = curr.status;
			return prev;
		}, {}),
		brandFilters: filtersData.brandFilters.reduce((prev, curr) => {
			prev[curr.name] = curr.status;
			return prev;
		}, {}),
		minPrice: filtersData.priceFilter.minPrice,
		progressStatusMinPrice: "0%",
		maxPrice: filtersData.priceFilter.maxPrice,
		progressStatusMaxPrice: "0%",
		minRating: filtersData.ratingFilter.minRating,
		progressStatusMinRating: "0%",
		maxRating: filtersData.ratingFilter.maxRating,
		progressStatusMaxRating: "0%",
	};
};

const ProductsContext = createContext({});

const ProductsProvider = ({ children }) => {
	const productsData = useProductsDataHook();
	const filtersData = useFiltersDataHook();

	const [defaultProductsState, setDefaultProductState] = useState({});
	useEffect(() => {
		if (Object.keys(filtersData).length !== 0 && productsData.length !== 0) {
			setDefaultProductState(getDefaultProductsState(filtersData));
		}
	}, [filtersData]);

	const [productsState, productsDispatch] = useReducer(
		productsReducer,
		defaultProductsState
	);
	useEffect(() => {
		if (Object.keys(defaultProductsState).length !== 0) {
			productsDispatch({
				payload: { ...defaultProductsState },
				type: "GET_DATA",
			});
		}
	}, [defaultProductsState]);

	const [filteredProductsData, setFilteredProductsData] =
		useState(productsData);
	useEffect(() => {
		if (productsData.length !== 0 && Object.keys(productsState).length !== 0) {
			setFilteredProductsData(
				ProductsCompose(
					productsState,
					CategoryProducts,
					BrandProducts,
					sortByReducer,
					PriceProducts,
					RatingProducts
				)(productsData)
			);
		}
	}, [productsData, productsState]);
	const [showFiltersContainer, setShowFiltersContainer] = useState(true);

	return (
		<ProductsContext.Provider
			value={{
				productsState,
				productsData: filteredProductsData,
				allProductsData: productsData,
				filtersData: filtersData,
				productsDispatch,
				clearFilters: defaultProductsState,
				showFiltersContainer,
				setShowFiltersContainer,
			}}
		>
			{children}
		</ProductsContext.Provider>
	);
};

const useProducts = () => useContext(ProductsContext);

export { ProductsProvider, useProducts };
