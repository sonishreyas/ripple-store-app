import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ProductsProvider } from "./context";
import { FiltersProvider } from "./context/filter-context";
// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<ProductsProvider>
			<FiltersProvider>
				<App />
			</FiltersProvider>
		</ProductsProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
