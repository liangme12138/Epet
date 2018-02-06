import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import GoodslistComponent from "../components/goodList/goodsListComponent";
import IndexComponent from '../components/Index/indexComponent';
import PublicSearchComponent from "../components/publicSearch/publicSearchComponent";
import HomeComponent from '../components/home/homeComponent';
import DogFoodIndexComponent from '../components/dogFoodIndex/dogFoodIndexComponent';
import categorysComponent from '../components/category/categoryComponent'
import BrandComponent from '../components/brandComponent/brandComponent'
import ProductComponent from '../components/productsComponent/productsComponent'
import DefailComponent from '../components/productDefail/defailComponent'
 
export default (
    <div>
        <Route path="/" component={HomeComponent}>
            <IndexRoute component={IndexComponent} />  
            <Route path="/" component={IndexComponent}></Route>
            <Route path="dogfoodindex" component={DogFoodIndexComponent}></Route>
        </Route> 
        <Route path="/search" component={PublicSearchComponent}></Route>
        <Route path="category" component={GoodslistComponent}>
            <IndexRoute component={categorysComponent}></IndexRoute>
            <Route path="/brand" component={BrandComponent}></Route>
        </Route>
        <Route path="search" component={PublicSearchComponent}></Route>
        <Route path="product(/:val)" component={ProductComponent}></Route>
        <Route path="defail(/:goodId)" component={DefailComponent}></Route>
    </div>
)