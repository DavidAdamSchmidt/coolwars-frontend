import React from "react";
import Layout from "./Layout";
import Router from "./Router";
import ThemeProvider from "./contexts/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <Layout>
        <Router />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
