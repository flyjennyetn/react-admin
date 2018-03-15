/**
 * Created by flyjennyetn on 2016-10-24.
 */
import React, {PureComponent} from "react";
import {
    Router,
    Route,
    Link,
    IndexRoute,
    IndexRedirect,
    Redirect,
    IndexLink
} from 'react-router';
import {Provider} from "react-redux";

//所有页面引入
import routes from "./pages/Root";

export default class extends PureComponent {
    render() {
        const {store,history} = this.props
        return (
            <Provider store={store}>
                <Router history={history} routes={routes}/>
            </Provider>
        )
    }
}

