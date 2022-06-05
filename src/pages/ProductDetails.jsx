import { ProductDetailsContent } from "components";
import { useDocumentTitle } from "custom-hooks";

const ProductDetails = () => {
	useDocumentTitle("Product | Ripple Store");
	return <ProductDetailsContent />;
};

export { ProductDetails };
