import { createContext, useContext, useEffect, useState } from "react";
import { useReducer } from "react";
import { wishlistReducer } from "../reducers";

const defaultWishlistContext = {
	type: "",
	wishlistItemsCount: 0,
	itemsInWishlist: [],
};
const WishlistContext = createContext(defaultWishlistContext);

const WishlistProvider = ({ children }) => {
	const [wishlistItemsCount, setWishlistItemsCount] = useState(0);
	const [wishlistState, wishlistDispatch] = useReducer(
		wishlistReducer,
		defaultWishlistContext
	);
	return (
		<WishlistContext.Provider
			value={{
				wishlistItemsCount,
				setWishlistItemsCount,
				wishlistState,
				wishlistDispatch,
			}}
		>
			{children}
		</WishlistContext.Provider>
	);
};

const useWishlist = () => useContext(WishlistContext);
export { useWishlist, WishlistProvider };
