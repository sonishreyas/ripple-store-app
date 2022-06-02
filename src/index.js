import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {
	ProductsProvider,
	LoginProvider,
	RegisterProvider,
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
} from "./context";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastPortal } from "components";

// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<RegisterProvider>
				<LoginProvider>
					<AuthProvider>
						<CartProvider>
							<AddressFormProvider>
								<AddressProvider>
									<WishlistProvider>
										<ProductsProvider>
											<BillingProvider>
												<ThemeProvider>
													<ProfileProvider>
														<CheckoutProvider>
															<OrdersProvider>
																<App />
																<ToastPortal />
															</OrdersProvider>
														</CheckoutProvider>
													</ProfileProvider>
												</ThemeProvider>
											</BillingProvider>
										</ProductsProvider>
									</WishlistProvider>
								</AddressProvider>
							</AddressFormProvider>
						</CartProvider>
					</AuthProvider>
				</LoginProvider>
			</RegisterProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
