import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import GoodslistComponent from "../components/goodList/goodsListComponent";
import IndexComponent from '../components/Index/indexComponent';
import PublicSearchComponent from "../components/publicSearch/publicSearchComponent";
import Login from '../components/login/loginComponent'
import HomeComponent from '../components/home/homeComponent';
import DogFoodIndexComponent from '../components/dogFoodIndex/dogFoodIndexComponent'; 
import DogCostumeIndexComponent from '../components/dogCostumeIndex/dogCostumeIndexComponent';
import BrandSaleComponent from '../components/brandSale/brandSaleComponent';

import EpetTeamComponent from '../components/ePetTeam/ePetTeamComponent';
import Register from '../components/register/registerComponent';
import Mine from '../components/mine/mineComponent';
import Accounts from '../components/account/accountComponent';
import EpetInterComponent from '../components/ePetInter/ePetInterComponent';
import ePetTopBarComponent from '../components/ePetTopBar/ePetTopBarComponent';
import ePetMarkingComponent from '../components/ePetMarking/ePetMarkingComponent';
export default (
    <div>
        <Route path="/" component={HomeComponent}>
            <IndexRoute component={IndexComponent} />  
            <Route path="/" component={IndexComponent}></Route>
            <Route path="dogfoodindex" component={DogFoodIndexComponent}></Route>
            <Route path="dogcostumeindex" component={DogCostumeIndexComponent}></Route>
            <Route path="epetinter" component={EpetInterComponent}></Route>
            <Route path="epetteam" component={EpetTeamComponent}></Route>
            <Route path="epettop" component={ePetTopBarComponent}></Route>
            <Route path="epetmarking" component={ePetMarkingComponent}></Route>
            
        </Route> 
        <Route path="/search" component={PublicSearchComponent}></Route>
        <Route path="category" component={GoodslistComponent}></Route>
        <Route path="search" component={PublicSearchComponent}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="brandsale" component={BrandSaleComponent}></Route>
        <Route path="login" component={Login}></Route>
        <Route path="register" component={Register}></Route>
        <Route path="mine" component={Mine}></Route>
        <Route path="account" component={Accounts}></Route>
        
        
        
    </div>
)