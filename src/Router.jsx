import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Container from "./components/Container";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Articles from "./pages/Articles";
import SocialMedia from "./pages/SocialMedia";

const Router = () => {
  return (
    <BrowserRouter>
      <Container>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/sobre" component={About} />
          <Route exact path="/experiencia" component={Experience} />
          <Route exact path="/projetos" component={Projects} />
          <Route exact path="/artigos" component={Articles} />
          <Route exact path="/redes_sociais" component={SocialMedia} />
          <Route path="/" render={() => <Redirect to={About} />} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default Router;
