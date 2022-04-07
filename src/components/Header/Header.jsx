import {
	useCart,
	useWishlist,
	useAuth,
	useAddress,
	useBilling,
	useLogin,
	useRegister,
	useTheme,
} from "../../context";
import { Link, NavLink } from "react-router-dom";
const Header = (props) => {
	const { cartState, cartDispatch } = useCart();
	const { wishlistState, wishlistDispatch } = useWishlist();
	const { authState, authDispatch } = useAuth();
	const { addressDispatch } = useAddress();
	const { billingDispatch } = useBilling();
	const { loginDispatch } = useLogin();
	const { registerDispatch } = useRegister();
	const { themeIcon, handleSetTheme } = useTheme();

	const getActiveClass = ({ isActive }) =>
		isActive ? "no-link header-link-active" : "no-link";
	const handleLogout = () => {
		localStorage.clear();
		authDispatch({ type: "LOGOUT" });
		cartDispatch({ type: "RESET" });
		wishlistDispatch({ type: "RESET" });
		addressDispatch({ type: "RESET" });
		billingDispatch({ type: "RESET" });
		loginDispatch({ type: "RESET" });
		registerDispatch({ type: "RESET" });
	};

	return (
		<header className="header header-shadow flex-column">
			<div className="flex-row justify-content-space-between align-center w-100">
				<div className="brand-info flex-row justify-content-center align-center flex-gap-1 m-5">
					<section>
						<i className="fas fa-bars header-nav-icon"></i>
					</section>
					<Link to={"/"} className="no-link header-brand">
						<img
							src="https://raw.githubusercontent.com/sonishreyas/rippleUI/dev/components/media/images/ripple-logo.png"
							alt="Logo of ripple UI"
							className="brand-logo"
						/>
						<sub className="brand-name">Ripple Store</sub>
					</Link>
					<ul className="no-list spaced-list header-nav flex-row align-center flex-gap-1">
						<li>
							<NavLink to={"/"} className={getActiveClass}>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to={"/products"} className={getActiveClass}>
								Products
							</NavLink>
						</li>
					</ul>
				</div>
				<div className="social-icon-container flex-row align-center flex-gap-2">
					<ul className="no-list spaced-list flex-row align-center flex-gap-2 mx-5">
						<li className="search-bar h-auto">
							<form className="input-form flex-column flex-gap-1 flex-grow-1 flex-wrap h-auto w-100">
								<section className="input-container input-with-icon flex-column b-radius-2 m-5">
									<input
										id="search"
										className="textbox-content p-5"
										type="text"
										name="search"
										placeholder="Search..."
										aria-label="Search Products here"
									/>
									<i className="fas fa-search search-icon"></i>
								</section>
							</form>
						</li>
						<li className="header-nav-icons h-auto pt-10">
							{authState.token !== null ? (
								<Link
									to={"/profile"}
									className="no-link badge p-5 m-5 flex-column justify-content-center align-center"
								>
									<span className="badge-icon">
										<i className="fas fa-user social"></i>
									</span>
									<p className="p-2 m-2">
										Hi,{" "}
										{authState.firstName.charAt(0).toUpperCase() +
											authState.firstName.slice(1).toLowerCase()}
									</p>
								</Link>
							) : (
								<Link
									to={"/auth"}
									state={{ state: "/profile" }}
									className="no-link badge p-5 m-5 flex-column justify-content-center align-center"
								>
									<span className="badge-icon">
										<i className="fas fa-user social"></i>
									</span>
									<p className="badge-text flex-row justify-content-center align-center top right b-radius-circle"></p>
									<p className="p-2 m-2">Login</p>
								</Link>
							)}
						</li>
						<li className="header-nav-icons h-auto pt-10">
							{authState.token !== null ? (
								<Link
									to={"/wishlist"}
									className="no-link badge p-5 m-5 flex-column justify-content-center align-center"
								>
									<span className="badge-icon">
										<i className="fas fa-heart social"></i>
									</span>
									<p
										className={`badge-text wishlist-badge-text flex-row justify-content-center align-center top right b-radius-circle ${
											wishlistState.wishlistItemsCount > 0 ? "" : "inactive"
										}`}
									>
										{wishlistState.wishlistItemsCount}
									</p>
									<p className="p-2 m-2">Wishlist</p>
								</Link>
							) : (
								<Link
									to={"/auth"}
									state={{ state: "/wishlist" }}
									className="no-link badge p-5 m-5 flex-column justify-content-center align-center"
								>
									<span className="badge-icon">
										<i className="fas fa-heart social"></i>
									</span>
									<p
										className={`badge-text wishlist-badge-text flex-row justify-content-center align-center top right b-radius-circle ${
											wishlistState.wishlistItemsCount > 0 ? "" : "inactive"
										}`}
									>
										{wishlistState.wishlistItemsCount}
									</p>
									<p className="p-2 m-2">Wishlist</p>
								</Link>
							)}
						</li>
						<li className="header-nav-icons h-auto pt-10">
							{authState.token !== null ? (
								<Link
									to={"/cart"}
									className="no-link badge p-5 m-5 flex-column justify-content-center align-center"
								>
									<span className="badge-icon">
										<i className="fas fa-shopping-cart social"></i>
									</span>
									<p
										className={`badge-text cart-badge-text flex-row justify-content-center align-center top right b-radius-circle ${
											cartState.cartItemsCount > 0 ? "" : "inactive"
										}`}
									>
										{cartState.cartItemsCount}
									</p>
									<p className="p-2 m-2">Cart</p>
								</Link>
							) : (
								<Link
									to={"/auth"}
									state={{ state: "/cart" }}
									className="no-link badge p-5 m-5 flex-column justify-content-center align-center"
								>
									<span className="badge-icon">
										<i className="fas fa-shopping-cart social"></i>
									</span>
									<p
										className={`badge-text cart-badge-text flex-row justify-content-center align-center top right b-radius-circle ${
											cartState.cartItemsCount > 0 ? "" : "inactive"
										}`}
									>
										{cartState.cartItemsCount}
									</p>
									<p className="p-2 m-2">Cart</p>
								</Link>
							)}
						</li>
						<li className="header-nav-icons h-auto pr-5">
							<span className="badge-icon">
								<i
									className={`fas fa-${themeIcon} theme-icon badge-icon`}
									aria-label="dark/light theme icon"
									onClick={handleSetTheme}
								></i>
							</span>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};

export { Header };
