import { useState, useEffect } from "react";

const useProductsDataHook = () => {
	const [productsData, setProductsData] = useState([]);
	useEffect(() => {
		fetch("/api/products", {
			method: "GET",
		})
			.then((res) => res.json())
			.then((json) => {
				setProductsData(json.products);
			});
	}, []);
	return productsData;
};

export {useProductsDataHook}; 