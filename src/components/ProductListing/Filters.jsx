import { useProducts } from "context";
import {
	FilterHeader,
	SortByFilter,
	CategoryFilter,
	BrandFilter,
	PriceFilter,
	RatingFilter,
} from "./filter-components";

const Filters = () => {
	const { productsState, filtersData } = useProducts();
	return (
		<article className="filters-container nav-shadow pr-10 h-auto">
			{Object.keys(filtersData).length !== 0 &&
				Object.keys(productsState).length !== 0 && (
					<form className="flex-column p-5 m-5 w-100 h-auto filter-max-width">
						<FilterHeader />
						<SortByFilter />
						<PriceFilter />
						<CategoryFilter />
						<BrandFilter />
						<RatingFilter />
					</form>
				)}
		</article>
	);
};

export { Filters };
