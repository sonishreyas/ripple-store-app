import { useBilling } from "context";
import { useState } from "react";
import { usePaymentIntegration } from "custom-hooks";

const Billing = ({ products }) => {
	const { billingState } = useBilling();
	const { displayRazorpay } = usePaymentIntegration();
	const [disable, setDisable] = useState(false);

	const handlePlaceOrder = (e) => {
		setDisable(true);
		displayRazorpay(e);
		setDisable(false);
	};
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
										{billingState.discount > 0 ? "-" : ""}
										{billingState.discount}
									</td>
								</tr>
								<tr className="table-row">
									<td className="table-head">Convenience Fee</td>
									<td className="table-data">
										{billingState.totalAmount > 0 && <strike>₹100</strike>} 0.00
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
						<button
							className="cursor-pointer primary-btn place-order-btn p-5 b-radius-2 mb-5 mx-0 text-bold"
							onClick={handlePlaceOrder}
							disabled={disable}
						>
							Place Order
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export { Billing };
