import { Filters, ProductListing } from "./index";
const ProductsContent = () => {
	return (
		<main className="main grid-30-70-column">
			<Filters />
			<ProductListing />
		</main>
	);
};
export { ProductsContent };
