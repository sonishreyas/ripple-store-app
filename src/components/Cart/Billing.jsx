import { useAddress, useBilling } from "context";
import { Link } from "react-router-dom";
const Billing = () => {
	const { billingState } = useBilling();
	const { addressState } = useAddress();
	return (
		<div className="cart-billing flex-column align-start">
			<div className="card basic-card card-shadow flex-row justify-content-center align-center flex-wrap card-shadow p-5 b-radius-2">
				<ul className="cart-list">
					<li className="no-list">
						<h3 className="billing-heading">Price Details</h3>
						<table className="table">
							<tbody>
								<tr className="table-row">
									<td className="table-head">Total MRP</td>
									<td className="table-data">{billingState.totalMRP}</td>
								</tr>
								<tr className="table-row">
									<td className="table-head">Discount on MRP</td>
									<td className="table-data discount-text">
										-{billingState.discount}
									</td>
								</tr>
								<tr className="table-row">
									<td className="table-head">Convenience Fee</td>
									<td className="table-data">
										<strike>₹100</strike> 0.00
									</td>
								</tr>
								<tr className="table-row">
									<th className="table-head">Total Amount</th>
									<th className="table-data">{billingState.totalAmount}</th>
								</tr>
							</tbody>
						</table>
					</li>
					<li className="no-list">
						{Object.keys(addressState?.selectedAddress).length ? (
							<Link to="/checkout" className="no-link-decoration">
								<button className="primary-btn place-order-btn p-5 b-radius-2 mb-5 mx-0 text-bold cursor-pointer">
									Proceed to checkout
								</button>
							</Link>
						) : (
							<button
								className="primary-btn disabled-btn place-order-btn p-5 b-radius-2 mb-5 mx-0 text-bold cursor-pointer"
								disabled
							>
								Proceed to checkout
							</button>
						)}
					</li>
				</ul>
			</div>
		</div>
	);
};

export { Billing };
