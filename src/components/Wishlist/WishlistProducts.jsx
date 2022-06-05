import {
	presentObjInArray,
	removeFromWishlistHandler,
	getDataFromId,
} from "utils";
import { useWishlist, useCart, useAuth, useProducts } from "context";
import {
	GoToCartBtn,
	AddToCartBtn,
} from "components/ProductListing/product-card";
const WishlistProducts = () => {
	const { authState } = useAuth();
	const { wishlistState, wishlistDispatch } = useWishlist();
	const { allProductsData } = useProducts();
	const products = getDataFromId(
		wishlistState.itemsInWishlist,
		allProductsData
	);
	const itemCount = products.length;
	const { cartState } = useCart();
	return (
		<>
			<h1 className="homepage-heading text-center m-5 p-5">Wishlist</h1>
			<section className="rui-main--heading-container no-border dismiss-cards flex-container my-10 text-center">
				{itemCount ? (
					products.map(
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
						}) => (
							<article
								className="card vertical card-shadow p-5 b-radius-2"
								key={_id}
							>
								<section className="card-image-container flex-row justify-content-center align-center flex-wrap b-radius-2">
									<img
										src={imgURL}
										alt="Puma Sneakers"
										className="card-image b-radius-2 mt-2"
									/>
								</section>
								<section className="card-content p-5 pb-0 flex-column justify-content-center align-start flex-gap-half">
									<h3>{name}</h3>
									<p>{type}</p>
									<span className="card-price-tag mt-3 flex-row align-center flex-gap-half text-bold">
										<p className="p-0 m-0">Rs. {price}</p>
										<strike className="p-0 m-0">{mrp}</strike>
										<p className="discount p-0 m-0">({discountPercent} %)</p>
									</span>
								</section>
								{presentObjInArray(cartState.itemsInCart, _id) ? (
									<GoToCartBtn />
								) : (
									<AddToCartBtn productData={{ _id }} token={authState.token} />
								)}
								<i
									className="far fa-times-circle rui-cross b-radius-circle card-dismiss-btn m-3 p-1"
									onClick={(e) =>
										removeFromWishlistHandler(
											e,
											_id,
											authState.token,
											wishlistDispatch
										)
									}
								></i>
							</article>
						)
					)
				) : (
					<h4 className="h4 text-center m-5 p-5">
						No product added to wishlist
					</h4>
				)}
			</section>
		</>
	);
};

export { WishlistProducts };
