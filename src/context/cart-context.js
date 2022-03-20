import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [cartItemsCount, setCartItemsCount] = useState(0);

	return (
		<CartContext.Provider value={{ cartItemsCount, setCartItemsCount }}>
			{children}
		</CartContext.Provider>
	);
};

const useCart = () => useContext(CartContext);
export { useCart, CartProvider };
