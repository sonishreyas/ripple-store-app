import { Outlet } from "react-router-dom";
import { Header, Footer, NavBar } from "./components";
import { AppRoutes } from "routes";
import { useNav } from "context";

export default function App() {
	const { showNavbar } = useNav();
	console.log(showNavbar);
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
