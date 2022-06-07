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
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ProductListing = () => {
	const { productsData } = useProducts();
	const { wishlistState } = useWishlist();
	const { cartState } = useCart();
	const { authState } = useAuth();
	useEffect(() => window.scrollTo(0, 0), []);
	const [pageNum, setPageNum] = useState(1);
	const [products, setProducts] = useState(productsData.slice(pageNum - 1, 6));
	const noOfPages = Math.ceil(productsData.length / 6);
	const handleUpdatePage = (index) => {
		setPageNum(index);
	};
	useEffect(() => {
		pageNum > 1
			? setProducts(productsData.slice(6 * (pageNum - 1), pageNum * 6 + 1))
			: setProducts(productsData.slice(pageNum - 1, 6));
	}, [pageNum, productsData]);

	return (
		<article className="flex-column justify-content-start align-center w-100 m-10">
			<div className="products-container flex-row align-center flex-gap-2 flex-wrap">
				{products.length !== 0 ? (
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
							reviews,
							discount,
						}) => (
							<article
								key={_id}
								className="no-link-decoration card vertical card-shadow p-5 b-radius-2"
							>
								<Link
									to={`/product/${_id}`}
									className="no-link card-image-container flex-row justify-content-center align-center flex-wrap b-radius-2"
								>
									<img
										src={imgURL}
										alt={`${brand} ${category}`}
										className="card-image b-radius-2 mt-2"
									/>
								</Link>
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
			<div className="pagination flex-row justify-content-center align-center p-10 my-10 b-radius-4 flex-gap-1 w-100 ">
				{pageNum !== 1 && (
					<button
						className="page-number p-5 b-radius-circle text-bold cursor-pointer"
						onClick={() => handleUpdatePage(pageNum - 1)}
					>
						{"<"}
					</button>
				)}
				{[...Array(noOfPages)].map((item, index) => (
					<button
						className={`page-number p-5 b-radius-circle text-bold page-active cursor-pointer ${
							index + 1 === pageNum ? "page-selected" : ""
						}`}
						onClick={() => handleUpdatePage(index + 1)}
						key={index}
					>
						{index + 1}
					</button>
				))}
				{pageNum !== noOfPages && (
					<button
						className="page-number p-5 b-radius-circle text-bold cursor-pointer"
						onClick={() => handleUpdatePage(pageNum + 1)}
					>
						{">"}
					</button>
				)}
			</div>
		</article>
	);
};
export { ProductListing };
