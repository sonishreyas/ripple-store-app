import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
	const [wishlistItemsCount, setWishlistItemsCount] = useState(0);

	return (
		<WishlistContext.Provider
			value={{ wishlistItemsCount, setWishlistItemsCount }}
		>
			{children}
		</WishlistContext.Provider>
	);
};

const useWishlist = () => useContext(WishlistContext);
export { useWishlist, WishlistProvider };
