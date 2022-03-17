import {
	Home,
	Cart,
	Wishlist,
	Products,
	ProductDetails,
	Profile,
	Authentication,
} from "./pages";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js"
export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/cart" element={<Cart />} />
			<Route path="/products" element={<Products />} />
			<Route path="/profile" element={<Profile />} />
			<Route path="/wishlist" element={<Wishlist />} />
			<Route path="/auth" element={<Authentication />} />
			<Route path="/mock" element={<Mockman />} />
		</Routes>
	);
}