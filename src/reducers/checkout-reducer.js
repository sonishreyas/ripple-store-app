import { removeFromArray, removeObjFromArray } from "../utils";
/**
 * Reducer function to handle checkout state
 * @param {Object} checkoutState State values of checkout
 * @param {*} type action to perform, payload The changed state
 * @returns Updated state into checkoutState
 */
const checkoutReducer = (checkoutState, { type, payload }) => {
	switch (type) {
		case "ADD_ITEM":
			return {
				...checkoutState,
				checkoutItemsCount:
					checkoutState.checkoutItemsCount + payload.checkoutItemsCount,
				itemsInCheckout: [
					...checkoutState.itemsInCheckout,
					...payload.itemsInCheckout,
				],
			};

		case "REMOVE_ITEM":
			return {
				...checkoutState,
				checkoutItemsCount:
					checkoutState.checkoutItemsCount - payload.checkoutItemsCount,
				itemsInCheckout: removeFromArray(
					checkoutState.itemsInCheckout,
					payload.itemsInCheckout[0]
				),
			};
		case "RESET":
			return {
				...checkoutState,
				checkoutItemsCount: 0,
				itemsInCheckout: [],
			};
		default:
			return checkoutState;
	}
};

export { checkoutReducer };
