import { useProducts } from "context";

const FilterHeader = () => {
	const { productsDispatch, clearFilters, setShowFiltersContainer } =
		useProducts();
	const clearAllHandler = () =>
		productsDispatch({
			type: "GET_DATA",
			payload: { ...clearFilters },
		});

	const handleApplyFilter = () => setShowFiltersContainer(false);
	return (
		<section className="form-header flex-row align-center justify-content-space-between p-5 pb-10 w-100 h-auto ">
			<h3 className="form-heading text-bold py-5 px-0">Filters</h3>
			<button
				type="button"
				className="primary-btn no-link-decoration text-tertiary-color text-bold p-2 px-4 b-radius-4 clear-filter-button cursor-pointer"
				onClick={clearAllHandler}
			>
				Clear All
			</button>
			<button
				type="button"
				className="primary-btn no-link-decoration text-tertiary-color text-bold p-2 px-4 b-radius-4 apply-filter-button cursor-pointer"
				onClick={handleApplyFilter}
			>
				Apply
			</button>
		</section>
	);
};

export { FilterHeader };
