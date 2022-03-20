import { createContext, useContext, useEffect, useState } from "react";
import { useReducer } from "react";
const removeFromArray = (arr, element) =>
	arr.filter((item) => item !== element);

const wishlistReducer = (wishlistState, wishlistAction) => {
	switch (wishlistAction.type) {
		case "ADD_ITEM":
			return {
				...wishlistState,
				wishlistItemsCount: wishlistAction.wishlistItemsCount,
				itemsInWishlist: [
					...wishlistState.itemsInWishlist,
					...wishlistAction.itemsInWishlist,
				],
			};

		case "REMOVE_ITEM":
			return {
				...wishlistState,
				wishlistItemsCount: wishlistAction.wishlistItemsCount,
				itemsInWishlist: removeFromArray(
					wishlistState.itemsInWishlist,
					wishlistAction.itemsInWishlist[0]
				),
			};
		default:
			return wishlistState;
	}
};
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
