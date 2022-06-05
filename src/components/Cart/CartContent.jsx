import {
	CartProducts,
	Billing,
	AddressModal,
	Address,
	Coupon,
	AddressFormModal,
} from ".";
import { useAddress, useCart } from "context";
import { useEffect } from "react";
const CartContent = () => {
	const { cartState } = useCart();
	const {
		showAddressModal,
		setShowAddressModal,
		showAddressFormModal,
		setShowAddressFormModal,
	} = useAddress();
	useEffect(() => {
		setShowAddressModal(false);
		setShowAddressFormModal(false);
	}, []);
	return (
		<>
			<main className="main flex-column justify-content-center align-center">
				<h1 className="homepage-heading text-center m-5 p-5">My Cart</h1>
				{cartState.itemsInCart.length ? (
					<section className="rui-main--heading-container no-border">
						<article className="cart-container grid-2-column">
							<div className="cart-content flex-column justify-content-center flex-wrap">
								<ul className="cart-list">
									<Address />
									<CartProducts />
								</ul>
							</div>
							<Billing />
						</article>
					</section>
				) : (
					<h4 className="h4 text-center m-5 p-5">No items in Cart</h4>
				)}
			</main>
			{showAddressModal && <AddressModal />}
			{showAddressFormModal && <AddressFormModal />}
		</>
	);
};

export { CartContent };
