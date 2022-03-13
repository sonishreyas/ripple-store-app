import { createContext, useContext } from "react";
import { useFiltersHook } from "../utilities";

const FiltersContext = createContext();

const FiltersProvider = ({ children }) => {
	const { filtersData } = useFiltersHook();
	return (
		<FiltersContext.Provider value={{ filtersData }}>
			{children}
		</FiltersContext.Provider>
	);
};
const useFilters = () => useContext(FiltersContext);

export { useFilters, FiltersProvider };
