import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ProductsProvider, LoginProvider } from "./context";
import { BrowserRouter as Router } from "react-router-dom";
// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<LoginProvider>
				<ProductsProvider>
					<App />
				</ProductsProvider>
			</LoginProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
