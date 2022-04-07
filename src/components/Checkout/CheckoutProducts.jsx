const CheckoutProducts = ({ products, itemCount }) => {
	return (
		<>
			{itemCount ? (
				products.map(
					({
						_id,
						name,
						brand,
						imgURL,
						mrp,
						price,
						rating,
						qty,
						reviews,
						discount,
					}) => {
						return (
							<li key={_id} className="no-list">
								<article className="card horizontal card-shadow p-5 b-radius-2 w-100 h-auto list-card">
									<div className="flex-row p-1 b-radius-2 ">
										<div className="horizontal-card-img--container flex-row justify-content-center align-center flex-wrap b-radius-2">
											<img
												src={imgURL}
												alt={name}
												className="horizontal-card-img b-radius-2 m-5"
											/>
										</div>
										<div className="horizontal-card-text--container flex-column flex-gap-1 p-2 b-radius-2 my-0 mx-5">
											<h3 className="text-bold">{name}</h3>
											<p>{brand}</p>
											<span className="rating flex-row align-center flex-gap-half pb-5">
												{[...Array(rating)].map((item, index) => {
													return (
														<i
															className="fas fa-star set"
															key={`set-star-${index}`}
														></i>
													);
												})}
												{[...Array(5 - rating)].map((item, index) => {
													return (
														<i
															className="fas fa-star unset"
															key={`unset-star-${index}`}
														></i>
													);
												})}{" "}
												<p className="secondary-font">| ({reviews} reviews)</p>
											</span>
											<div className="pricing flex-row align-center flex-gap-half text-bold py-2 px-0">
												<p>Rs. {price}</p>
												<p className="secondary-font">
													<strike>{mrp}</strike>
												</p>
												<p className="discount">( Rs. {discount} OFF )</p>
											</div>
											<p className="text-bold">Quantity: {qty}</p>
										</div>
									</div>
								</article>
							</li>
						);
					}
				)
			) : (
				<h4 className="text-center m-5 p-5">
					No products selected for checkout
				</h4>
			)}
		</>
	);
};

export { CheckoutProducts };
