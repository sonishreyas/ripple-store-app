import {
	removeFromArray,
	removeObjFromArray,
	updateObjInArray,
} from "../utils";
/**
 * Reducer function to handle cart state
 * @param {Object} cartState State values of cart
 * @param {*} cartAction The changed state
 * @returns Updated state into cartState
 */
const cartReducer = (cartState, cartAction) => {
	switch (cartAction.type) {
		case "ADD_ITEM":
			return {
				...cartState,
				cartItemsCount: cartAction.cartItemsCount,
				itemsInCart: [...cartState.itemsInCart, ...cartAction.itemsInCart],
				cartData: [...cartState.cartData, cartAction.cartData],
			};

		case "REMOVE_ITEM":
			return {
				...cartState,
				cartItemsCount: cartAction.cartItemsCount,
				itemsInCart: removeFromArray(
					cartState.itemsInCart,
					cartAction.itemsInCart[0]
				),
				cartData: removeObjFromArray(cartState.cartData, cartAction.cartData),
			};

		case "UPDATE_ITEM":
			return {
				...cartState,
				cartData: updateObjInArray(cartState.cartData, cartAction.cartData),
			};

		case "GET_ITEM":
			return {
				...cartState,
				cartData: [...cartAction.cartData],
			};
		default:
			return cartState;
	}
};

export { cartReducer };
