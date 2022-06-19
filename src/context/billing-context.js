import { createContext, useContext, useReducer, useEffect } from "react";
import { billingReducer } from "reducers";
import { useCart, useProducts, useCheckout } from "./";
import {
	getBillingDataHandler,
	getCartsDataFromId,
	presentInArray,
} from "utils";
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
	const { checkoutState } = useCheckout();
	useEffect(() => {
		if (
			allProductsData?.length &&
			cartState.itemsInCart?.length &&
			checkoutState?.itemsInCheckout?.length
		) {
			const cartData = getCartsDataFromId(
				cartState.itemsInCart,
				allProductsData
			).filter((item) =>
				presentInArray(checkoutState?.itemsInCheckout, item._id)
			);
			getBillingDataHandler(cartData, billingDispatch);
		} else if (!checkoutState?.itemsInCheckout?.length) {
			billingDispatch({ type: "RESET" });
		}
	}, [cartState, allProductsData, checkoutState]);

	return (
		<BillingContext.Provider value={{ billingState, billingDispatch }}>
			{children}
		</BillingContext.Provider>
	);
};

const useBilling = () => useContext(BillingContext);
export { useBilling, BillingProvider };
