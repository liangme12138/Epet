import React from 'react'
// import { connect } from 'react-redux';
import './order.scss'

export default class OrderComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
           
        };
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
                    <li className="active">
                       <span>全部订单</span> 
                    </li>
                    <li>
                        <span>待付款</span>
                    </li>
                    <li>
                        <span>待收货</span>
                    </li>
                    <li>
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
// export default OrderComponent