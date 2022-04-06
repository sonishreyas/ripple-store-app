import axios from "axios";
import { removeFromCartHandler } from "./";

/**
 * Add product data to wishlist
 * @param {*} element
 * @param {Object} productData Product to be added in wishlist
 * @param {function} wishlistDispatch Reducer function
 */
const addToWishlistHandler = (element, productId, token, wishlistDispatch) => {
	element.preventDefault();
	(async () => {
		try {
			const response = await axios.post(
				`/api/user/wishlist`,
				{ product: { _id: productId } },
				{
					headers: {
						Accept: "*/*",
						authorization: token,
					},
				}
			);
			wishlistDispatch({
				type: "ADD_ITEM",
				payload: {
					wishlistItemsCount: response.data.wishlist.length,
					itemsInWishlist: { _id: productId },
				},
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

/**
 * Remove data from wishlist
 * @param element
 * @param {string} productId productId to remove from wishlist
 * @param {function} wishlistDispatch Reducer function
 */
const removeFromWishlistHandler = (
	element,
	productId,
	token,
	wishlistDispatch
) => {
	element.preventDefault();
	(async () => {
		try {
			const response = await axios.delete(`/api/user/wishlist/${productId}`, {
				headers: {
					Accept: "*/*",
					authorization: token,
				},
			});
			wishlistDispatch({
				type: "REMOVE_ITEM",
				payload: {
					wishlistItemsCount: response.data.wishlist.length,
					itemsInWishlist: productId,
				},
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

/**
 * Retrieve wishlist data
 * @param {function} wishlistDispatch Reducer function
 */
const getWishlistDataHandler = (token, wishlistDispatch) => {
	(async () => {
		try {
			const response = await axios.get(`/api/user/wishlist`, {
				headers: {
					Accept: "*/*",
					authorization: token,
				},
			});
			wishlistDispatch({
				type: "GET_ITEM",
				payload: {
					itemsInWishlist: response.data.wishlist,
				},
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

/**
 * Add product data to wishlist and remove it from cart
 * @param {*} element
 * @param {Object} productData Product to be added in wishlist
 * @param {string} token encodedToken of user
 * @param {function} wishlistDispatch Reducer function
 */
const MoveToWishlistHandler = (
	element,
	productId,
	token,
	wishlistDispatch,
	cartDispatch
) => {
	element.preventDefault();
	(async () => {
		try {
			addToWishlistHandler(element, productId, token, wishlistDispatch);
			removeFromCartHandler(element, productId, token, cartDispatch);
		} catch (error) {
			console.log(error);
		}
	})();
};

export {
	addToWishlistHandler,
	removeFromWishlistHandler,
	getWishlistDataHandler,
	MoveToWishlistHandler,
};
