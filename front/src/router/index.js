import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import GoodslistComponent from "../components/goodList/goodsListComponent";
import IndexComponent from '../components/Index/indexComponent';
import PublicSearchComponent from "../components/publicSearch/publicSearchComponent";
import HomeComponent from '../components/home/homeComponent';

export default (
    <div>
        <Route path="/" component={HomeComponent}></Route>
        <Route path="/index" component={IndexComponent}></Route>            
        <Route path="goodslist" component={GoodslistComponent}></Route>
        <Route path="search" component={PublicSearchComponent}></Route>
    </div>
)