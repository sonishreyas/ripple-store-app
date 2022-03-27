/**
 * Add product data to checkout
 * @param {*} element
 * @param {Object} productData Product to be added in checkout
 * @param {string} token encodedToken of user
 * @param {function} checkoutDispatch Reducer function
 */
const addToCheckoutHandler = (checkoutDispatch, productData) => {
	checkoutDispatch({
		type: "ADD_ITEM",
		checkoutItemsCount: 1,
		itemsInCheckout: [productData._id],
		checkoutData: { ...productData },
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
		checkoutCheckoutItemsCount: -1,
		itemsInCheckout: [productId],
		checkoutData: productId,
	});
};

export { addToCheckoutHandler, removeFromCheckoutHandler };
