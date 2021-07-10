import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Container from "./components/Container";
import About from "./pages/About";

const Router = () => {
  return (
    <BrowserRouter>
      <Container>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/sobre" component={About} />
          <Route path="/" render={() => <Redirect to={About} />} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default Router;
