import {
	createContext,
	useContext,
	useState,
	useEffect,
	useReducer,
} from "react";
import { cartReducer } from "../reducers";
import { getCartDataHandler } from "../utils";
import { useAuth } from ".";
const defaultCartContext = {
	type: "",
	cartItemsCount: 0,
	itemsInCart: [],
	cartData: [],
};

const CartContext = createContext({ defaultCartContext });

const CartProvider = ({ children }) => {
	const [cartState, cartDispatch] = useReducer(cartReducer, defaultCartContext);
	const [showCouponModal, setShowCouponModal] = useState(false);

	const token = localStorage.getItem("token");
	const { authState } = useAuth();
	useEffect(
		() =>
			authState.token?.length &&
			getCartDataHandler(authState.token, cartDispatch),
		[authState]
	);

	return (
		<CartContext.Provider
			value={{
				cartState,
				cartDispatch,
				showCouponModal,
				setShowCouponModal,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

const useCart = () => useContext(CartContext);
export { useCart, CartProvider };
