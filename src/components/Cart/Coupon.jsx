import { couponsData } from "backend/db";
const Coupon = () => {
	return (
		<ul className="checkbox-btn-container pb-10 outline-container p-5 b-radius-2 my-5">
			<li className="no-list form-heading text-bold py-5 px-0 h3 text-center">
				COUPONS
			</li>

			<li className="no-list w-100 my-10" key={`category-1`}>
				<label
					className={`basic-chip flex-row align-center flex-wrap flex-gap-1 h6 filter-chip cursor-pointer fliter-chip-selected py-10`}
				>
					<input
						className="filters"
						type="radio"
						value={1500}
						checked={true}
						// onChange={(e) => categoryFilterHandler(e, name, btnType)}
					/>
					<i className="fa-solid fa-circle-check"></i>
					<p className="basic-chip-content p-6 h5"></p>
				</label>
			</li>
		</ul>
	);
};

export { Coupon };
