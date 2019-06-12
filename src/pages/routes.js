import React from 'react';
import Loadable from 'react-loadable';
import {HashRouter as Router, Route,Switch} from 'react-router-dom';
import Loading from 'components/Loading/';

import Boot from './Boot';
import App from './App';
import Dashboard from './Dashboard/';
import Login from './Login/';
import NotFound from './NotFound/';

import Example from './example/routes';

import Systems from './systems/routes';
const routesArr = [...Systems];

const routes = (
  <Router>
        <Boot>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/" render={({history,location,match}) => (
                    <App history={history} location={location} match={location}>
                        <Route path="/dashboard" component={Dashboard} />
                        {Example.map((el, i) =>
                            <Route
                                key={'Example'+i}
                                path={el.path}
                                component={el.component}
                            />
                        )}
                        {routesArr.map((el, i) =>
                            <Route
                                key={'routesArr'+i}
                                path={el.path}
                                component={Loadable({
                                    loader: () => el.component,
                                    loading: Loading,
                                })}
                            />
                        )}
                    </App>
                )} />
                <Route component={NotFound} />
            </Switch>
        </Boot>
    </Router>
);

export default routes;
