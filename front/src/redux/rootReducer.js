import {combineReducers} from 'redux';

import category from '../components/category/categoryReducer'
import index from '../components/Index/indexReducer'
import product from '../components/productsComponent/productReducer'
import defail from '../components/productDefail/defailComponentReducer'
export default combineReducers({
    category,
    product,
    defail,
    index
})
