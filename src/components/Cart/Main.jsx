import { CartProducts, Billing, AddressModal, Address,  Coupon   } from "./"
import { useCart } from "../../context";

const Main = () => {
    const {cartState} = useCart();
    return (
        <main className="main flex-column justify-content-center align-center">
            <h1 class="homepage-heading text-center m-5 p-5">My Cart</h1>
            {cartState.cartData.length !== 0 ?
            <section class="rui-main--heading-container no-border">
                <article class="cart-container grid-2-column">
                    <div class="cart-content flex-column justify-content-center flex-wrap">
                        <ul class="cart-list">
                            <Address/>
                            <CartProducts />
                        </ul>
                    </div>
                    <Billing/>
                </article>
            </section>: <h4 class="h4 text-center m-5 p-5">No items in Cart</h4>}
                {/* <Coupon/> */}
                <AddressModal/>
        </main>
    )
};

export {Main};