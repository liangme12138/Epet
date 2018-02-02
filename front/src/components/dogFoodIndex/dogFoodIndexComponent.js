import React from 'react';
import { connect } from 'react-redux';
import * as dogFoodIndexAction from './dogFoodIndexAction';
import Home from '../home/homeComponent';

class dogFoodIndexComponent extends React.Component{
    render(){
        return(
            <div>
                <Home/>
                <div>狗狗主粮</div>
            </div>
        )
    }
}

const mapToState = function (state) {
    return {
    }
}

export default connect(mapToState, dogFoodIndexAction)(dogFoodIndexComponent);