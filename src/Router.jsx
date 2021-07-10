import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Container from "./components/Container";
import About from "./pages/About";
import Experience from "./pages/Experience";

const Router = () => {
  return (
    <BrowserRouter>
      <Container>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/sobre" component={About} />
          <Route exact path="/experiencia" component={Experience} />
          <Route path="/" render={() => <Redirect to={About} />} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default Router;
