import axios from "axios";

/**
 * Add product data to cart
 * @param {*} element
 * @param {Object} productData Product to be added in cart
 * @param {string} token encodedToken of user
 * @param {function} cartDispatch Reducer function
 */
const addToCartHandler = (e, productData, token, cartDispatch) => {
	e.preventDefault();
	(async () => {
		try {
			const response = await axios.post(`/api/user/cart`, productData, {
				headers: {
					Accept: "*/*",
					authorization: token,
				},
			});
			cartDispatch({
				type: "ADD_ITEM",
				cartItemsCount: response.data.cart.length,
				itemsInCart: [productData.product._id],
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

/**
 * Remove data from cart
 * @param element
 * @param {string} productId productId to remove from cart
 * @param {string} token encodedToken of user
 * @param {function} cartDispatch Reducer function
 */
const removeFromCartHandler = (element, productId, token, cartDispatch) => {
	element.preventDefault();
	(async () => {
		try {
			const response = await axios.delete(`/api/user/cart/${productId}`, {
				headers: {
					Accept: "*/*",
					authorization: token,
				},
			});
			cartDispatch({
				type: "REMOVE_ITEM",
				cartwishlistItemsCount: response.data.cart.length,
				itemsInCart: [productId],
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

export { addToCartHandler, removeFromCartHandler };
