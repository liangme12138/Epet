import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import GoodslistComponent from "../components/goodList/goodsListComponent";
import IndexComponent from '../components/Index/indexComponent';
import PublicSearchComponent from "../components/publicSearch/publicSearchComponent";
import Login from '../components/login/loginComponent'
import HomeComponent from '../components/home/homeComponent';
import DogFoodIndexComponent from '../components/dogFoodIndex/dogFoodIndexComponent'; 
import DogCostumeIndexComponent from '../components/dogCostumeIndex/dogCostumeIndexComponent';
import EpetTeamComponent from '../components/ePetTeam/ePetTeamComponent'
import Register from '../components/register/registerComponent'
import Mine from '../components/mine/mineComponent'
import Accounts from '../components/account/accountComponent';
import HealthCareIndexComponent from '../components/HealthCareIndex/HealthCareIndexComponent';
import SnackToysIndexComponent from '../components/SnackToysIndex/SnackToysIndexComponent';
import GoOutIndexComponent from '../components/goOutIndex/goOutIndexComponent';
import BeautyIndexComponent from '../components/BeautyIndex/BeautyIndexComponent';
export default (
    <div>
        <Route path="/" component={HomeComponent}>
            <IndexRoute component={IndexComponent} />  
            <Route path="/" component={IndexComponent}></Route>
            <Route path="dogfoodindex" component={DogFoodIndexComponent}></Route>
            <Route path="dogcostumeindex" component={DogCostumeIndexComponent}></Route>
            <Route path="healthcareindex" component={HealthCareIndexComponent}></Route>
            <Route path="snacktoysindex" component={SnackToysIndexComponent}></Route>
            <Route path="gooutindex" component={GoOutIndexComponent}></Route>
            <Route path="beautyindex" component={BeautyIndexComponent}></Route>
        </Route> 
        <Route path="/search" component={PublicSearchComponent}></Route>
        <Route path="category" component={GoodslistComponent}></Route>
        <Route path="search" component={PublicSearchComponent}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/epetteam" component={EpetTeamComponent}></Route>
        <Route path="login" component={Login}></Route>
        <Route path="register" component={Register}></Route>
        <Route path="mine" component={Mine}></Route>
        <Route path="account" component={Accounts}></Route>
        
    </div>
)