import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const Container = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  background: #202020;
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
    </Container>
  );
};

export default Footer;
