import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const Container = styled.footer`
  position: fixed;
  bottom: 0;
  z-index: 10;
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 50px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  background: ${({ theme }) => theme.footerBackground};
`;

const BackToHome = styled(Link)`
  color: silver;
  text-decoration: none;

  &:hover {
    color: white;
  }
`;

const Footer = () => {
  return (
    <Container>
      {useLocation().pathname !== "/" && (
        <BackToHome to="/">Back to Home</BackToHome>
      )}
      <DarkModeToggle />
    </Container>
  );
};

export default Footer;
