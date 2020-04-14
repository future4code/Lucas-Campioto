import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage/index";
import SignUp from "../SignUpPage/index"
import {FeedPage} from "../FeedPage";
import {SendVideo} from "../SendVideo";


export const routes = {
    loginPage: "/",
    signUpPage: "/signup",
    feed:"/feed",
    sendVideo:"/sendvideo"
}; 

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
          <Route exact path={routes.loginPage} component={LoginPage} />
          <Route exact path={routes.signUpPage} component={SignUp} />
          <Route exact path={routes.feed} component={FeedPage} />
          <Route exact path={routes.sendVideo} component={SendVideo} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;