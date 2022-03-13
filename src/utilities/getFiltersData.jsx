import { useState, useEffect } from "react";
import { axios } from "axios";
const useFiltersHook = async () => {
	const [filtersData, setFiltersData] = useState({});
	await fetch("/api/filters")
		.then(response => response._bodyInit )
		.then(data =>  {
			console.log("data = ",data);
			setFiltersData(data);
		});
		
	// useEffect(() => {
	// 	fetch("/api/filters")
	// 		.then(response => response._bodyInit )
	// 		.then(data =>  {
	// 			console.log("2.....",JSON.parse(data).filters[0]);
	// 		});
	// 	console.log("hookhere", filtersData)
	// },[])
	// const [filtersData, setFiltersData] = useState([]);
	// useEffect(() => {
	// 	(async () => {
	// 		try {
	// 			const res = await axios.get("/api/filters");
	// 			console.log(JSON.parse(res._bodyInit).filters[0]);
	// 			setFiltersData(JSON.parse(res._bodyInit).filters[0]);
	// 		} catch (error) {
	// 			console.log("FilterContext useEffect Error : ", error);
	// 		}
	// 	})();
	// }, []);
	return {filtersData};
};

export {useFiltersHook}; 