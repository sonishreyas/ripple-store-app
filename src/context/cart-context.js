import {
	createContext,
	useContext,
	useState,
	useEffect,
	useReducer,
} from "react";
import { cartReducer } from "../reducers";
import { getCartDataHandler } from "../utils";
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
	useEffect(() => getCartDataHandler(token, cartDispatch), [cartState]);

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
