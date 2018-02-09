import React from 'react'
// import { connect } from 'react-redux';
import './allorder.scss'
import List from '../../publicOrderList/orderListComponent'
export default class AllOrderComponent extends React.Component {
    render(){
        return (
            <div id="sm_allorder">
                <List></List>
            </div>
        )
    }
}