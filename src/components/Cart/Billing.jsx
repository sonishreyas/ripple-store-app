const Billing = () => {
    return (
        <div class="cart-billing flex-column align-start">
            <div
                class="card basic-card card-shadow flex-row justify-content-center align-center flex-wrap card-shadow p-5 b-radius-2">
                <ul class="cart-list">
                    <li class="no-list">
                        <h3 class="billing-heading">Coupons</h3>
                        <button class="outline-btn coupon-btn p-5 b-radius-2 my-5 mx-0 text-bold">
                            <span class="coupon-icon"><i class="fas fa-tags"></i></span>
                            <p class="wishlist-text">Apply Coupons</p>
                        </button>
                    </li>
                    <li class="no-list">
                        <h3 class="billing-heading">Price Details</h3>
                        <table class="table">
                            <tr class="table-row">
                                <td class="table-head">Total MRP</td>
                                <td class="table-data">₹2999</td>
                            </tr>
                            <tr class="table-row">
                                <td class="table-head">Discount on MRP</td>
                                <td class="table-data discount-text">₹0.00</td>
                            </tr>
                            <tr class="table-row">
                                <td class="table-head">Convenience Fee</td>
                                <td class="table-data">₹100.00</td>
                            </tr>
                            <tr class="table-row">
                                <th class="table-head">Total Amount</th>
                                <th class="table-data">₹3099.00</th>
                            </tr>
                        </table>
                    </li>
                    <li class="no-list">
                        <a href="https://ripple-store.netlify.app/pages/checkout/checkout.html"
                            class="no-link-decoration">
                            <button
                                class="primary-btn place-order-btn p-5 b-radius-2 mb-5 mx-0 text-bold">Proceed
                                to
                                checkout</button>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export {Billing};