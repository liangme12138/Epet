import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import GoodslistComponent from "../components/goodList/goodsListComponent";
import PublicSearchComponent from "../components/publicSearch/publicSearchComponent";

export default (
    <div>
        <Route path="/" component={GoodslistComponent}></Route>
        <Route path="search" component={PublicSearchComponent}></Route>
    </div>
)