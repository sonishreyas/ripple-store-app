import {
	Home,
	Cart,
	Wishlist,
	Products,
	ProductDetails,
	Profile,
	Authentication,
	Checkout,
	PlaceOrder,
} from "./pages";
import { Routes, Route, Outlet } from "react-router-dom";
import Mockman from "mockman-js";
import { Header, Footer } from "./components";
import { RequireAuth } from "./utils";
export default function App() {
	return (
		<div className="grid-3-rows w-100">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/auth" element={<Authentication />} />
				<Route element={<RequireAuth />}>
					<Route path="/cart" element={<Cart />} />
					<Route path="/products" element={<Products />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/wishlist" element={<Wishlist />} />
					<Route path="/checkout" element={<Checkout />} />
					<Route path="/order" element={<PlaceOrder />} />
				</Route>
				<Route path="/mock" element={<Mockman />} />
			</Routes>
			<Outlet />
			<Footer />
		</div>
	);
}
