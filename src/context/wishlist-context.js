import { createContext, useContext, useEffect, useState } from "react";
import { useReducer } from "react";
import { wishlistReducer } from "reducers";
import { getWishlistDataHandler } from "utils";
import { useAuth } from ".";
const defaultWishlistContext = {
	wishlistItemsCount: 0,
	itemsInWishlist: [],
};

const WishlistContext = createContext(defaultWishlistContext);

const WishlistProvider = ({ children }) => {
	const [wishlistState, wishlistDispatch] = useReducer(
		wishlistReducer,
		defaultWishlistContext
	);
	const { authState } = useAuth();
	useEffect(
		() =>
			authState.token?.length &&
			getWishlistDataHandler(authState.token, wishlistDispatch),
		[authState]
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
