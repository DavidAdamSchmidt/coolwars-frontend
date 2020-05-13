import React from "react";
import Footer from "./components/footer/Footer";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
    margin: 0;
    font-family: boxed, "helvetica neue", Helvetica, Roboto, Arial, sans-serif;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
