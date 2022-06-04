import { useDocumentTitle } from "custom-hooks";

const ProductDetails = () => {
	useDocumentTitle("Product | Ripple Store");
	return (
		<>
			<h1>This is ProductDetails</h1>
		</>
	);
};

export { ProductDetails };
