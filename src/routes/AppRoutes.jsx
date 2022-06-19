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
	PageNotFound,
} from "pages";
import { Routes, Route } from "react-router-dom";
import { RequireAuth } from "routes";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/products" element={<Products />} />
			<Route path="/product/:productId" element={<ProductDetails />} />
			<Route path="/auth" element={<Authentication />} />
			<Route element={<RequireAuth />}>
				<Route path="/cart" element={<Cart />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/wishlist" element={<Wishlist />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/order" element={<PlaceOrder />} />
				<Route path="/profile" element={<Profile />} />
			</Route>
			<Route path="*" element={<PageNotFound />} />
		</Routes>
	);
};

export { AppRoutes };
