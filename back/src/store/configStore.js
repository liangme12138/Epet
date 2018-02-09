import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootRudex';
import ajaxMiddle from './ajaxMiddle';

const middle = applyMiddleware(ajaxMiddle);
const store = createStore(rootReducer, middle);
export default store;
