import {combineReducers} from 'redux';

import category from '../components/category/categoryReducer'
import product from '../components/productsComponent/productReducer'
import defail from '../components/productDefail/defailComponentReducer'
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
import ePetTopBarReducer from '../components/ePetTopBar/ePetTopBarReducer'
import ActiveProduct from '../components/ToActivite/ToActiviteReducer';
import EpetMarkReducer from '../components/ePetMarking/ePetMarkingReducer';

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
    ePetTopBarReducer,
    ActiveProduct,
    EpetMarkReducer
    // BeautyIndexReducer

})
