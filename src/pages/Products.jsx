import { ProductsContent } from "components";
import { useDocumentTitle } from "custom-hooks";

const ProductsPage = () => {
	useDocumentTitle("Products | Ripple Store");
	return <ProductsContent />;
};

export { ProductsPage };
