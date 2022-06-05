import { useProducts } from "context";
import { Filters, ProductListing } from "./index";
import { useEffect } from "react";
const ProductsContent = () => {
	const {
		productsDispatch,
		clearFilters,
		showFiltersContainer,
		setShowFiltersContainer,
	} = useProducts();
	const handleShowFiltersContainer = () => setShowFiltersContainer(true);
	useEffect(
		() =>
			window.innerWidth <= 768
				? setShowFiltersContainer(false)
				: setShowFiltersContainer(true),
		[]
	);

	const clearAllHandler = () =>
		productsDispatch({
			type: "GET_DATA",
			payload: { ...clearFilters },
		});
	return (
		<main className="main flex-row flex-gap-1 products-content-container">
			{showFiltersContainer && <Filters />}
			<ProductListing />
			{!showFiltersContainer && (
				<section className="area-btn-container flex-row align-center justify-content-space-between p-5 w-100 h-auto ">
					<h3
						className="form-heading text-bold py-5 px-0"
						onClick={handleShowFiltersContainer}
					>
						Filters
					</h3>
					<button
						type="button"
						className="primary-btn no-link-decoration text-tertiary-color text-bold p-2 px-4 b-radius-4"
						onClick={clearAllHandler}
					>
						Clear All
					</button>
				</section>
			)}
		</main>
	);
};
export { ProductsContent };
