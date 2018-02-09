import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux';
import * as orderAction from './orderAction'
import List from '../../components/publicOrderList/orderListComponent'
import './order.scss'
class OrderComponent extends React.Component{
    state={
        tabNum:this.props.params.tab,
         userId: (JSON.parse(window.localStorage.getItem('userInfo')))[0].userId || '',
    }
    componentWillMount() {
        if (this.state.userId) {
            var  status=0;
            if (this.state.tabNum =="waitpay"){
                status=0;
            }
            else if (this.state.tabNum =="takegoods"){
                status=1;
            }
            else if (this.state.tabNum == "evaluate"){
                status = 2;
            }
            this.props.allorder('order.php', { userId: this.state.userId,status:status}).then(res => {
                this.count(res);
                this.setState({ dataset: res })
            })
        }
    }
    changeTab=(e)=>{
        var tab = e.target.tagName.toLowerCase();
        var text=$(e.target).html();
        if(tab=="span"){
            $(e.target).parent('li').addClass('active').siblings('li').removeClass('active');
            if (text =="全部订单"){ 
                this.props.allorder('order.php', { userId: this.state.userId }).then(res => {
                    this.count(res);
                    this.setState({ dataset: res })
                })
            }
            else if (text == "待付款"){
                this.props.waitpay('order.php', { userId: this.state.userId,status:0}).then(res => {
                    this.count(res);
                    this.setState({ dataset: res })
                })
            }
            else if (text == "待收货"){
                this.props.takegoods('order.php', { userId: this.state.userId,status:1}).then(res => {
                    this.count(res);
                this.setState({ dataset: res })
             })
            }
            else if (text == "待评价") {
                this.props.evaluate('order.php', { userId: this.state.userId, status:2 }).then(res => {
                    this.count(res);
                    this.setState({ dataset: res })
                })
            }
            
        }    
    }
    count(res){
        if (res) {
            for (var i = 0; i < res.length; i++) {
                for (var j = i + 1; j < res.length; j++) {
                    if (res[i].goodId == res[j].goodId) {
                        res[i].count = res[j].count * 1 + res[i].count * 1;
                        res.splice(j, 1);
                        j--;
                    }
                }
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
                        <List data={this.state.dataset}></List>                 
                </div>
            </div>
        )
    }
}
const mapToState = function (state) {
    
    return {
        type: state.orderReducer.type,
        information: state.orderReducer.info || []
    }
}
export default connect(mapToState, orderAction)(OrderComponent)