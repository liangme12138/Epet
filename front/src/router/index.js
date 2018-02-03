import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import GoodslistComponent from "../components/goodList/goodsListComponent";
import IndexComponent from '../components/Index/indexComponent';
import PublicSearchComponent from "../components/publicSearch/publicSearchComponent";
import Login from '../components/login/loginComponent'
import HomeComponent from '../components/home/homeComponent';
import DogFoodIndexComponent from '../components/dogFoodIndex/dogFoodIndexComponent'; 
import EpetTeamComponent from '../components/ePetTeam/ePetTeamComponent'
export default (
    <div>
        <Route path="/" component={HomeComponent}>
            <IndexRoute component={IndexComponent} />  
            <Route path="/" component={IndexComponent}></Route>
            <Route path="dogfoodindex" component={DogFoodIndexComponent}></Route>
        </Route> 
        <Route path="/search" component={PublicSearchComponent}></Route>
        <Route path="category" component={GoodslistComponent}></Route>
        <Route path="search" component={PublicSearchComponent}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/epetteam" component={EpetTeamComponent}></Route>
        
    </div>
)