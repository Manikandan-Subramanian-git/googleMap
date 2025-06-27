import { createContext } from "react";

export type IThemeProvider = 'light' | 'dark'

export const ThemeContext = createContext<IThemeProvider>('light')