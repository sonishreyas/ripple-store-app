/**
 * Update billing
 * @param {Object} cartState Cart State
 * @param {*} billingDispatch Reducer function to get billing data
 */
const getBillingDataHandler = (cartData, billingDispatch) => {
	billingDispatch({ type: "RESET" });
	cartData.map((item) => {
		billingDispatch({ type: "TOTAL_MRP", totalMRP: item.mrp * item.qty });
		billingDispatch({ type: "DISCOUNT", discount: item.discount * item.qty });
		billingDispatch({
			type: "TOTAL_AMOUNT",
			totalAmount: item.price * item.qty,
		});
	});
};

export { getBillingDataHandler };
