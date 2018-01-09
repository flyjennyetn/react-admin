import "babel-polyfill";
import "react-fastclick";
import React from "react";
import {render} from "react-dom";
import {hashHistory} from "react-router";
import {syncHistoryWithStore} from "react-router-redux";
import Routes from "../app/Routes";
import configureStore from "../app/store/configureStore";
import SagaManager from '../app/sagas/'

const store=configureStore(window.__INITIAL_STATE__)
store.runSaga(SagaManager)
const history=syncHistoryWithStore(hashHistory,store)
render(<Routes store={store} history={history}/>,document.getElementById('app'))
