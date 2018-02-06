import {combineReducers} from 'redux';

import goodslist from '../components/goodList/goodsListReducer'
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

export default combineReducers({
    goodslist,
    index,
    TabsReducer,
    MenuReducer,
    CostumeReducer,
    loginReducer,
    registerReducer,
    healthcareReducer,
    SnackToysReducer,
    goOutIndexReducer,
    BeautyIndexReducer

})
