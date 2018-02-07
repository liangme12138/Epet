import React from 'react'
import { connect } from 'react-redux';
import * as orderAction from '../orderAction'
import './allorder.scss'
import List from '../../publicOrderList/orderListComponent'
class AllOrderComponent extends React.Component {
    state={
        userId: (JSON.parse(window.localStorage.getItem('userInfo')))[0].userId || '',
    }
    componentWillMount(){
        if(this.state.userId){
            this.props.allorder('order.php',{userId:this.state.userId}).then(res=>{
               this.setState({dataset:res})
            })
        }
    }
    render(){
        return (
            <div id="sm_allorder" ref="allorder">
                <List data={this.state.dataset}></List>
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
export default connect(mapToState, orderAction)(AllOrderComponent)