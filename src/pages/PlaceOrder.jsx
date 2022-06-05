import { PlaceOrderContent } from "components";
import { useDocumentTitle } from "custom-hooks";

const PlaceOrderPage = () => {
	useDocumentTitle("Order | Ripple Store");
	return <PlaceOrderContent />;
};

export { PlaceOrderPage };
