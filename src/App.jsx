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
				<Route
					path="/cart"
					element={
						<RequireAuth>
							<Cart />
						</RequireAuth>
					}
				/>
				<Route path="/products" element={<Products />} />
				<Route
					path="/profile"
					element={
						<RequireAuth>
							<Profile />
						</RequireAuth>
					}
				/>
				<Route
					path="/wishlist"
					element={
						<RequireAuth>
							<Wishlist />
						</RequireAuth>
					}
				/>
				<Route path="/auth" element={<Authentication />} />
				<Route
					path="/checkout"
					element={
						<RequireAuth>
							<Checkout />
						</RequireAuth>
					}
				/>
				<Route
					path="/order"
					element={
						<RequireAuth>
							<PlaceOrder />
						</RequireAuth>
					}
				/>
				<Route path="/mock" element={<Mockman />} />
			</Routes>
			<Outlet />
			<Footer />
		</div>
	);
}
