import { useProducts } from "context";

const CategoryFilter = () => {
	const { productsState, productsDispatch, filtersData } = useProducts();

	const categoryFilterHandler = (e, name, btnType) =>
		productsDispatch({
			type: btnType,
			payload: {
				filterName: name,
				categoryFilters: ((categoryFilters, e) => {
					const newCategoryFilters = { ...categoryFilters };
					newCategoryFilters[name] = e.target.checked;
					return newCategoryFilters;
				})(productsState.categoryFilters, e),
			},
		});

	return (
		<ul className="checkbox-btn-container pb-10 outline-container p-5 b-radius-2 my-5">
			<li className="no-list form-heading text-bold py-5 px-0">Categories</li>
			{filtersData.categoryFilters.map(({ name, btnType }, index) => {
				return (
					<li className="no-list w-100 my-2" key={`category-${index}`}>
						<label
							className={`basic-chip flex-row align-center flex-wrap flex-gap-1 h6 filter-chip cursor-pointer ${
								productsState.categoryFilters[name]
									? " fliter-chip-selected"
									: ""
							}`}
						>
							<input
								className="filters"
								type="checkbox"
								value={btnType}
								checked={productsState.categoryFilters[name] ? true : false}
								onChange={(e) => categoryFilterHandler(e, name, btnType)}
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

export { CategoryFilter };
