import { createContext, useContext } from "react";
import { useDefineRootColorScheme } from "custom-hooks";

const defaultThemeContextValues = {
	theme: "dark",
	themeIcon: "sun",
};

const ThemeContext = createContext({ defaultThemeContextValues });

const ThemeProvider = ({ children }) => {
	const { theme, themeIcon, handleSetTheme } = useDefineRootColorScheme();

	return (
		<ThemeContext.Provider value={{ theme, themeIcon, handleSetTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
