import { createContext, useContext, useReducer, useEffect } from "react";
import { billingReducer } from "../reducers";
import { useCart, useProducts } from "./";
import { getBillingDataHandler, getCartsDataFromId } from "../utils";
const defaultBillingContext = {
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
	const { allProductsData } = useProducts();
	useEffect(() => {
		if (allProductsData?.length && cartState.itemsInCart?.length) {
			const cartData = getCartsDataFromId(
				cartState.itemsInCart,
				allProductsData
			);
			getBillingDataHandler(cartData, billingDispatch);
		}
	}, [cartState, allProductsData]);

	return (
		<BillingContext.Provider value={{ billingState, billingDispatch }}>
			{children}
		</BillingContext.Provider>
	);
};

const useBilling = () => useContext(BillingContext);
export { useBilling, BillingProvider };
