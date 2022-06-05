import { useCategoriesDataHook } from "custom-hooks";
import { useNavigate } from "react-router-dom";
import { useProducts } from "context";
const Brands = () => {
	const navigate = useNavigate();
	const { productsState, productsDispatch } = useProducts();
	const categoriesData = useCategoriesDataHook();

	const handleFilterClick = (name) => {
		productsDispatch({
			type: "FILTER_BRAND",
			payload: {
				filterName: name,
				brandFilters: ((brandFilters) => {
					const newBrandFilters = { ...brandFilters };
					newBrandFilters[name] = true;
					return newBrandFilters;
				})(productsState.brandFilters),
			},
		});
		navigate("/products");
	};
	return (
		<>
			<h2 className="rui-main--heading my-10 home-heading h1 text-bold">
				Featured Brands
			</h2>
			<section className="flex-row flex-wrap flex-gap-2 align-center justify-content-center my-10 mx-0">
				{categoriesData.length !== 0 ? (
					categoriesData[0].featuredBrands.map(
						({ _id, name, discountOffer, imgURL }) => (
							<div
								className="no-link cursor-pointer card basic-card flex-row justify-content-center align-center flex-wrap card-shadow p-10 b-radius-2 featured-brand-container"
								key={_id}
								onClick={() => handleFilterClick(name)}
							>
								<section className="flex-row justify-content-center align-center featured-brand-section">
									<img
										src={imgURL}
										alt={`${name} logo`}
										className="featured-brand-image"
									/>
								</section>
								<section className="card-content text-center mb-10">
									<h3 className="text-bold text-cta-color">{discountOffer}</h3>
								</section>
							</div>
						)
					)
				) : (
					<></>
				)}
			</section>
		</>
	);
};

export { Brands };
