import {combineReducers} from 'redux';

import goodslist from '../components/goodList/goodsListReducer'
import index from '../components/Index/indexReducer'
export default combineReducers({
    goodslist,
    index
})
