import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import {LoginPage} from "../LoginPage/index";
import{SignUp} from "../SignUpPage/index"

export const routes = {
    loginPage: "/login",
    signUpPage: "/signup"
}; 

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
          <Route exact path={routes.loginPage} component={LoginPage} />
          <Route exact path={routes.signUpPage} component={SignUp} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;