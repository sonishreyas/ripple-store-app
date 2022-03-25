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
} from "./context";
import { BrowserRouter as Router } from "react-router-dom";

// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<RegisterProvider>
				<LoginProvider>
					<CartProvider>
						<AddressFormProvider>
							<AddressProvider>
								<BillingProvider>
									<WishlistProvider>
										<ProductsProvider>
											<App />
										</ProductsProvider>
									</WishlistProvider>
								</BillingProvider>
							</AddressProvider>
						</AddressFormProvider>
					</CartProvider>
				</LoginProvider>
			</RegisterProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
