import { CartContent } from "components";
import { useDocumentTitle } from "custom-hooks";

const CartPage = () => {
	useDocumentTitle("Cart | Ripple Store");
	<CartContent />;
};

export { CartPage };
