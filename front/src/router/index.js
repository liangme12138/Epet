import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import GoodslistComponent from "../components/goodList/goodsListComponent";
import PublicSearchComponent from "../components/publicSearch/publicSearchComponent";
import Login from '../components/login/loginComponent'
export default (
    <div>
        <Route path="/" component={GoodslistComponent}></Route>
        <Route path="search" component={PublicSearchComponent}></Route>
        <Route path="/login" component={Login}></Route>
    </div>
)