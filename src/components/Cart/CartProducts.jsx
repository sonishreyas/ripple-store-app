import { useCart, useAuth, useProducts, useWishlist } from "../../context";
import { MoveToWishlistBtn } from "../ProductListing/product-card";
import { UpdateCartItem } from "./";
import { getCartsDataFromId, presentObjInArray } from "../../utils";
const CartProducts = () => {
	const { authState } = useAuth();
	const { cartState } = useCart();
	const { wishlistState } = useWishlist();
	const { productsData } = useProducts();
	const products = getCartsDataFromId(cartState.itemsInCart, productsData);
	const itemCount = products.length;
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
							<li key={`cart-${_id}`} className="no-list">
								<article className="card horizontal card-shadow p-5 b-radius-2 m-10">
									<div className="horizontal-card-img--container flex-row justify-content-center align-center flex-wrap b-radius-2">
										<img
											src={imgURL}
											alt={name}
											className="horizontal-card-img b-radius-2 m-5"
										/>
									</div>
									<div className="horizontal-card-text--container flex-column flex-gap-1 p-5 b-radius-2 my-0 mx-5">
										<h2>{name}</h2>
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
										<div className="pricing flex-row align-center flex-gap-half text-bold py-5 px-0">
											<h3>{price}</h3>
											<p className="secondary-font">
												<strike>{mrp}</strike>
											</p>
											<p className="discount">( Rs. {discount} OFF )</p>
										</div>
										<div className="items-counter-container flex-row align-center flex-gap-half text-bold py-5 px-0">
											<span className="icon-btn cursor-pointer">
												{qty > 1 ? (
													<UpdateCartItem
														token={authState.token}
														productId={_id}
														btnType="decrement"
													/>
												) : (
													<UpdateCartItem
														token={authState.token}
														productId={_id}
														btnType="delete"
													/>
												)}
											</span>
											<p className="icon-btn">{qty}</p>
											<span className="icon-btn cursor-pointer">
												<UpdateCartItem
													token={authState.token}
													productId={_id}
													btnType="increment"
												/>
											</span>
										</div>
										<div className="horizontal-card-btn-container flex-row align-center flex-gap-half text-bold py-5 px-0">
											{presentObjInArray(
												wishlistState.itemsInWishlist,
												_id
											) && (
												<MoveToWishlistBtn
													productId={_id}
													token={authState.token}
												/>
											)}
										</div>
									</div>
								</article>
							</li>
						);
					}
				)
			) : (
				<h4 className="text-center m-5 p-5">Cart is empty</h4>
			)}
		</>
	);
};

export { CartProducts };
