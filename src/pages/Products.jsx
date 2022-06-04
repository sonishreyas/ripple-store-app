import { ProductsContent } from "components";
import { useDocumentTitle } from "custom-hooks";

const ProductsPage = () => {
	useDocumentTitle("Products | Ripple Store");
	<ProductsContent />;
};

export { ProductsPage };
