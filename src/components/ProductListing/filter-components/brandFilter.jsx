import { useProducts } from "context";

const BrandFilter = () => {
	const { productsState, productsDispatch, filtersData } = useProducts();

	const brandFilterHandler = (e, name, btnType) =>
		productsDispatch({
			type: btnType,
			payload: {
				filterName: name,
				brandFilters: ((brandFilters, e) => {
					const newBrandFilters = { ...brandFilters };
					newBrandFilters[name] = e.target.checked;
					return newBrandFilters;
				})(productsState.brandFilters, e),
			},
		});

	return (
		<ul className="checkbox-btn-container pb-10 outline-container p-5 b-radius-2 my-5">
			<li className="no-list form-heading text-bold py-5 px-0">Brand</li>
			{filtersData.brandFilters.map(({ name, btnType }, index) => {
				return (
					<li className="no-list w-100 my-2" key={`brand-${index}`}>
						<label
							className={`basic-chip flex-row align-center flex-wrap flex-gap-1 h6 filter-chip cursor-pointer ${
								productsState.brandFilters[name] ? " fliter-chip-selected" : ""
							}`}
						>
							<input
								className="filters"
								type="checkbox"
								value={btnType}
								checked={productsState.brandFilters[name] ? true : false}
								onChange={(e) => brandFilterHandler(e, name, btnType)}
							/>
							<i className="fa-solid fa-circle-check"></i>
							<p className="basic-chip-content">{name}</p>
						</label>
					</li>
				);
			})}
		</ul>
	);
};

export { BrandFilter };
