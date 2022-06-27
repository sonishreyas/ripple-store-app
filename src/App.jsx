import { Outlet, useLocation } from "react-router-dom";
import { Header, Footer, NavBar } from "./components";
import { AppRoutes } from "routes";
import { useNav, useProducts } from "context";
import { useEffect } from "react";

export default function App() {
	const { showNavbar, setShowNavbar } = useNav();
	const location = useLocation();
	const { setShowFiltersContainer } = useProducts();
	useEffect(
		() =>
			window.innerWidth <= 768
				? setShowFiltersContainer(false)
				: setShowFiltersContainer(true),
		[]
	);

	useEffect(() => {
		window.addEventListener("resize", () => {
			if (window.innerWidth <= 768) {
				setShowNavbar(false);
				setShowFiltersContainer(false);
			} else {
				setShowNavbar(false);
				setShowFiltersContainer(true);
			}
		});
	}, [location]);
	return (
		<div className="grid-3-rows w-100">
			<Header />
			<AppRoutes />
			{showNavbar && <NavBar />}
			<Outlet />
			<Footer />
		</div>
	);
}
