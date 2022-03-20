import { createContext, useContext, useEffect, useState } from "react";
import { useReducer } from "react";
import { wishlistReducer } from "../reducers";

const defaultWishlistContext = {
	type: "",
	wishlistItemsCount: 0,
	itemsInWishlist: [],
	wishlistData: [],
};

const WishlistContext = createContext(defaultWishlistContext);

const WishlistProvider = ({ children }) => {
	const [wishlistState, wishlistDispatch] = useReducer(
		wishlistReducer,
		defaultWishlistContext
	);
	return (
		<WishlistContext.Provider
			value={{
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
