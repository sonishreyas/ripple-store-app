import { createContext, useContext, useReducer, useEffect } from "react";
import { ordersReducer } from "reducers";
import { useAuth } from ".";
import { getOrdersDataHandler } from "utils";
const defaultOrdersContext = {
	ordersData: [],
};

const OrdersContext = createContext({ defaultOrdersContext });

const OrdersProvider = ({ children }) => {
	const [ordersState, ordersDispatch] = useReducer(
		ordersReducer,
		defaultOrdersContext
	);
	const { authState } = useAuth();
	useEffect(
		() =>
			authState.token?.length &&
			getOrdersDataHandler(authState.token, ordersDispatch),
		[authState]
	);
	return (
		<OrdersContext.Provider
			value={{
				ordersState,
				ordersDispatch,
			}}
		>
			{children}
		</OrdersContext.Provider>
	);
};

const useOrders = () => useContext(OrdersContext);
export { useOrders, OrdersProvider };
