import React from 'react';
import { connect } from 'react-redux';
import * as dogFoodIndexAction from './dogFoodIndexAction'; 
import PublicMenu from '../publicMenu/publicMenuComponent';

class dogFoodIndexComponent extends React.Component{
    render(){
        return(
            <div>
                <div>狗狗主粮</div>
                {/* <PublicMenu/> */}
            </div>
        )
    }
}

const mapToState = function (state) {
    return {
    }
}

export default connect(mapToState, dogFoodIndexAction)(dogFoodIndexComponent);