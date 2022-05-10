import { useProducts } from "context";

const RatingFilter = () => {
	const { productsState, productsDispatch, filtersData } = useProducts();

	const minRatingHandler = (e) =>
		productsDispatch({
			type: "MIN_RATING",
			payload: {
				minRating: e.target.value,
				progressStatusMinRating:
					(e.target.value * 100) / filtersData.ratingFilter.maxRating + "%",
			},
		});

	const maxRatingHandler = (e) =>
		productsDispatch({
			type: "MAX_RATING",
			payload: {
				maxRating: e.target.value,
				progressStatusMaxRating:
					100 -
					(e.target.value * 100) / filtersData.ratingFilter.maxRating +
					"%",
			},
		});

	return (
		<ul className="outline-container rating-slider p-5 my-5 b-radius-2 flex-column flex-gap-1 flex-wrap w-100  my-5">
			<li className="no-list form-heading text-bold py-5 px-0">Rating</li>

			<article className="range-slider-container b-radius-1">
				<article
					className="range-slider-progress b-radius-1"
					style={{
						left: productsState.progressStatusMinRating,
						right: productsState.progressStatusMaxRating,
					}}
				></article>
			</article>

			<article className="range-input">
				<input
					type="range"
					name="range-min"
					min={filtersData.ratingFilter.minRating}
					max={filtersData.ratingFilter.maxRating}
					value={productsState.minRating}
					onChange={minRatingHandler}
					className="range-min"
					step="1"
				/>{" "}
				<input
					type="range"
					name="range-max"
					min={filtersData.ratingFilter.minRating}
					max={filtersData.ratingFilter.maxRating}
					value={productsState.maxRating}
					onChange={maxRatingHandler}
					className="range-max"
					step="1"
				/>
			</article>

			<article className="value-input flex-row flex-gap-2 align-center ">
				<article className="field flex-row align-center">
					<input
						type="number"
						onChange={minRatingHandler}
						className="input-min w-100 b-radius-1 h4"
						value={productsState.minRating}
					/>
				</article>
				<span className="h5">to</span>
				<article className="field flex-row align-center">
					<input
						type="number"
						value={productsState.maxRating}
						onChange={maxRatingHandler}
						className="input-max w-100 b-radius-1 h4"
					/>
				</article>
			</article>
		</ul>
	);
};

export { RatingFilter };
