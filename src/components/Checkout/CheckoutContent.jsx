import { CheckoutProducts, Billing } from ".";
import { useCart, useCheckout, useProducts } from "context";
import { getCartsDataFromId } from "utils";
const CheckoutContent = () => {
	const { checkoutState } = useCheckout();
	const { allProductsData } = useProducts();
	const { cartState } = useCart();
	const cartData = getCartsDataFromId(cartState.itemsInCart, allProductsData);
	const products = checkoutState.itemsInCheckout.reduce(
		(prev, curr) => [...prev, cartData.find((item) => item._id === curr)],
		[]
	);
	const itemCount = products.length;
	return (
		<main className="main flex-column justify-content-center align-center">
			<h1 className="homepage-heading text-center m-5 p-5">Checkout</h1>
			{checkoutState.itemsInCheckout.length ? (
				<section className="rui-main--heading-container no-border">
					<article className="cart-container grid-2-column">
						<div className="cart-content flex-column justify-content-start flex-wrap">
							<h2 className="text-bold text-center">Order Summary</h2>
							<ul className="cart-list">
								<CheckoutProducts products={products} itemCount={itemCount} />
							</ul>
						</div>
						<Billing products={products} />
					</article>
				</section>
			) : (
				<h4 className="h4 text-center m-5 p-5">
					Please select items to checkout
				</h4>
			)}
		</main>
	);
};

export { CheckoutContent };
