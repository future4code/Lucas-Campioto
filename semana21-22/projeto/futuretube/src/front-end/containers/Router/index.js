import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import {LoginPage} from "../LoginPage/index"

export const routes = {
    loginPage: "/login",
}; 

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
          <Route exact path={routes.loginPage} component={LoginPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;