import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { v4 as uuid } from "uuid";
import {
	useAddress,
	useBilling,
	useAuth,
	useCheckout,
	useProducts,
	useCart,
	useOrders,
} from "context";
import {
	addToOrdersHandler,
	getCartsDataFromId,
	removeFromCartHandler,
} from "utils";

const handlePlaceOrder = (
	e,
	checkoutState,
	products,
	checkoutDispatch,
	ordersDispatch,
	authState,
	cartDispatch
) => {
	const orderId = uuid();
	checkoutState.itemsInCheckout.map((id) =>
		removeFromCartHandler(e, id, authState.token, cartDispatch)
	);
	products.map((productData) =>
		addToOrdersHandler(
			e,
			{ orderId: orderId, ...productData },
			authState.token,
			ordersDispatch
		)
	);
	checkoutDispatch({ type: "RESET" });
};

function usePaymentIntegration() {
	const navigate = useNavigate();
	const { authState } = useAuth();
	const { addressState } = useAddress();
	const { billingState } = useBilling();
	const { checkoutState, checkoutDispatch } = useCheckout();
	const { allProductsData } = useProducts();
	const { cartState, cartDispatch } = useCart();
	const { ordersDispatch } = useOrders();
	const cartData = getCartsDataFromId(cartState.itemsInCart, allProductsData);
	const products = checkoutState.itemsInCheckout.reduce(
		(prev, curr) => [...prev, cartData.find((item) => item._id === curr)],
		[]
	);
	const paymentSuccessful = async (rzpResponse, e) => {
		handlePlaceOrder(
			e,
			checkoutState,
			products,
			checkoutDispatch,
			ordersDispatch,
			authState,
			cartDispatch
		);
		navigate("/order");
	};

	const loadScript = async (url) => {
		return new Promise((resolve) => {
			const script = document.createElement("script");
			script.src = url;

			script.onload = () => {
				resolve(true);
			};

			script.onerror = () => {
				resolve(false);
			};
			document.body.appendChild(script);
		});
	};

	const displayRazorpay = async () => {
		const res = await loadScript(
			"https://checkout.razorpay.com/v1/checkout.js"
		);

		if (!res) {
			toast.error("Please check your internet connection");
			return;
		}
		const options = {
			key: process.env.REACT_APP_RZP_KEY,
			amount: billingState?.totalAmount * 100,
			currency: "INR",
			name: "Ripple Store",
			description: "Thank you for shopping with us",
			image:
				"https://raw.githubusercontent.com/sonishreyas/rippleUI/dev/components/media/images/ripple-logo.png",
			handler: function (response) {
				paymentSuccessful(response);
			},
			prefill: {
				name: `${authState.firstName} ${authState.lastName}`,
				email: `${authState.email}`,
				contact: authState.email,
			},
			theme: {
				color: "#02B075",
			},
			notes: {
				address: `${addressState?.selectedAddress?.name}, ${addressState?.selectedAddress?.houseNo}, ${addressState?.selectedAddress?.society}, ${addressState?.selectedAddress?.area},${addressState?.selectedAddress?.city}, ${addressState?.selectedAddress?.zipCode}`,
			},
		};
		const paymentObject = new window.Razorpay(options);
		paymentObject.on("payment.failed", function (response) {
			toast.error("Something went wrong! Please try again later");
		});
		paymentObject.open();
	};

	return { paymentSuccessful, loadScript, displayRazorpay };
}

export { usePaymentIntegration };
