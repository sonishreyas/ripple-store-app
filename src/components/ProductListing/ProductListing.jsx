import { useCart, useProducts, useWishlist, useAuth } from "context";
import {
	AddToCartBtn,
	AddToCartBtnRedirect,
	GoToCartBtn,
	AddToWishlistBtn,
	AddToWishlistBtnRedirect,
	RemoveFromWishlistBtn,
} from "./product-card";
import { presentObjInArray } from "utils";
import { useEffect } from "react";
const ProductListing = () => {
	const { productsData } = useProducts();
	const { wishlistState } = useWishlist();
	const { cartState } = useCart();
	const { authState } = useAuth();
	useEffect(() => window.scrollTo(0, 0), []);
	return (
		<article className="grid-col-70 ">
			<div className="products-container flex-row align-center flex-gap-2 flex-wrap">
				{productsData.length !== 0 ? (
					productsData.map(
						({
							_id,
							name,
							brand,
							category,
							discountPercent,
							imgURL,
							mrp,
							price,
							rating,
							type,
							reviews,
							discount,
						}) => (
							<article
								key={_id}
								className="no-link-decoration card vertical card-shadow p-5 b-radius-2"
							>
								<section className="card-image-container flex-row justify-content-center align-center flex-wrap b-radius-2">
									<img
										src={imgURL}
										alt={`${brand} ${category}`}
										className="card-image b-radius-2 mt-2"
									/>
								</section>
								{authState.token?.length ? (
									presentObjInArray(wishlistState.itemsInWishlist, _id) ? (
										<RemoveFromWishlistBtn
											productId={_id}
											token={authState.token}
										/>
									) : (
										<AddToWishlistBtn
											productData={_id}
											token={authState.token}
										/>
									)
								) : (
									<AddToWishlistBtnRedirect />
								)}
								<section className="card-content p-5 pb-0">
									<h4 className="card-title">{name}</h4>
									<p className="card-category my-3">{type}</p>
									<span className="card-price-tag mt-3 flex-row align-center flex-gap-half text-bold">
										<p className="p-0 m-0">Rs. {price}</p>
										<strike className="p-0 m-0">{mrp}</strike>
										<p className="discount p-0 m-0">({discountPercent} %)</p>
									</span>
								</section>
								<section className="card-tag m-2 px-1 py-0 b-radius-1">
									<span className="card-review m-3 p-0 text-bold flex-row align-center flex-gap-half">
										<p>{rating}</p>
										<span className="review-star">
											<i className="fas fa-star"></i>
										</span>
									</span>
								</section>
								{authState.token?.length ? (
									presentObjInArray(cartState.itemsInCart, _id) ? (
										<GoToCartBtn />
									) : (
										<AddToCartBtn
											productData={{ _id }}
											token={authState.token}
										/>
									)
								) : (
									<AddToCartBtnRedirect />
								)}
							</article>
						)
					)
				) : (
					<h4>No Products Found</h4>
				)}
			</div>
		</article>
	);
};
export { ProductListing };
