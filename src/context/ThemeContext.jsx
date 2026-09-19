import { useEffect, useState } from "react";
import { ThemeContext } from "./theme-context";

export function ThemeProvider({ children }) {
	const [theme, setTheme] = useState(() => {
		return localStorage.getItem("theme") || "light";
	});

	useEffect(() => {
		document.documentElement.dataset.theme = theme;
		localStorage.setItem("theme", theme);
	}, [theme]);

	function toggleTheme() {
		setTheme((currentTheme) =>
			currentTheme === "light" ? "dark" : "light"
		);
	}

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}
