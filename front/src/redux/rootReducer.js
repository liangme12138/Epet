import {combineReducers} from 'redux';


// import index from '../components/Index/indexReducer';
import category from '../components/category/categoryReducer';
import product from '../components/productsComponent/productReducer';
import defail from '../components/productDefail/defailComponentReducer';
import IndexReducer from '../components/Index/indexReducer';
import TabsReducer from '../components/dogFoodIndex/dogFoodIndexReducer';
import MenuReducer from '../components/home/homeReducer';
import CostumeReducer from '../components/dogCostumeIndex/dogCostumeIndexReducer';
import GoodslistReducer from '../components/ePetTeam/ePetTeamReducer'
import BrandSaleReducer from '../components/brandSale/brandSaleReducer'
import loginReducer from '../components/login/loginReducer'
import registerReducer from '../components/register/registerReducer'
import healthcareReducer from '../components/HealthCareIndex/HealthCareIndexReducer';
import SnackToysReducer from '../components/SnackToysIndex/SnackToysIndexReducer';
import goOutIndexReducer from '../components/goOutIndex/goOutIndexReducer';
import BeautyIndexReducer from '../components/BeautyIndex/BeautyIndexReducer';
import accountReducer from '../components/account/accountReducer'
import mineReducer from '../components/mine/mineReducer'
import addressReducer from '../components/address/addressReducer'
import orderReducer from '../components/order/orderReducer'
import cart from '../components/cartComponent/cartReducer'
import ePetTopBarReducer from '../components/ePetTopBar/ePetTopBarReducer'
import ActiveProduct from '../components/ToActivite/ToActiviteReducer';
import orderReducer1 from '../components/orderDefailComponent/orderDefailReducer';
import payReducer from '../components/payComponent/payReducer';

import EpetMarkReducer from '../components/ePetMarking/ePetMarkingReducer';
import petAllianceReducer from '../components/petalliance/petallianceReducer';
import topReducer from '../components/topVideo/topVideoReducer';
import ClothCityReducer from '../components/clothCity/clothCityReducer';
import NatureBridgeReducer from '../components/natureBridge/natureBridgeReducer';
import moshmReducer from '../components/moshm/moshmReducer';
import UgfoodReducer from '../components/uGfood/uGfoodReducer';
import MengbeiReducer from '../components/mengbei/mengbeiReducer';
import farmFoodReducer from '../components/farmFood/farmFoodReducer';
import petinReducer from '../components/petin/petinReducer';
import ancolReducer from '../components/ancol/ancolReducer';
import qcReducer from '../components/qingcang/qingcangReducer';

import collectReducer from '../components/collect/collectReducer'
export default combineReducers({
    category,
    product,
    defail,
    IndexReducer,
    TabsReducer,
    MenuReducer,
    CostumeReducer,
    GoodslistReducer,
    BrandSaleReducer,
    loginReducer,
    registerReducer,
    healthcareReducer,
    SnackToysReducer,
    goOutIndexReducer,
    BeautyIndexReducer,
    accountReducer,
    mineReducer,
    addressReducer,
    orderReducer,
    cart,
    payReducer,
    orderReducer1,
    BeautyIndexReducer,
    ePetTopBarReducer,
    ActiveProduct,
    EpetMarkReducer,
    petAllianceReducer,
    topReducer,
    ClothCityReducer,
    NatureBridgeReducer,
    moshmReducer,
    UgfoodReducer,
    MengbeiReducer,
    farmFoodReducer,
    petinReducer,
    ancolReducer,
    qcReducer,
    collectReducer
    // BeautyIndexReducer
})
