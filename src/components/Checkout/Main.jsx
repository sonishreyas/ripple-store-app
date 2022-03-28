import { CheckoutProducts, Billing } from "./"
import { useCheckout } from "../../context";

const Main = () => {
    const {checkoutState} = useCheckout();
    return (
        <main className="main flex-column justify-content-center align-center">
            <h1 className="homepage-heading text-center m-5 p-5">Checkout</h1>
            {checkoutState.itemsInCheckout.length !== 0 ?
            <section className="rui-main--heading-container no-border">
                <article className="cart-container grid-2-column">
                    <div className="cart-content flex-column justify-content-center flex-wrap">
                        <ul className="cart-list">
                            <CheckoutProducts />
                        </ul>
                    </div>
                    <Billing/>
                </article>
            </section>: <h4 className="h4 text-center m-5 p-5">Please select items to checkout</h4>}               
        </main>
    )
};

export {Main};