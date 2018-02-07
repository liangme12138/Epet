import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux';
import * as orderAction from './orderAction'
import './order.scss'
class OrderComponent extends React.Component{
    state={
        tabNum:this.props.params.tab
    }
    changeTab=(e)=>{
        var tab = e.target.tagName.toLowerCase();
        var text=$(e.target).html();
        if(tab=="span"){
            $(e.target).parent('li').addClass('active').siblings('li').removeClass('active');
            if (text =="全部订单"){
                this.props.router.push("order/allorder");
            }
            else if (text == "待付款"){
                this.props.router.push("order/waitpay");
            }
            else if (text == "待收货"){
                this.props.router.push("order/takegoods");
            }
            else if (text == "待评价") {
                this.props.router.push("order/evaluate");
            }
            
        }    
    }
    goBack = (e) => {
        this.props.router.push('mine');
    }
    render(){    
        return (
            <div id="sm_order">
                <header className="header">
                    <p><i className="iconfont icon-back" onClick={this.goBack}></i>我的订单<i className="iconfont icon-viewgallery"></i></p>
                </header>
                <ul className="nav" onClick={this.changeTab}>
                    <li className={'allorder'==this.state.tabNum?'active':''}>
                       <span>全部订单</span> 
                    </li>
                    <li className={'waitpay'==this.state.tabNum?'active':''}>
                        <span>待付款</span>
                    </li>
                    <li className={'takegoods'==this.state.tabNum?'active':''}>
                        <span>待收货</span>
                    </li>
                    <li className={'evaluate'==this.state.tabNum?'active':''}>
                        <span>待评价</span>
                    </li>
                </ul>
                <div className="main">
                    {this.props.children}
                </div>
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
export default connect(mapToState, orderAction)(OrderComponent)