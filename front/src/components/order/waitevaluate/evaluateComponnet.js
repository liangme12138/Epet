import React from 'react'
// import { connect } from 'react-redux';
import './evaluate.scss'
import List from '../../publicOrderList/orderListComponent'
export default class EvaluateComponent extends React.Component {
    render() {
        return (
            <div id="sm_evaluate">
                <List></List>
            </div>
        )
    }
}