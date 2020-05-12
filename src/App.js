import React from "react";
import DojoProvider from "./contexts/DojoContext";
import ThemeProvider from "./contexts/ThemeContext";
import Layout from "./Layout";
import Router from "./Router";

const App = () => {
  return (
    <ThemeProvider>
      <DojoProvider>
        <Layout>
          <Router />
        </Layout>
      </DojoProvider>
    </ThemeProvider>
  );
};

export default App;
