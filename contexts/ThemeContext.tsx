import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { lightTheme, darkTheme, Theme } from "../constants/Theme";

interface ThemeContextType {
  theme: Theme;
  isDarkMode: boolean;
  toggleTheme: () => void;
  setDarkMode: (isDark: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    loadThemePreference();
  }, []);

  const loadThemePreference = async () => {
    try {
      const savedTheme = await AsyncStorage.getItem("theme");
      if (savedTheme) {
        setIsDarkMode(savedTheme === "dark");
      }
    } catch (error) {
      console.log("Error loading theme preference:", error);
    }
  };

  const saveThemePreference = async (isDark: boolean) => {
    try {
      await AsyncStorage.setItem("theme", isDark ? "dark" : "light");
    } catch (error) {
      console.log("Error saving theme preference:", error);
    }
  };

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    saveThemePreference(newMode);
  };

  const setDarkMode = (isDark: boolean) => {
    setIsDarkMode(isDark);
    saveThemePreference(isDark);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider
      value={{ theme, isDarkMode, toggleTheme, setDarkMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
