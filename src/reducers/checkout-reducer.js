import { removeFromArray, removeObjFromArray } from "../utils";
/**
 * Reducer function to handle checkout state
 * @param {Object} checkoutState State values of checkout
 * @param {*} checkoutAction The changed state
 * @returns Updated state into checkoutState
 */
const checkoutReducer = (checkoutState, checkoutAction) => {
	console.log("state = ", checkoutState, "action = ", checkoutAction);
	switch (checkoutAction.type) {
		case "ADD_ITEM":
			return {
				...checkoutState,
				checkoutItemsCount:
					checkoutState.checkoutItemsCount + checkoutAction.checkoutItemsCount,
				itemsInCheckout: [
					...checkoutState.itemsInCheckout,
					...checkoutAction.itemsInCheckout,
				],
				checkoutData: [
					...checkoutState.checkoutData,
					checkoutAction.checkoutData,
				],
			};

		case "REMOVE_ITEM":
			return {
				...checkoutState,
				checkoutItemsCount:
					checkoutState.checkoutItemsCount - checkoutAction.checkoutItemsCount,
				itemsInCheckout: removeFromArray(
					checkoutState.itemsInCheckout,
					checkoutAction.itemsInCheckout[0]
				),
				checkoutData: removeObjFromArray(
					checkoutState.checkoutData,
					checkoutAction.checkoutData
				),
			};

		case "GET_ITEM":
			return {
				...checkoutState,
				checkoutData: [...checkoutAction.checkoutData],
			};
		default:
			return checkoutState;
	}
};

export { checkoutReducer };
