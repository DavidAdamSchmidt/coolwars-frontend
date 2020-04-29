import React from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import "./toggle-custom.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useThemeContext } from "../../contexts/ThemeContext";

const Center = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DarkModeToggle = () => {
  const { toggleDarkMode } = useThemeContext();

  return (
    <Toggle
      icons={{
        checked: (
          <Center>
            <FontAwesomeIcon icon={faSun} color={"#1d1e22"} />
          </Center>
        ),
        unchecked: (
          <Center>
            <FontAwesomeIcon icon={faMoon} color={"silver"} />
          </Center>
        )
      }}
      onChange={toggleDarkMode}
    />
  );
};

export default DarkModeToggle;
