import { useOrders } from "context";
import { Link } from "react-router-dom";
const Orders = () => {
	const { ordersState } = useOrders();
	return (
		<div className="profile-container">
			<div className="profile-header flex-row justify-content-space-between align-center flex-wrap p-5 my-0 mx-5">
				<h1 className="p-2 my-2 mx-0">Orders</h1>
			</div>
			<ul className="profile-list p-5">
				{ordersState.ordersData.length ? (
					ordersState.ordersData.map(
						({ _id, orderId, name, createdAt, qty, price, imgURL, brand }) => (
							<li className="no-list" key={_id}>
								<article className="card basic-card flex-row justify-content-center align-center flex-wrap card-shadow p-10 b-radius-2 w-100 h-auto">
									<h2 className="order-status">Order Confirmed</h2>
									<p className="secondary-font">{createdAt}</p>
									<table className="table my-5">
										<tbody>
											<tr className="table-row m-3">
												<th className="table-head p-3">OrderId:</th>
												<td className="table-data p-3">{orderId}</td>
											</tr>
											<tr className="table-row m-3">
												<th className="table-head p-3">Total:</th>
												<td className="table-data p-3">₹{price * qty}</td>
											</tr>
										</tbody>
									</table>
									<article className="card horizontal border-shadow p-5 b-radius-2">
										<div className="horizontal-card-img--container flex-row justify-content-center align-center flex-wrap b-radius-2">
											<img
												src={imgURL}
												alt={name}
												className="horizontal-card-img b-radius-2 mt-5"
											/>
										</div>
										<div className="horizontal-card-text--container flex-column flex-gap-1 p-5 b-radius-2 my-0 mx-5">
											<h1>{name}</h1>
											<p>{brand}</p>
											<hr />
											<p>Qty: {qty}</p>
										</div>
									</article>
								</article>
							</li>
						)
					)
				) : (
					<div className="flex-column justify-content-center align-center">
						<h4 className="text-bold">Explore our wide variety of products.</h4>
						<Link
							to="/products"
							className="no-link-decoration cursor-pointer primary-btn p-5 b-radius-2 text-bold m-5"
						>
							{" "}
							Explore Products{" "}
						</Link>
					</div>
				)}
			</ul>
		</div>
	);
};

export { Orders };
