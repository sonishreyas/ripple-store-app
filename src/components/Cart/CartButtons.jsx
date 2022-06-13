import { useCart } from "context";
import { removeFromCartHandler, updateCartHandler } from "utils";

const UpdateCartItem = (props) => {
	const { cartDispatch } = useCart();

	const actionTypeIncrement = {
		action: { type: "increment" },
	};

	const actionTypeDecrement = {
		action: { type: "decrement" },
	};
	return (
		<>
			{props.btnType === "delete" && (
				<i
					className="fa-solid fa-trash cursor-pointer"
					onClick={(element) =>
						removeFromCartHandler(
							element,
							props.productId,
							props.token,
							cartDispatch
						)
					}
				></i>
			)}
			{props.btnType === "decrement" && (
				<i
					className="far fa-minus-square cursor-pointer"
					onClick={(element) =>
						updateCartHandler(
							element,
							props.productId,
							props.token,
							cartDispatch,
							actionTypeDecrement
						)
					}
				></i>
			)}
			{props.btnType === "increment" && (
				<i
					className="far fa-plus-square cursor-pointer"
					onClick={(element) =>
						updateCartHandler(
							element,
							props.productId,
							props.token,
							cartDispatch,
							actionTypeIncrement
						)
					}
				></i>
			)}
		</>
	);
};

export { UpdateCartItem };
