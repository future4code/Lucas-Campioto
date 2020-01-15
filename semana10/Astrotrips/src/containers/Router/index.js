import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import HomePage from '../HomePage';
import Register from '../Register';
import ListTripsPage from '../ListTripsPage';
import CreateTrip from '../CreateTripPage';
import TripDetails from '../TripDetailsPage'




export const routes = {
  root: "/",
  applicationForm: "/application-form",
  login: "/login",
  createNewTrips: "/trips/create",
  tripList: "/trips/list",
  tripDetails: "/trips/datails",
  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={HomePage} />
        <Route path={routes.login} component={LoginPage} />
        <Route path={routes.applicationForm} component={Register} />
        <Route path={routes.createNewTrips} component={CreateTrip} />
        <Route path={routes.tripList} component={ListTripsPage} />
        <Route path={routes.tripDetails} component={TripDetails} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
