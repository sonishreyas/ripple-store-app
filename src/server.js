import { Server, Model, RestSerializer } from "miragejs";
import {
	loginHandler,
	signupHandler,
} from "./backend/controllers/AuthController";
import {
	addItemToCartHandler,
	getCartItemsHandler,
	removeItemFromCartHandler,
	updateCartItemHandler,
} from "./backend/controllers/CartController";
import {
	getAllCategoriesHandler,
	getCategoryHandler,
} from "./backend/controllers/CategoryController";
import {
	getAllProductsHandler,
	getAllFiltersHandler,
	getProductHandler,
} from "./backend/controllers/ProductController";
import {
	addItemToWishlistHandler,
	getWishlistItemsHandler,
	removeItemFromWishlistHandler,
} from "./backend/controllers/WishlistController";
import {
	addItemToAddressHandler,
	getAddressItemsHandler,
	removeItemFromAddressHandler,
	updateAddressItemHandler,
} from "./backend/controllers/AddressController";
import {
	addItemToOrderHandler,
	getOrderItemsHandler,
} from "./backend/controllers/OrdersController";
import { createOrders } from "./backend/controllers/PaymentController";
import { categories, products, users, filters } from "./backend/db";
export function makeServer({ environment = "development" } = {}) {
	return new Server({
		serializers: {
			application: RestSerializer,
		},
		environment,
		models: {
			product: Model,
			category: Model,
			user: Model,
			cart: Model,
			wishlist: Model,
			filter: Model,
			orders: Model,
			payment: Model,
		},

		// Runs on the start of the server
		seeds(server) {
			// disballing console logs from Mirage
			server.logging = false;
			products.forEach((item) => {
				server.create("product", { ...item });
			});

			users.forEach((item) =>
				server.create("user", {
					...item,
					cart: [],
					wishlist: [],
					address: [],
					orders: [],
				})
			);

			categories.forEach((item) => server.create("category", { ...item }));
			filters.forEach((item) => server.create("filter", { ...item }));
		},

		routes() {
			this.namespace = "api";
			// auth routes (public)
			this.post("/auth/signup", signupHandler.bind(this));
			this.post("/auth/login", loginHandler.bind(this));

			// products routes (public)
			this.get("/products", getAllProductsHandler.bind(this));
			this.get("/filters", getAllFiltersHandler.bind(this));
			this.get("/products/:productId", getProductHandler.bind(this));

			// categories routes (public)
			this.get("/categories", getAllCategoriesHandler.bind(this));
			this.get("/categories/:categoryId", getCategoryHandler.bind(this));

			// cart routes (private)
			this.get("/user/cart", getCartItemsHandler.bind(this));
			this.post("/user/cart", addItemToCartHandler.bind(this));
			this.post("/user/cart/:productId", updateCartItemHandler.bind(this));
			this.delete(
				"/user/cart/:productId",
				removeItemFromCartHandler.bind(this)
			);

			// wishlist routes (private)
			this.get("/user/wishlist", getWishlistItemsHandler.bind(this));
			this.post("/user/wishlist", addItemToWishlistHandler.bind(this));
			this.delete(
				"/user/wishlist/:productId",
				removeItemFromWishlistHandler.bind(this)
			);

			// address routes (private)
			this.get("/user/address", getAddressItemsHandler.bind(this));
			this.post("/user/address", addItemToAddressHandler.bind(this));
			this.post(
				"/user/address/:addressId",
				updateAddressItemHandler.bind(this)
			);
			this.delete(
				"/user/address/:addressId",
				removeItemFromAddressHandler.bind(this)
			);

			this.get("/user/orders", getOrderItemsHandler.bind(this));
			this.post("/user/orders", addItemToOrderHandler.bind(this));

			this.post("/payment/orders", createOrders.bind(this));
		},
	});
}
