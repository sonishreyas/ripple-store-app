/**
 * Update billing
 * @param {Object} cartState Cart State
 * @param {*} billingDispatch Reducer function to get billing data
 */
const getBillingDataHandler = (cartData, billingDispatch) => {
	billingDispatch({ type: "RESET" });
	cartData.map((item) => {
		billingDispatch({
			type: "TOTAL_MRP",
			payload: { totalMRP: item.mrp * item.qty },
		});
		billingDispatch({
			type: "DISCOUNT",
			payload: { discount: item.discount * item.qty },
		});
		billingDispatch({
			type: "TOTAL_AMOUNT",
			payload: {
				totalAmount: item.price * item.qty,
			},
		});
	});
};

export { getBillingDataHandler };
