import {combineReducers} from 'redux';

import goodslist from '../components/goodList/goodsListReducer'
import index from '../components/Index/indexReducer';
import TabsReducer from'../components/dogFoodIndex/dogFoodIndexReducer';
import MenuReducer from '../components/home/homeReducer';
import CostumeReducer from '../components/dogCostumeIndex/dogCostumeIndexReducer';
import loginReducer from '../components/login/loginReducer'
import registerReducer from '../components/register/registerReducer'
export default combineReducers({
    goodslist,
    index,
    TabsReducer,
    MenuReducer,
    CostumeReducer,
    loginReducer,
    registerReducer
})
