import {combineReducers} from 'redux';

import goodslist from '../components/goodList/goodsListReducer'
import index from '../components/Index/indexReducer';
import TabsReducer from'../components/dogFoodIndex/dogFoodIndexReducer';
import MenuReducer from '../components/home/homeReducer'

export default combineReducers({
    goodslist,
    index,
    TabsReducer,
    MenuReducer
})
