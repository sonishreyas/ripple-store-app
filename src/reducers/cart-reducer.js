import { removeFromArray } from "../utils";
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
			};

		case "REMOVE_ITEM":
			return {
				...cartState,
				cartItemsCount: cartAction.cartItemsCount,
				itemsInCart: removeFromArray(
					cartState.itemsInCart,
					cartAction.itemsInCart[0]
				),
			};
		default:
			return cartState;
	}
};

export { cartReducer };
