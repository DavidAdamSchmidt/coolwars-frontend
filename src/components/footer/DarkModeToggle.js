import React from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import "./toggle-custom.css";
import { useThemeContext } from "../../contexts/ThemeContext";

const DarkModeToggle = () => {
  const { toggleDarkMode } = useThemeContext();

  return <Toggle icons={false} onChange={toggleDarkMode} />;
};

export default DarkModeToggle;
