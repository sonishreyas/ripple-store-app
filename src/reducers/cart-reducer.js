import { removeFromArray, removeObjFromArray, updateObjInArray } from "utils";
/**
 * Reducer function to handle cart state
 * @param {Object} cartState State values of cart
 * @param {*} type action to perform, payload The changed state
 * @returns Updated state into cartState
 */
const cartReducer = (cartState, { type, payload }) => {
	switch (type) {
		case "ADD_ITEM":
			return {
				...cartState,
				cartItemsCount: payload.cartItemsCount,
				itemsInCart: [...cartState.itemsInCart, { ...payload.itemsInCart }],
			};

		case "REMOVE_ITEM":
			return {
				...cartState,
				cartItemsCount: payload.cartItemsCount,
				itemsInCart: removeFromArray(
					cartState.itemsInCart,
					payload.itemsInCart
				),
			};

		case "UPDATE_ITEM":
			return {
				...cartState,
				itemsInCart: updateObjInArray(
					cartState.itemsInCart,
					payload.itemsInCart
				),
			};

		case "GET_ITEM":
			return {
				...cartState,
				itemsInCart: [...payload.itemsInCart],
			};
		case "RESET":
			return {
				...cartState,
				itemsInCart: [],
				cartItemsCount: 0,
			};
		default:
			return cartState;
	}
};

export { cartReducer };
