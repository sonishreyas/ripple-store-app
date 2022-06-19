import React from "react";
import ReactDOM from "react-dom";
import "./styles/app.css";
import App from "./App";
import { makeServer } from "./server";
import {
	ProductsProvider,
	CartProvider,
	WishlistProvider,
	BillingProvider,
	AddressProvider,
	AddressFormProvider,
	AuthProvider,
	ThemeProvider,
	ProfileProvider,
	CheckoutProvider,
	OrdersProvider,
	NavProvider,
} from "./context";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastPortal } from "components";

// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<AuthProvider>
				<CartProvider>
					<AddressFormProvider>
						<AddressProvider>
							<WishlistProvider>
								<ProductsProvider>
									<CheckoutProvider>
										<BillingProvider>
											<ThemeProvider>
												<ProfileProvider>
													<OrdersProvider>
														<NavProvider>
															<App />
															<ToastPortal />
														</NavProvider>
													</OrdersProvider>
												</ProfileProvider>
											</ThemeProvider>
										</BillingProvider>
									</CheckoutProvider>
								</ProductsProvider>
							</WishlistProvider>
						</AddressProvider>
					</AddressFormProvider>
				</CartProvider>
			</AuthProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
