import { useNavigate } from "react-router-dom";
import { useProfile } from "../../context";

const PlaceOrderContent = () => {
	const navigate = useNavigate();
	const { setProfileActiveTab } = useProfile();
	const handleExplore = () => navigate("/products");
	const handleViewOrder = () => {
		setProfileActiveTab("Orders");
		navigate("/profile");
	};
	return (
		<main className="main flex-column justify-content-center align-center">
			<h1 className="homepage-heading text-center m-5 p-5">
				Your order has been placed.
			</h1>
			<h1 className="homepage-heading text-center m-5 p-5">
				Thank you for shopping with us
			</h1>
			<button
				onClick={handleExplore}
				className="cursor-pointer primary-btn p-0 b-radius-2 text-bold flex-row justify-content-center align-center flex-gap-1"
			>
				<p className="cart-text">Explore More</p>
			</button>
			<button
				onClick={handleViewOrder}
				className="cursor-pointer outline-btn p-0 b-radius-2 text-bold flex-row justify-content-center align-center flex-gap-1"
			>
				<p className="cart-text">View Orders</p>
			</button>
		</main>
	);
};
export { PlaceOrderContent };
