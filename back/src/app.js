import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router,Route,hashHistory} from 'react-router';
import routes from './routers/routes';
import store from './store/configStore';
import 'antd/dist/antd.css';
import './sass/_base.scss';
ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}></Router>
    </Provider>
    ,document.getElementById('app')
)
