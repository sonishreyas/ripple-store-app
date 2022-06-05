import { Outlet, useLocation } from "react-router-dom";
import { Header, Footer, NavBar } from "./components";
import { AppRoutes } from "routes";
import { useNav } from "context";
import { useEffect } from "react";

export default function App() {
	const { showNavbar, setShowNavbar } = useNav();
	const location = useLocation();
	useEffect(() => {
		setShowNavbar(false);
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
