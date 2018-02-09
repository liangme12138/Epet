import React from 'react'
// import { connect } from 'react-redux';
import './takegoods.scss'
import List from '../../publicOrderList/orderListComponent'
export default class TakegoodsComponent extends React.Component {
    render() {
        return (
            <div id="sm_takegoods">
                <List></List>
            </div>
        )
    }
}