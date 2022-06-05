import { Link } from "react-router-dom";
import {
	addToCartHandler,
	removeFromCartHandler,
	addToWishlistHandler,
	removeFromWishlistHandler,
	MoveToWishlistHandler,
} from "utils";
import { useWishlist, useCart } from "context";

const AddToCartBtn = (props) => {
	const { cartDispatch } = useCart();
	return (
		<button
			onClick={(e) =>
				addToCartHandler(e, props.productData, props.token, cartDispatch)
			}
			className="cursor-pointer p-4 my-5 mb-10 horizontal-card-btn-primary primary-btn b-radius-2 text-bold flex-row justify-content-center align-center flex-gap-1 flex-grow-1"
		>
			<span className="cart-icon">
				<i className="fas fa-shopping-cart"></i>
			</span>
			<p className="cart-text">Add to Cart</p>
		</button>
	);
};

const AddToCartBtnRedirect = () => (
	<Link
		to="/auth"
		state={{ from: { pathname: "/products" } }}
		className="no-link-decoration cursor-pointer p-4 my-5 mb-10 horizontal-card-btn-primary primary-btn b-radius-2 text-bold flex-row justify-content-center align-center flex-gap-1 flex-grow-1"
	>
		<span className="cart-icon">
			<i className="fas fa-shopping-cart"></i>
		</span>
		<p className="cart-text">Add to Cart</p>
	</Link>
);

const GoToCartBtn = () => {
	return (
		<Link
			to={"/cart"}
			className="no-link-decoration cursor-pointer p-4 my-5 mb-10 horizontal-card-btn-primary primary-btn b-radius-2 text-bold flex-row justify-content-center align-center flex-gap-1 flex-grow-1"
		>
			<span className="cart-icon">
				<i className="fas fa-shopping-cart"></i>
			</span>
			<p className="cart-text">Go to Cart</p>
		</Link>
	);
};

const RemoveFromCart = ({ productId, token }) => {
	const { cartDispatch } = useCart();
	const handleRemoveFromCart = (e) =>
		removeFromCartHandler(e, productId, token, cartDispatch);
	return (
		<button
			className="p-5 my-5 mb-10 horizontal-card-btn-primary primary-btn b-radius-2 text-bold flex-row justify-content-center align-center flex-gap-1 flex-grow-1 cursor-pointer"
			onClick={handleRemoveFromCart}
		>
			<span>
				<i className="fa-solid fa-trash"></i>
			</span>
			<p className="btn-text">Remove from Cart</p>
		</button>
	);
};

const AddToWishlistBtn = (props) => {
	const { wishlistDispatch } = useWishlist();
	return (
		<button
			onClick={(e) =>
				addToWishlistHandler(
					e,
					props.productData,
					props.token,
					wishlistDispatch
				)
			}
			className="p-4 my-5 mb-10 outline-btn b-radius-2 text-bold horizontal-card-btn-secondary flex-row justify-content-center align-center flex-gap-1 flex-grow-1 text-bold cursor-pointer"
		>
			<span className="wishlist-icon">
				<i className="far fa-heart"></i>
			</span>
			<p className="wishlist-text">Add to wishlist</p>
		</button>
	);
};

const AddToWishlistBtnRedirect = () => (
	<Link
		to="/auth"
		state={{ from: { pathname: "/products" } }}
		className="no-link-decoration p-4 my-5 mb-10 outline-btn b-radius-2 text-bold horizontal-card-btn-secondary flex-row justify-content-center align-center flex-gap-1 flex-grow-1 text-bold cursor-pointer"
	>
		<span className="wishlist-icon">
			<i className="far fa-heart"></i>
		</span>
		<p className="wishlist-text">Add to wishlist</p>
	</Link>
);

const RemoveFromWishlistBtn = (props) => {
	const { wishlistDispatch } = useWishlist();
	return (
		<button
			onClick={(e) =>
				removeFromWishlistHandler(
					e,
					props.productId,
					props.token,
					wishlistDispatch
				)
			}
			className="p-4 my-5 mb-10 outline-btn b-radius-2 text-bold horizontal-card-btn-secondary flex-row justify-content-center align-center flex-gap-1 flex-grow-1 text-bold cursor-pointer"
		>
			<span className="wishlist-icon">
				<i className="fa-solid fa-heart"></i>
			</span>
			<p className="wishlist-text">Added to wishlist</p>
		</button>
	);
};

const MoveToWishlistBtn = ({ productId, token }) => {
	const { wishlistDispatch } = useWishlist();
	const { cartDispatch } = useCart();
	return (
		<button
			onClick={(e) =>
				MoveToWishlistHandler(
					e,
					productId,
					token,
					wishlistDispatch,
					cartDispatch
				)
			}
			className="p-4 my-5 mb-10 outline-btn b-radius-2 text-bold horizontal-card-btn-secondary flex-row justify-content-center align-center flex-gap-1 flex-grow-1 text-bold cursor-pointer"
		>
			<span className="wishlist-icon">
				<i className="far fa-heart"></i>
			</span>
			<p className="wishlist-text">Move to wishlist</p>
		</button>
	);
};

const AddedToWishlist = () => {
	return (
		<button
			className="p-4 my-5 mb-10 outline-btn b-radius-2 text-bold horizontal-card-btn-secondary flex-row justify-content-center align-center flex-gap-1 flex-grow-1 text-bold cursor-pointer"
			disabled
		>
			<span className="wishlist-icon">
				<i className="fa-solid fa-heart"></i>
			</span>
			<p className="wishlist-text">Added to wishlist</p>
		</button>
	);
};

export {
	AddToWishlistBtn,
	AddToWishlistBtnRedirect,
	RemoveFromWishlistBtn,
	MoveToWishlistBtn,
	AddedToWishlist,
	AddToCartBtn,
	AddToCartBtnRedirect,
	GoToCartBtn,
	RemoveFromCart,
};
