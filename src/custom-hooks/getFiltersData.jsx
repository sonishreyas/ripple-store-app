import { useState, useEffect } from "react";
const useFiltersDataHook = () => {
	const [filtersData, setFiltersData] = useState([]);
	useEffect(() => {
		fetch("/api/filters", {
			method: "GET",
		})
			.then((res) => res.json())
			.then((json) => {
				setFiltersData(json.filters[0]);
			});
	}, []);
	return filtersData;
};

export {useFiltersDataHook}; 