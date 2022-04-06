import { createContext, useContext, useReducer, useEffect } from "react";
import { billingReducer } from "../reducers";
import { useCart, useProducts } from "./";
import { getBillingDataHandler, getCartsDataFromId } from "../utils";
const defaultBillingContext = {
	type: "",
	totalMRP: 0,
	dicount: 0,
	totalAmount: 0,
};

const BillingContext = createContext({ defaultBillingContext });

const BillingProvider = ({ children }) => {
	const [billingState, billingDispatch] = useReducer(
		billingReducer,
		defaultBillingContext
	);
	const { cartState } = useCart();
	const { productsData } = useProducts();
	useEffect(() => {
		console.log("here, ", cartState, productsData);
		const cartData = productsData
			? getCartsDataFromId(cartState.itemsInCart, productsData)
			: [];
		getBillingDataHandler(cartData, billingDispatch);
	}, [cartState, productsData]);

	return (
		<BillingContext.Provider value={{ billingState, billingDispatch }}>
			{children}
		</BillingContext.Provider>
	);
};

const useBilling = () => useContext(BillingContext);
export { useBilling, BillingProvider };
