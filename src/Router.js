import React from "react";
import { Route, Switch } from "react-router-dom";
import DojoPage from "./components/pages/dojo/DojoPage";
import HomePage from "./components/pages/home/HomePage";

const Router = () => {
  return (
    <Switch>
      <Route path="/dojo/:id" component={DojoPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  );
};

export default Router;
