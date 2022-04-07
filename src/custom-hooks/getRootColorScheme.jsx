import { useState, useEffect } from "react";
const useDefineRootColorScheme = () => {
	const [themeIcon, setThemeIcon] = useState("sun");
	const [theme, setTheme] = useState("dark");
	const handleSetTheme = () => {
		if (theme === "dark") {
			setTheme("light");
			setThemeIcon("moon");
		} else {
			setTheme("dark");
			setThemeIcon("sun");
		}
	};
	useEffect(() => {
		document.querySelector(":root").setAttribute("color-scheme", theme);
	}, [theme]);
	return { theme, themeIcon, handleSetTheme };
};

export { useDefineRootColorScheme };
