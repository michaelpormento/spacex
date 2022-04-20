import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import launchReducer from "./modules/reducers";
import rootSaga from "./modules/sagas";

import "./assets/scss/styles.scss";
import App from "./App";

// Reducers
const rootReducer = combineReducers({ launchReducer });

// Saga configuration
const sagaMiddleware = createSagaMiddleware();

// TODO: add env file. this should only show in dev mode
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
