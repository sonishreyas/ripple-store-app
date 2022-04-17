import { Link } from "react-router-dom";
import { addToCartHandler, removeFromCartHandler } from "../../../utils";
import { useCart } from "../../../context";

const AddToCartBtn = (props) => {
	const { cartDispatch } = useCart();
	return (
		<button
			onClick={(e) =>
				addToCartHandler(e, props.productData, props.token, cartDispatch)
			}
			className="cursor-pointer primary-btn p-0 b-radius-2 text-bold flex-row justify-content-center align-center flex-gap-1"
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
		className="no-link cursor-pointer primary-btn p-0 b-radius-2 text-bold flex-row justify-content-center align-center flex-gap-1"
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
			className="no-link cursor-pointer primary-btn p-0 b-radius-2 text-bold flex-row justify-content-center align-center flex-gap-1"
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
			className="primary-btn p-5 b-radius-2 my-0 text-bold icon-text-btn flex-row justify-content-center align-center flex-gap-1 flex-grow-1 cursor-pointer "
			onClick={handleRemoveFromCart}
		>
			<span>
				<i className="fa-solid fa-trash"></i>
			</span>
			<p className="btn-text">Remove from Cart</p>
		</button>
	);
};
export { AddToCartBtn, AddToCartBtnRedirect, GoToCartBtn, RemoveFromCart };
