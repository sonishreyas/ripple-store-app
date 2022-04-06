import { Link } from "react-router-dom";
import {
	addToWishlistHandler,
	removeFromWishlistHandler,
	MoveToWishlistHandler,
} from "../../../utils";
import { useWishlist, useCart } from "../../../context";

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
			className="outline-btn p-0 b-radius-2 text-bold card-wishlist m-5 flex-row justify-content-center align-center flex-gap-1"
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
		state={{ state: "/products" }}
		className="no-link-decoration outline-btn p-0 b-radius-2 text-bold card-wishlist m-5 flex-row justify-content-center align-center flex-gap-1"
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
			className="outline-btn p-0 b-radius-2 text-bold card-wishlist m-5 flex-row justify-content-center align-center flex-gap-1"
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
			className="p-5 my-5 mb-10 outline-btn b-radius-2 text-bold horizontal-card-btn-secondary flex-row justify-content-center align-center flex-gap-1 flex-grow-1 w-100 text-bold"
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
			className="outline-btn p-5 b-radius-2 my-0 text-bold icon-text-btn flex-row justify-content-center align-center flex-gap-1 flex-grow-1 cursor-pointer selected-outline-btn"
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
};
