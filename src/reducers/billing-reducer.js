/**
 * Reducer function to handle billing
 * @param {Object} billingState State values of billing
 * @param {*} type action to perform, payload The changed state
 * @returns Updated state into billingState
 */
const billingReducer = (billingState, { type, payload }) => {
	switch (type) {
		case "TOTAL_MRP":
			return {
				...billingState,
				totalMRP: billingState.totalMRP + payload.totalMRP,
			};
		case "DISCOUNT":
			return {
				...billingState,
				discount: billingState.discount + payload.discount,
			};
		case "TOTAL_AMOUNT":
			return {
				...billingState,
				totalAmount: billingState.totalAmount + payload.totalAmount,
			};
		case "RESET":
			return { ...billingState, totalMRP: 0, discount: 0, totalAmount: 0 };
	}
};

export { billingReducer };
