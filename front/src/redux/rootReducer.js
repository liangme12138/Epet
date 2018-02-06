import {combineReducers} from 'redux';

import goodslist from '../components/goodList/goodsListReducer'
import index from '../components/Index/indexReducer';
import TabsReducer from'../components/dogFoodIndex/dogFoodIndexReducer';
import MenuReducer from '../components/home/homeReducer';
import CostumeReducer from '../components/dogCostumeIndex/dogCostumeIndexReducer';
import GoodslistReducer from '../components/ePetTeam/ePetTeamReducer'
import BrandSaleReducer from '../components/brandSale/brandSaleReducer'
import healthcareReducer from '../components/HealthCareIndex/HealthCareIndexReducer';
import SnackToysReducer from '../components/SnackToysIndex/SnackToysIndexReducer';
import goOutIndexReducer from '../components/goOutIndex/goOutIndexReducer';
import BeautyIndexReducer from '../components/BeautyIndex/BeautyIndexReducer';
import ePetTopBarReducer from '../components/ePetTopBar/ePetTopBarReducer'
export default combineReducers({
    goodslist,
    index,
    TabsReducer,
    MenuReducer,
    CostumeReducer,
    GoodslistReducer,
    BrandSaleReducer,
    healthcareReducer,
    SnackToysReducer,
    goOutIndexReducer,
    BeautyIndexReducer,
    ePetTopBarReducer
})
