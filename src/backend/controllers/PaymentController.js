const Razorpay = require("razorpay");
const razorpay = new Razorpay({
	key_id: "rzp_test_9gujzcnpItottN",
	key_secret: "zCeBnFgIm4prKEkeHczgP9JE",
});

export const createOrders = function (schema, request) {
	razorpay.orders.create({ amount, currency, receipt, payment_capture });
};
