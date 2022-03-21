import axios from "axios";
import { presentObjInArray } from "./";
import { removeFromCartHandler } from "./";
/**
 * Add product data to wishlist
 * @param {*} element
 * @param {Object} productData Product to be added in wishlist
 * @param {string} token encodedToken of user
 * @param {function} wishlistDispatch Reducer function
 */
const addToWishlistHandler = (
	element,
	productData,
	token,
	wishlistDispatch
) => {
	element.preventDefault();
	(async () => {
		try {
			const response = await axios.post(`/api/user/wishlist`, productData, {
				headers: {
					Accept: "*/*",
					authorization: token,
				},
			});
			wishlistDispatch({
				type: "ADD_ITEM",
				wishlistItemsCount: response.data.wishlist.length,
				itemsInWishlist: [productData.product._id],
				wishlistData: productData.product,
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
 * @param {string} token encodedToken of user
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
				wishlistItemsCount: response.data.wishlist.length,
				itemsInWishlist: [productId],
				wishlistData: productId,
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

/**
 * Retrieve wishlist data
 * @param element
 * @param {string} token encodedToken of user
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
				wishlistData: response.data.wishlist,
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
const MoveToWishlistBtn = (
	element,
	productData,
	token,
	wishlistDispatch,
	cartDispatch
) => {
	element.preventDefault();
	(async () => {
		try {
			const wishlistData = await axios.get(`/api/user/wishlist`, {
				headers: {
					Accept: "*/*",
					authorization: token,
				},
			});
			if (!presentObjInArray(wishlistData.wishlist, productData.product._id)) {
				const response = await axios.post(`/api/user/wishlist`, productData, {
					headers: {
						Accept: "*/*",
						authorization: token,
					},
				});
				wishlistDispatch({
					type: "ADD_ITEM",
					wishlistItemsCount: response.data.wishlist.length,
					itemsInWishlist: [productData.product._id],
					wishlistData: productData.product,
				});
			}
			removeFromCartHandler(
				element,
				productData.product._id,
				token,
				cartDispatch
			);
		} catch (error) {
			console.log(error);
		}
	})();
};

export {
	addToWishlistHandler,
	removeFromWishlistHandler,
	getWishlistDataHandler,
	MoveToWishlistBtn,
};
