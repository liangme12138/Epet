import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import GoodslistComponent from "../components/goodList/goodsListComponent";
import IndexComponent from '../components/Index/indexComponent';
import PublicSearchComponent from "../components/publicSearch/publicSearchComponent";
import HomeComponent from '../components/home/homeComponent';
import DogFoodIndexComponent from '../components/dogFoodIndex/dogFoodIndexComponent';
 
export default (
    <div>
        <Route path="/" component={IndexComponent}></Route>
        <Route path="/search" component={PublicSearchComponent}></Route>
        <Route path="/dogfoodindex" component={DogFoodIndexComponent}></Route>
        {/* <Route path="/index" component={IndexComponent}></Route>             */}
        <Route path="goodslist" component={GoodslistComponent}></Route>
        <Route path="search" component={PublicSearchComponent}></Route>
    </div>
)