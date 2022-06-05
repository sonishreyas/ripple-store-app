import {
	AddToCartBtn,
	AddToCartBtnRedirect,
	AddToWishlistBtn,
	AddToWishlistBtnRedirect,
	GoToCartBtn,
	RemoveFromWishlistBtn,
} from ".";
import { useAuth, useCart, useProducts, useWishlist } from "context";
import { useParams } from "react-router-dom";
import { presentObjInArray } from "utils";

const ProductDetailsContent = () => {
	const { productId } = useParams();
	const { allProductsData } = useProducts();
	const { authState } = useAuth();
	const { cartState } = useCart();
	const { wishlistState } = useWishlist();
	const product = allProductsData.find((item) => item._id === productId);
	console.log(cartState, productId);
	return (
		<main class="main flex-column justify-content-center align-center flex-gap-1 m-10">
			<section class="rui-main--heading-container no-border w-100 h-auto m-auto">
				<article class="basic-card horizontal card-shadow p-5 b-radius-2 w-100 h-auto my-10">
					<div class="horizontal-card-img--container flex-row justify-content-center align-center flex-wrap b-radius-2">
						<img
							src={product.imgURL}
							alt={product.name}
							class="horizontal-card-img b-radius-2 mt-5"
						/>
					</div>
					<div class="horizontal-card-text--container flex-column flex-gap-1 p-5 b-radius-2 my-0 mx-5">
						<h2>{product.name}</h2>
						<p>{product.brand}</p>
						<span className="rating flex-row align-center flex-gap-half pb-5">
							{[...Array(product.rating)].map((item, index) => {
								return (
									<i className="fas fa-star set" key={`set-star-${index}`}></i>
								);
							})}
							{[...Array(5 - product.rating)].map((item, index) => {
								return (
									<i
										className="fas fa-star unset"
										key={`unset-star-${index}`}
									></i>
								);
							})}{" "}
							<p className="secondary-font">| ({product.reviews} reviews)</p>
						</span>

						<div class="pricing flex-row align-center flex-gap-half text-bold py-5 px-0">
							<h4>{product.price}</h4>
							<p class="secondary-font">
								<strike>{product.mrp}</strike>
							</p>
							<p class="discount">( Rs. {product.discount} OFF )</p>
						</div>
						<div class="flex-row align-center flex-gap-1 flex-wrap m-5 horizontal-card-btn-container mb-5">
							{authState.token?.length ? (
								presentObjInArray(cartState.itemsInCart, productId) ? (
									<GoToCartBtn />
								) : (
									<AddToCartBtn
										productData={{ _id: productId }}
										token={authState.token}
									/>
								)
							) : (
								<AddToCartBtnRedirect />
							)}
							{authState.token?.length ? (
								presentObjInArray(wishlistState.itemsInWishlist, productId) ? (
									<RemoveFromWishlistBtn
										productId={productId}
										token={authState.token}
									/>
								) : (
									<AddToWishlistBtn
										productData={productId}
										token={authState.token}
									/>
								)
							) : (
								<AddToWishlistBtnRedirect />
							)}
						</div>
						<div class="horizontal-card-details-container">
							<h3>Specifications</h3>
							<div class="specification-column flex-row align-center flex-wrap">
								<form class="specifications-form flex-column flex-grow-1 flex-wrap">
									<section class="specification flex-column m-5">
										<label for="type" class="specification-key">
											Type
										</label>
										<input
											type="text"
											value="Sneakers"
											class="specification-value p-2"
											readonly
											aria-label="Shoes Type"
										/>
									</section>
									<section class="specification flex-column m-5">
										<label for="type" class="specification-key">
											Pattern
										</label>
										<input
											type="text"
											value="Solid"
											class="specification-value p-2"
											readonly
											aria-label="Shoes pattern"
										/>
									</section>
									<section class="specification flex-column m-5">
										<label for="type" class="specification-key">
											Shoe Width
										</label>
										<input
											type="text"
											value="Regular"
											class="specification-value p-2"
											readonly
											aria-label="Shoe Width"
										/>
									</section>
									<section class="specification flex-column m-5">
										<label for="type" class="specification-key">
											Insole
										</label>
										<input
											type="text"
											value="Comfort Insole"
											class="specification-value p-2"
											readonly
											aria-label="Shoe Insole Material"
										/>
									</section>
								</form>
								<form
									action=""
									class="specifications-form flex-column flex-grow-1 flex-wrap"
								>
									<section class="specification flex-column m-5">
										<label for="type" class="specification-key">
											Sole Material
										</label>
										<input
											type="text"
											value="Rubber"
											class="specification-value p-2"
											readonly
											aria-label="Shoe Sole Material"
										/>
									</section>
									<section class="specification flex-column m-5">
										<label for="type" class="specification-key">
											Warranty
										</label>
										<input
											type="text"
											value="3 months"
											class="specification-value p-2"
											readonly
											aria-label="Shoes Warranty"
										/>
									</section>
									<section class="specification flex-column m-5">
										<label for="type" class="specification-key">
											Toe Shape
										</label>
										<input
											type="text"
											value="Round Toe"
											class="specification-value p-2"
											readonly
											aria-label="Toe Shape"
										/>
									</section>
									<section class="specification flex-column m-5">
										<label for="type" class="specification-key">
											Occasion
										</label>
										<input
											type="text"
											value="Everyday"
											class="specification-value p-2"
											readonly
											aria-label="Occasions"
										/>
									</section>
								</form>
							</div>
						</div>
					</div>
				</article>
			</section>
		</main>
	);
};

export { ProductDetailsContent };
