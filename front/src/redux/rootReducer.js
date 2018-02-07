import {combineReducers} from 'redux';

import index from '../components/Index/indexReducer';
import TabsReducer from'../components/dogFoodIndex/dogFoodIndexReducer';
import MenuReducer from '../components/home/homeReducer';
import CostumeReducer from '../components/dogCostumeIndex/dogCostumeIndexReducer';
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
export default combineReducers({
    index,
    TabsReducer,
    MenuReducer,
    CostumeReducer,
    loginReducer,
    registerReducer,
    healthcareReducer,
    SnackToysReducer,
    goOutIndexReducer,
    BeautyIndexReducer,
    accountReducer,
    mineReducer,
    addressReducer,
    orderReducer

})
