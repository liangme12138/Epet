import {combineReducers} from 'redux';

import homeReducer from '../components/home/homeReducer';
import goodListReducer from '../components/goodList/goodListReducer'

export default combineReducers({
    homeReducer,
    goodListReducer
})
