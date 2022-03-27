import { createContext, useContext, useReducer, useEffect } from "react";
import { billingReducer } from "../reducers";
import { useCart } from "./";
import { getBillingDataHandler } from "../utils";
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
	useEffect(
		() => getBillingDataHandler(cartState, billingDispatch),
		[cartState]
	);

	return (
		<BillingContext.Provider value={{ billingState, billingDispatch }}>
			{children}
		</BillingContext.Provider>
	);
};

const useBilling = () => useContext(BillingContext);
export { useBilling, BillingProvider };
