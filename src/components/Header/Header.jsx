import {
	useCart,
	useWishlist,
	useAuth,
	useTheme,
	useProducts,
	useNav,
} from "context";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDebounce } from "custom-hooks";
const Header = () => {
	const { cartState } = useCart();
	const { wishlistState } = useWishlist();
	const { authState } = useAuth();
	const { themeIcon, handleSetTheme } = useTheme();
	const { setShowNavbar } = useNav();
	const getActiveClass = ({ isActive }) =>
		isActive ? "no-link header-link-active" : "no-link";
	const handleShowNavbar = () => setShowNavbar(true);
	const [searchQuery, setSearchQuery] = useState("");
	const handleSearch = (e) => setSearchQuery(e.target.value);
	const debounceSearch = useDebounce(searchQuery, 500);
	const [searchResult, setSearchResult] = useState([]);
	const { allProductsData } = useProducts();
	const navigate = useNavigate();
	useEffect(() => {
		debounceSearch.length
			? setSearchResult(
					allProductsData.filter((product) =>
						product?.name.toLowerCase().includes(debounceSearch.toLowerCase())
					)
			  )
			: setSearchResult([]);
	}, [debounceSearch]);

	useEffect(() => {
		setSearchQuery("");
		setSearchResult([]);
		setShowNavbar(false);
	}, []);

	const handleNavigate = (id) => {
		setSearchQuery("");
		setSearchResult([]);
		navigate(`/product/${id}`);
	};

	return (
		<header className="header header-shadow flex-column">
			<div className="flex-row justify-content-space-between align-center w-100">
				<div className="brand-info flex-row justify-content-center align-center flex-gap-1 m-5">
					<section>
						<i
							className="fas fa-bars header-nav-icon"
							onClick={handleShowNavbar}
						></i>
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
								<section className="input-container flex-column b-radius-1 m-5">
									<input
										id="search"
										className="textbox-content p-5"
										type="text"
										name="search"
										placeholder="Search products..."
										aria-label="Search products here"
										onChange={handleSearch}
										value={searchQuery}
									/>
									<i className="fas fa-search search-icon"></i>
								</section>
							</form>
							{searchResult?.length ? (
								<div className="search-result-container w-100 cursor-pointer">
									<ul className="no-list">
										{searchResult.map(({ _id, name }) => (
											<li className="no-list p-5 search-list" key={_id}>
												<div
													className="no-link"
													onClick={() => handleNavigate(_id)}
												>
													<div className="flex-row justify-content-start align-center">
														<div className="card-content p-5 pb-0">
															<p className="h5 text-bold">{name}</p>
														</div>
													</div>
												</div>
											</li>
										))}
									</ul>
								</div>
							) : (
								<></>
							)}
						</li>
						<li className="header-nav-icons h-auto pt-10 header-navigation">
							{
								<Link
									to={"/profile"}
									className="no-link badge p-5 m-5 flex-column justify-content-center align-center"
								>
									<span className="badge-icon">
										<i className="fas fa-user social"></i>
									</span>
									<p className="p-2 m-2 badge-title">
										{authState?.token?.length
											? `Hi,
										${
											authState.firstName.charAt(0).toUpperCase() +
											authState.firstName.slice(1).toLowerCase()
										}`
											: "Login"}
									</p>
								</Link>
							}
						</li>
						<li className="header-nav-icons h-auto pt-10 header-navigation">
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
								<p className="p-2 m-2 badge-title">Wishlist</p>
							</Link>
						</li>
						<li className="header-nav-icons h-auto pt-10 header-navigation">
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
								<p className="p-2 m-2 badge-title">Cart</p>
							</Link>
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
