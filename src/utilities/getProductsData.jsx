import { useState, useEffect } from "react";

const useProductsHook = async () => {
	const [productsData, setProductsData] = useState([]);
	useEffect(() => {
		fetch("/api/products")
		.then(response => {
			setProductsData(JSON.parse(response._bodyInit));
		});
	},[])
	
	return { productsData };
};

export {useProductsHook}; 