import React from 'react'
import { connect } from 'react-redux';
import * as orderAction from '../orderAction'
import './takegoods.scss'
import List from '../../publicOrderList/orderListComponent'
class TakegoodsComponent extends React.Component {
    state = {
        userId: (JSON.parse(window.localStorage.getItem('userInfo')))[0].userId || '',
    }
    render() {
        return (
            <div id="sm_takegoods">
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
export default connect(mapToState, orderAction)(TakegoodsComponent)