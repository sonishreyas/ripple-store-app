import { createContext, useContext, useState } from "react";
import { useReducer } from "react";
import { cartReducer } from "../reducers";

const defaultCartContext = {
	type: "",
	cartItemsCount: 0,
	itemsInCart: [],
};

const CartContext = createContext({ defaultCartContext });

const CartProvider = ({ children }) => {
	const [cartState, cartDispatch] = useReducer(cartReducer, defaultCartContext);
	return (
		<CartContext.Provider value={{ cartState, cartDispatch }}>
			{children}
		</CartContext.Provider>
	);
};

const useCart = () => useContext(CartContext);
export { useCart, CartProvider };
