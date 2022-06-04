import { createContext, useContext, useState } from "react";

const NavContext = createContext();

const NavProvider = ({ children }) => {
	const [showNavbar, setShowNavbar] = useState(false);

	return (
		<NavContext.Provider
			value={{
				showNavbar,
				setShowNavbar,
			}}
		>
			{children}
		</NavContext.Provider>
	);
};

const useNav = () => useContext(NavContext);
export { useNav, NavProvider };
