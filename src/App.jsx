import {
	Home,
	Cart,
	Wishlist,
	Products,
	ProductDetails,
	Profile,
	Authentication,
} from "./pages/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/products" element={<Products />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/wishlist" element={<Wishlist />} />
					<Route path="/auth" element={<Authentication />} />
				</Routes>
			</Router>
		</div>
	);
}