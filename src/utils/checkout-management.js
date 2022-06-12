/**
 * Add product data to checkout
 * @param {*} element
 * @param {Object} productData Product to be added in checkout
 * @param {string} token encodedToken of user
 * @param {function} checkoutDispatch Reducer function
 */
const addToCheckoutHandler = (checkoutDispatch, productId) => {
	checkoutDispatch({
		type: "ADD_ITEM",
		payload: {
			checkoutItemsCount: 1,
			itemsInCheckout: [productId],
		},
	});
};

/**
 * Remove data from checkout
 * @param element
 * @param {string} productId productId to remove from checkout
 * @param {string} token encodedToken of user
 * @param {function} checkoutDispatch Reducer function
 */
const removeFromCheckoutHandler = (checkoutDispatch, productId) => {
	checkoutDispatch({
		type: "REMOVE_ITEM",
		payload: {
			checkoutItemsCount: 1,
			itemsInCheckout: productId,
		},
	});
};

export { addToCheckoutHandler, removeFromCheckoutHandler };
