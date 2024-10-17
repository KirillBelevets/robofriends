import React from 'react';
// import ReactDOM from 'react-dom'; // The new way to import createRoot:
import { Provider, connect } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { createRoot } from "react-dom/client";
import { thunk } from 'redux-thunk';
import './index.css'; 
import App from './containers/App';
import 'tachyons';
import * as serviceWorker from './serviceWorkerRegistration';
import { searchRobots, requestRobots } from "./reducers";

const logger = createLogger();

const rootReducers = combineReducers({searchRobots, requestRobots});
const store = createStore(rootReducers, applyMiddleware(thunk, logger));

const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);


// ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
