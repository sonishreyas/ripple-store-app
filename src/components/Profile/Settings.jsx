import { useNavigate } from "react-router-dom";
import {
	useAuth,
	useCart,
	useBilling,
	useWishlist,
	useAddress,
	useLogin,
	useRegister,
} from "../../context";

const Settings = () => {
	const { authDispatch, authState } = useAuth();
	const { cartDispatch } = useCart();
	const { wishlistDispatch } = useWishlist();
	const { addressDispatch } = useAddress();
	const { billingDispatch } = useBilling();
	const { loginDispatch } = useLogin();
	const { registerDispatch } = useRegister();
	const navigate = useNavigate();
	const handleLogout = () => {
		localStorage.clear();
		authDispatch({ type: "LOGOUT" });
		cartDispatch({ type: "RESET" });
		wishlistDispatch({ type: "RESET" });
		addressDispatch({ type: "RESET" });
		billingDispatch({ type: "RESET" });
		loginDispatch({ type: "RESET" });
		registerDispatch({ type: "RESET" });
		navigate("/");
	};
	return (
		<div className="profile-container">
			<div className="profile-header flex-row justify-content-space-between align-center flex-wrap p-5 my-0 mx-5">
				<h1 className="p-2 my-2 mx-0">Settings</h1>
			</div>
			<ul className="profile-list p-5">
				<li className="no-list">
					<button
						className="primary-btn log-out-btn  p-5 b-radius-2 mx-5 my-0 text-bold"
						onClick={handleLogout}
						type="button"
					>
						Log Out
					</button>
				</li>
			</ul>
		</div>
	);
};

export { Settings };
