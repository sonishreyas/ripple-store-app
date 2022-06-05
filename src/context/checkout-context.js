import { createContext, useContext, useReducer } from "react";
import { checkoutReducer } from "reducers";
const defaultCheckoutContext = {
	checkoutItemsCount: 0,
	itemsInCheckout: [],
};

const CheckoutContext = createContext({ defaultCheckoutContext });

const CheckoutProvider = ({ children }) => {
	const [checkoutState, checkoutDispatch] = useReducer(
		checkoutReducer,
		defaultCheckoutContext
	);

	return (
		<CheckoutContext.Provider
			value={{
				checkoutState,
				checkoutDispatch,
			}}
		>
			{children}
		</CheckoutContext.Provider>
	);
};

const useCheckout = () => useContext(CheckoutContext);
export { useCheckout, CheckoutProvider };
