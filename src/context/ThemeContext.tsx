import { useState, useEffect, createContext, useContext } from "react";
import { createTheme } from "../events";

interface ThemeContextProps {
    [key: string]: any
}

const ThemeContext = createContext({} as ThemeContextProps);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: any) => {
    const [loading, setLoading] = useState(true);
    const [theme, setTheme] = useState(false)

    useEffect(() => {
        const mode = localStorage.getItem('theme') || null;
        console.log("current color mode", mode)
        if (!mode) {
            createTheme();
            setTheme(false)
        }
        else {
            setTheme(mode === "dark" ? true : false)
            createTheme(mode);
        }
        setLoading(false);
    }, [])

    const toggleTheme = () => {
        const themeUpdate = !theme;
        localStorage.setItem("theme", themeUpdate ? "dark" : "light")
        setTheme(themeUpdate);

    }

    const values = { theme, toggleTheme }

    return (
        <ThemeContext.Provider value={values}>
            {!loading && children}
        </ThemeContext.Provider>
    )
}