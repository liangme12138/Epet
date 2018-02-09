import React from 'react'
// import { connect } from 'react-redux';
import './pay.scss'
import List from '../../publicOrderList/orderListComponent'
export default class PayComponent extends React.Component {
    render() {
        return (
            <div id="sm_pay">
                <List></List>
            </div>
        )
    }
}