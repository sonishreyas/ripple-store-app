import { useProducts } from "context";

const PriceFilter = () => {
	const { productsState, productsDispatch, filtersData } = useProducts();

	const minPriceHandler = (e) =>
		productsDispatch({
			type: "MIN_PRICE",
			payload: {
				minPrice: e.target.value,
				progressStatusMinPrice:
					(e.target.value * 100) / filtersData.priceFilter.maxPrice + "%",
			},
		});

	const maxPriceHandler = (e) =>
		productsDispatch({
			type: "MAX_PRICE",
			payload: {
				maxPrice: e.target.value,
				progressStatusMaxPrice:
					100 - (e.target.value * 100) / filtersData.priceFilter.maxPrice + "%",
			},
		});

	return (
		<ul className="outline-container price-slider p-5 my-5 b-radius-2 flex-column flex-gap-1 flex-wrap w-100  my-5">
			<li className="no-list form-heading text-bold py-5 px-0">Price</li>

			<article className="range-slider-container b-radius-1">
				<article
					className="range-slider-progress b-radius-1"
					style={{
						left: productsState.progressStatusMinPrice,
						right: productsState.progressStatusMaxPrice,
					}}
				></article>
			</article>

			<article className="range-input">
				<input
					type="range"
					name="range-min"
					min={filtersData.priceFilter.minPrice}
					max={filtersData.priceFilter.maxPrice}
					value={productsState.minPrice}
					onChange={minPriceHandler}
					className="range-min"
					step="100"
				/>{" "}
				<input
					type="range"
					name="range-max"
					min={filtersData.priceFilter.minPrice}
					max={filtersData.priceFilter.maxPrice}
					value={productsState.maxPrice}
					onChange={maxPriceHandler}
					className="range-max"
					step="100"
				/>
			</article>

			<article className="value-input flex-row flex-gap-2 align-center ">
				<article className="field flex-row align-center">
					<input
						type="number"
						onChange={minPriceHandler}
						className="input-min w-100 b-radius-1 h4"
						value={productsState.minPrice}
					/>
				</article>
				<span className="h5">to</span>
				<article className="field flex-row align-center">
					<input
						type="number"
						value={productsState.maxPrice}
						onChange={maxPriceHandler}
						className="input-max w-100 b-radius-1 h4"
					/>
				</article>
			</article>
		</ul>
	);
};

export { PriceFilter };
