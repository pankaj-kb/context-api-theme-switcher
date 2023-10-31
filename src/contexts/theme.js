import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    lightTheme: () => {
        // themeMode: "light"
    },
    darkTheme: () => {
        // themeMode: "dark"
    },
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme() {
    return useContext(ThemeContext);
}