import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router' ;
import { Provider } from 'react-redux';
import { generateReducers } from './reducers';
import { Router } from './containers/Router';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const store = createStore(
    generateReducers(history),
    applyMiddleware(routerMiddleware(history)),
);





const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
