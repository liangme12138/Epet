import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import GoodslistComponent from "../components/goodList/goodsListComponent";
import IndexComponent from '../components/Index/indexComponent';
import PublicSearchComponent from "../components/publicSearch/publicSearchComponent";
import Login from '../components/login/loginComponent'
import HomeComponent from '../components/home/homeComponent';
import DogFoodIndexComponent from '../components/dogFoodIndex/dogFoodIndexComponent'; 
import DogCostumeIndexComponent from '../components/dogCostumeIndex/dogCostumeIndexComponent';
import EpetTeamComponent from '../components/ePetTeam/ePetTeamComponent';
import Register from '../components/register/registerComponent';
import Mine from '../components/mine/mineComponent';
import Accounts from '../components/account/accountComponent';
import EpetInterComponent from '../components/ePetInter/ePetInterComponent';
import ePetTopBarComponent from '../components/ePetTopBar/ePetTopBarComponent';
import ePetMarkingComponent from '../components/ePetMarking/ePetMarkingComponent';
import orderComponent from '../components/order/orderComponent'
import address from '../components/address/addressComponent'
import allorder from '../components/order/allorder/allorderComponent'
import evaluate from '../components/order/waitevaluate/evaluateComponnet'
import waitpay from '../components/order/waitpay/payComponent'
import takegoods from '../components/order/waittakegoods/takegoodsComponent'
import editAddress from '../components/editAddress/editAddressComponent'
import collect from '../components/collect/collectComponent'
export default (
    <div>
        <Route path="/" component={HomeComponent}>
            <IndexRoute component={IndexComponent} />  
            <Route path="/" component={IndexComponent}></Route>
            <Route path="dogfoodindex" component={DogFoodIndexComponent}></Route>
            <Route path="dogcostumeindex" component={DogCostumeIndexComponent}></Route>
        </Route> 
        <Route path="/search" component={PublicSearchComponent}></Route>
        <Route path="category" component={GoodslistComponent}></Route>
        <Route path="search" component={PublicSearchComponent}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="epetteam" component={EpetTeamComponent}></Route>
        <Route path="login" component={Login}></Route>
        <Route path="register" component={Register}></Route>
        <Route path="mine" component={Mine}></Route>
        <Route path="account" component={Accounts}></Route>
        <Route path="epetinter" component={EpetInterComponent}></Route>
        <Route path="epettop" component={ePetTopBarComponent}></Route>
        <Route path="epetmarking" component={ePetMarkingComponent}></Route>
        <Route path="order" component={orderComponent}>
            <IndexRoute component={allorder} />
            <Route path="allorder" component={allorder}></Route>
            <Route path="waitpay" component={waitpay}></Route>
            <Route path="takegoods" component={takegoods}></Route>
            <Route path="evaluate" component={evaluate}></Route>
        </Route>
        <Route path="address" component={address}></Route>
        <Route path="editAddress" component={editAddress}></Route>
        <Route path="collect" component={collect}></Route>
    </div>
)