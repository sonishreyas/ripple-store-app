import axios from "axios";

/**
 * Add product data to cart
 * @param {*} element
 * @param {Object} productData Product to be added in cart
 * @param {string} token encodedToken of user
 * @param {function} cartDispatch Reducer function
 */
const addToCartHandler = (e, productData, token, cartDispatch) => {
	e && e.preventDefault();
	(async () => {
		try {
			const response = await axios.post(
				`/api/user/cart`,
				{ product: { _id: productData._id } },
				{
					headers: {
						Accept: "*/*",
						authorization: token,
					},
				}
			);
			cartDispatch({
				type: "ADD_ITEM",
				payload: {
					cartItemsCount: response.data.cart.length,
					itemsInCart: {
						_id: productData._id,
						qty: 1,
					},
				},
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
	element && element.preventDefault();
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
				payload: {
					cartItemsCount: response.data.cart.length,
					itemsInCart: productId,
				},
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

/**
 * Retrieve cart data
 * @param element
 * @param {string} token encodedToken of user
 * @param {function} cartDispatch Reducer function
 */
const getCartDataHandler = (token, cartDispatch) => {
	(async () => {
		try {
			const response = await axios.get(`/api/user/cart`, {
				headers: {
					Accept: "*/*",
					authorization: token,
				},
			});
			cartDispatch({
				type: "GET_ITEM",
				payload: {
					itemsInCart: response.data.cart,
				},
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

/**
 * Update data of cart
 * @param element
 * @param {string} productId productId to remove from cart
 * @param {string} token encodedToken of user
 * @param {function} cartDispatch Reducer function
 */
const updateCartHandler = (
	element,
	productId,
	token,
	cartDispatch,
	actionType
) => {
	element && element.preventDefault();
	(async () => {
		try {
			const response = await axios.post(
				`/api/user/cart/${productId}`,
				actionType,
				{
					headers: {
						Accept: "*/*",
						authorization: token,
					},
				}
			);

			actionType.action.type === "increment"
				? cartDispatch({
						type: "UPDATE_ITEM",
						payload: {
							itemsInCart: { _id: productId, qtyUpdate: 1 },
						},
				  })
				: cartDispatch({
						type: "UPDATE_ITEM",
						payload: {
							itemsInCart: { _id: productId, qtyUpdate: -1 },
						},
				  });
		} catch (error) {
			console.log(error);
		}
	})();
};
export {
	addToCartHandler,
	removeFromCartHandler,
	getCartDataHandler,
	updateCartHandler,
};
