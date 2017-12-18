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
import Root from './pages/Root';
import App from './pages/App';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

import BasicForm from 'components/example/forms/BasicForm';
import BasicTable from 'components/example/tables/BasicTables';
import AdvancedTable from 'components/example/tables/AdvancedTables';
import AsynchronousTable from 'components/example/tables/AsynchronousTable';
import Echarts from 'components/example/charts/Echarts';
import Recharts from 'components/example/charts/Recharts';
import Icons from 'components/example/ui/Icons';
import Buttons from 'components/example/ui/Buttons';
import Spins from 'components/example/ui/Spins';
import Modals from 'components/example/ui/Modals';
import Notifications from 'components/example/ui/Notifications';
import Tabs from 'components/example/ui/Tabs';
import Banners from 'components/example/ui/banners';
import Drags from 'components/example/ui/Draggable';
import Dashboard from 'components/example/dashboard/Dashboard';
import Gallery from 'components/example/ui/Gallery';
import BasicAnimations from 'components/example/animation/BasicAnimations';
import ExampleAnimations from 'components/example/animation/ExampleAnimations';
import AuthBasic from 'components/example/auth/Basic';
import RouterEnter from 'components/example/auth/RouterEnter';

const Wysiwyg = (location, cb) => {  // 按需加载富文本配置
    require.ensure([], require => {
        cb(null, require('components/example/ui/Wysiwyg').default);
    }, 'Wysiwyg');
};


export default class extends PureComponent {
    render() {
        const {store,history} = this.props
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route path="/" component={Root}>
                        <Route path={'login'} components={Login} />
                        <IndexRedirect to="app/dashboard/index" />
                        <Route path={'app'} component={App}>
                            <Route path={'form'}>
                                <Route path={'basicForm'} component={BasicForm} />
                            </Route>
                            <Route path={'table'}>
                                <Route path={'basicTable'} component={BasicTable} />
                                <Route path={'advancedTable'} components={AdvancedTable} />
                                <Route path={'asynchronousTable'} components={AsynchronousTable} />
                            </Route>
                            <Route path={'chart'}>
                                <Route path={'echarts'} component={Echarts} />
                                <Route path={'recharts'} component={Recharts} />
                            </Route>
                            <Route path={'ui'}>
                                <Route path={'icons'} component={Icons} />
                                <Route path={'buttons'} component={Buttons} />
                                <Route path={'spins'} component={Spins} />
                                <Route path={'modals'} component={Modals} />
                                <Route path={'notifications'} component={Notifications} />
                                <Route path={'tabs'} component={Tabs} />
                                <Route path={'banners'} component={Banners} />
                                <Route path={'wysiwyg'} getComponent={Wysiwyg} />
                                <Route path={'drags'} component={Drags} />
                                <Route path={'gallery'} component={Gallery} />
                            </Route>
                            <Route path={'animation'}>
                                <Route path={'basicAnimations'} component={BasicAnimations} />
                                <Route path={'exampleAnimations'} component={ExampleAnimations} />
                            </Route>
                            <Route path={'dashboard/index'} component={Dashboard} />
                            <Route path="auth">
                                <Route path="basic" component={AuthBasic} />
                                <Route path="routerEnter" component={(props) => this.requireAuth('/auth/testPage', <RouterEnter {...props} />)} />
                            </Route>
                            <Route path={'404'} component={NotFound} />
                        </Route>
                    </Route>
                </Router>
            </Provider>
        )
    }
}

