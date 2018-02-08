import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import GoodslistComponent from "../components/goodList/goodsListComponent";
import IndexComponent from '../components/Index/indexComponent';
import PublicSearchComponent from "../components/publicSearch/publicSearchComponent";
import Login from '../components/login/loginComponent'
import HomeComponent from '../components/home/homeComponent';
import DogFoodIndexComponent from '../components/dogFoodIndex/dogFoodIndexComponent';
import categorysComponent from '../components/category/categoryComponent'
import BrandComponent from '../components/brandComponent/brandComponent'
import ProductComponent from '../components/productsComponent/productsComponent'
import DefailComponent from '../components/productDefail/defailComponent';
 
import DogCostumeIndexComponent from '../components/dogCostumeIndex/dogCostumeIndexComponent';
import BrandSaleComponent from '../components/brandSale/brandSaleComponent';

import HealthCareIndexComponent from '../components/HealthCareIndex/HealthCareIndexComponent';
import SnackToysIndexComponent from '../components/SnackToysIndex/SnackToysIndexComponent';
import GoOutIndexComponent from '../components/goOutIndex/goOutIndexComponent';
import BeautyIndexComponent from '../components/BeautyIndex/BeautyIndexComponent';
import EpetTeamComponent from '../components/ePetTeam/ePetTeamComponent';
import Register from '../components/register/registerComponent';
import Mine from '../components/mine/mineComponent';
import Accounts from '../components/account/accountComponent';
import ePetTopBarComponent from '../components/ePetTopBar/ePetTopBarComponent';
import ePetMarkingComponent from '../components/ePetMarking/ePetMarkingComponent';
import orderComponent from '../components/order/orderComponent';
import address from '../components/address/addressComponent';
import editAddress from '../components/editAddress/editAddressComponent';
import cart from '../components/cartComponent/cartComponent';
import collect from '../components/collect/collectComponent';
import FakeComponent from '../components/specialist/fake/fakeComponent';
import HighQualityComponent from '../components/specialist/HighQuality/HighQualityComponent';
import FeedComponent from '../components/specialist/feed/feedComponent';
import GuideComponent from '../components/specialist/guide/guideComponent';
import ToysComponent from '../components/specialist/Toys/ToysComponent';
import ClothesComponent from '../components/specialist/clothes/clothesComponent';
import FashionComponent from '../components/specialist/fashion/fashionComponent';
import DriveComponent from '../components/specialist/drive/driveComponent';
import WatchCompoent from '../components/specialist/watch/watchCompoent';
import ScarceComponent from '../components/specialist/scarce/scarceComponent';
import ToActiviteComponent from '../components/ToActivite/ToActiviteComponent';
import TopVideoComponent from '../components/topVideo/topVideoComponent';
import OrderDefail from '../components/orderDefailComponent/orderDefailComponent';
import pay from '../components/payComponent/payComponent';
import PetallianceComponent from '../components/petalliance/petallianceComponent';
import ClothCityComponent from '../components/clothCity/clothCityComponent';
import NewYearComponent from '../components/newYear/newYearComponent';
import ApplawsComponent from '../components/applaws/applawsComponent';
import NatureBridgeComponent from '../components/natureBridge/natureBridgeComponent';
import MoshmComponent from '../components/moshm/moshmComponent';
import UGfoodComponent from '../components/uGfood/uGfoodComponent';
import MengbeiComponent from '../components/mengbei/mengbeiComponent';  
import FarmFoodComponent from '../components/farmFood/farmFoodComponent';
import PetinComponent from '../components/petin/petinComponent';
import AncolComponent from '../components/ancol/ancolComponent';
import QcComponent from '../components/qingcang/qingcangComponent';

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
        <Route path="/pay(/:orderId/:money)" component={pay}></Route>
        <Route path="category" component={GoodslistComponent}>
            <IndexRoute component={categorysComponent}></IndexRoute>
            <Route path="/brand" component={BrandComponent}></Route>
        </Route>
        <Route path="product(/:val)" component={ProductComponent}></Route>
        <Route path="defail(/:goodId)" component={DefailComponent}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="login" component={Login}></Route>
        <Route path="register" component={Register}></Route>
        <Route path="mine" component={Mine}></Route>
        <Route path="account" component={Accounts}></Route>
        <Route path="brandsale" component={BrandSaleComponent}></Route>
        <Route path="epettop" component={ePetTopBarComponent}></Route>
        <Route path="topvideo" component={TopVideoComponent}></Route>
        <Route path="orderDefail(/:orderId)" component={OrderDefail}></Route>
        
        
        <Route path="order" component={orderComponent}>
            
        </Route>
        <Route path="petalliance" component={PetallianceComponent}></Route>
        <Route path="epetteam" component={EpetTeamComponent}></Route>
        <Route path="epetmarking" component={ePetMarkingComponent}></Route>
        <Route path="clothCity" component={ClothCityComponent}></Route>
        <Route path="order(/:tab)" component={orderComponent}></Route>       
        <Route path="address" component={address}></Route>
        <Route path="editAddress(/:id/:rid)(/:uid)" component={editAddress}></Route>
        <Route path="collect" component={collect}></Route>
        <Route path="cart" component={cart}></Route>
        <Route path="fake" component={FakeComponent}></Route>
        <Route path="highquality" component={HighQualityComponent}></Route>
        <Route path="/feed" component={FeedComponent}></Route>
        <Route path="/guide" component={GuideComponent}></Route>
        <Route path="/toys" component={ToysComponent}></Route>
        <Route path="clothes" component={ClothesComponent}></Route>
        <Route path="/fashion" component={FashionComponent}></Route>
        <Route path="/drive" component={DriveComponent}></Route>
        <Route path="/watch" component={WatchCompoent}></Route>
        <Route path="/scarce" component={ScarceComponent}></Route>
        <Route path="/activite(/:id)" component={ToActiviteComponent}></Route>
        <Route path="newyear" component={NewYearComponent}></Route>
        <Route path="applaws" component={ApplawsComponent}></Route>
        <Route path="naturebridge" component={NatureBridgeComponent}></Route>
        <Route path="moshm" component={MoshmComponent}></Route>
        <Route path="ugfood" component={UGfoodComponent}></Route>
        <Route path="mengbei" component={MengbeiComponent}></Route>
        <Route path="farmfood" component={FarmFoodComponent}></Route>
        <Route path="petin" component={PetinComponent}></Route>
        <Route path="ancol" component={AncolComponent}></Route>
        <Route path="qc" component={QcComponent}></Route>
        


        <scopedSlots>   </scopedSlots>
    </div>
)