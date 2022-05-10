import { removeFromArray, removeObjFromArray } from "utils";
/**
 * Reducer function to handle orders state
 * @param {Object} ordersState State values of orders
 * @param {*} type action to perform, payload The changed state
 * @returns Updated state into ordersState
 */
const ordersReducer = (ordersState, { type, payload }) => {
	switch (type) {
		case "ADD_ITEM":
			return {
				...ordersState,
				ordersData: [...ordersState.ordersData, { ...payload.ordersData }],
			};
		case "GET_ITEM":
			return {
				...ordersState,
				ordersData: [...ordersState.ordersData, ...payload.ordersData],
			};

		case "RESET":
			return {
				...ordersState,
				ordersData: [],
			};
		default:
			return ordersState;
	}
};

export { ordersReducer };
