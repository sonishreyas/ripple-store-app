/**
 * Reducer function to handle billing
 * @param {Object} billingState State values of billing
 * @param {*} billingAction The changed state
 * @returns Updated state into billingState
 */
const billingReducer = (billingState, billingAction) => {
	switch (billingAction.type) {
		case "TOTAL_MRP":
			return {
				...billingState,
				totalMRP: billingState.totalMRP + billingAction.totalMRP,
			};
		case "DISCOUNT":
			return {
				...billingState,
				discount: billingState.discount + billingAction.discount,
			};
		case "TOTAL_AMOUNT":
			return {
				...billingState,
				totalAmount: billingState.totalAmount + billingAction.totalAmount,
			};
		case "RESET":
			return { ...billingState, totalMRP: 0, discount: 0, totalAmount: 0 };
	}
};

export { billingReducer };
