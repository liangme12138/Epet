import React from 'react';
import { connect } from 'react-redux';
import * as dogCostumeIndexAction from './dogCostumeIndexAction';


class DogCostumeIndexComponent extends React.Component{
    componentWillMount() {
        var arr = []
        // console.log('componentWillMount');
        this.props.getTab()

    }
    render(){
        return (
            <div className="dogCostume">
                <div className="banner-item-3">
                    <img src="https://img2.epetbar.com/nowater/2018-01/22/16/16acd5a53c17914bb26723a799680f51.jpg" />

                </div>
            </div>
        )
    }
}

const mapToState = function (state) {
    console.log(state)
    return {
        AjaxTabState: state.CostumeReducer.status,
        TabDate: state.CostumeReducer.result || []
    }
}

export default connect(mapToState, dogCostumeIndexAction)(DogCostumeIndexComponent)