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
} from "./context";
import { BrowserRouter as Router } from "react-router-dom";

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
														<App />
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
