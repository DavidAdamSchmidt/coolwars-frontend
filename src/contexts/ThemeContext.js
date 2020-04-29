import React, { createContext, useContext, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const ThemeContext = createContext(null);

export const useThemeContext = () => useContext(ThemeContext);

const lightTheme = {
  background: "white",
  color: "#1d1e22",
  footerBackground: "#202020",
  editor: "tomorrow"
};

const darkTheme = {
  background: "#1d1e22",
  color: "white",
  footerBackground: "black",
  editor: "tomorrow"
};

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  return (
    <ThemeContext.Provider value={{ toggleDarkMode, isDarkMode }}>
      <StyledThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
