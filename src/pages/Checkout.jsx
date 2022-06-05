import { CheckoutContent } from "components";
import { useDocumentTitle } from "custom-hooks";

const CheckoutPage = () => {
	useDocumentTitle("Checkout | Ripple Store");
	return <CheckoutContent />;
};

export { CheckoutPage };
