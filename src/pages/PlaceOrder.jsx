import { PlaceOrderContent } from "components";
import { useDocumentTitle } from "custom-hooks";

const PlaceOrderPage = () => {
	useDocumentTitle("Order | Ripple Store");
	<PlaceOrderContent />;
};

export { PlaceOrderPage };
