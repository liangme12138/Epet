import React from 'react'
import { connect } from 'react-redux';
import * as orderAction from '../orderAction'
import './pay.scss'
import List from '../../publicOrderList/orderListComponent'
class PayComponent extends React.Component {
    render() {
        return (
            <div id="sm_pay">
                <List></List>
            </div>
        )
    }
}
const mapToState = function (state) {
    return {
        // status: state.orderReducer.status,
        // type: state.orderReducer.type,
        // information: state.orderReducer.info || []
    }
}
export default connect(mapToState, orderAction)(PayComponent)