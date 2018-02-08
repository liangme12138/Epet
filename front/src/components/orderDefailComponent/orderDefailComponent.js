import React from 'react';
import { connect } from 'react-redux';
import * as orderActions from './orderDefailAction'
import spinner from '../spinner/spinner'
import { Button, Flex, WingBlank } from 'antd-mobile';
import './orderDefailComponent.scss'

class OrderComponent extends React.Component {
    state = {
        data : [],
        num:'',
        money1:'',
        userId:''
    }
    componentWillMount(){
        if (JSON.parse(window.localStorage.getItem('userInfo'))) {
            var val = JSON.parse(window.localStorage.getItem('userInfo'))[0].userId;
            this.setState({ userId: val });
            var orderid = this.props.router.params.orderId || this.props.orderId;
            this.props.getOrder(val, orderid).then(res=>{
                for (var i = 0; i < res.length; i++) {
                    res[i].count = 1;
                    for (var j = i + 1; j < res.length; j++) {
                        res[j].count = 1;
                        if (res[i].goodId == res[j].goodId) {
                            res[i].count += 1;
                            res.splice(j, 1);
                            j--;
                        }
                    }
                }
                var money1 = '';
                var num = '';
                if (res.length == 1) {
                    money1 += res[0].Price * 1 * res[0].count * 1;
                    num += res[0].count * 1;
                } else {
                    for (var i = 0; i < res.length; i++) {
                        money1 += res[i].Price * 1 * res[i].count * 1;
                        num += res[i].count * 1;
                    }
                }
                this.setState({ data: res });
                this.setState({ num: num });
                this.setState({ money1: money1 });
            });
        }
    }
    goback(){
        this.props.router.goBack(-1)
    }
    gopay(){
        this.props.router.push("/pay/" + this.props.orderId +"/" + this.state.money1);
    }
    change(){

    }
    goaddress(){
        this.props.router.push("/editAddress/" + this.state.userId);
    }
    render(){
        return(
            <div id="orderDefail">
                <header>
                    <i className="iconfont icon-back" onClick={this.goback.bind(this)}></i>
                    <p>订单结算</p>
                </header>
                <div className="orderDefail">
                    <h3>地址：{this.state.data != '' ? this.state.data[0].village + "," + this.state.data[0].doorplate: ''}</h3>
                    <h3>电话：{this.state.data != '' ? this.state.data[0].phone : ''}</h3>
                    <h3>收货人：{this.state.data != '' ? this.state.data[0].linkMan : ''}</h3>
                    <Button className="btn" type="primary" onClick={this.goaddress.bind(this)}>修改地址</Button>
                    <p>商品列表：</p>
                    <ul>
                        {
                            this.state.data.map((item,idx)=>{
                                return (
                                    <li key={idx}>
                                        <img src={item.ImgUrl} alt="" />
                                        <div>
                                            <h3>{item.goodName}</h3>
                                            <p className="others">{item.size}</p>
                                            <p className="price">{"￥ " + item.Price}</p>
                                            <p className="num1">{"数量：" + item.count}</p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <footer>
                    <div className="footerOrder">总额： <span>{"￥" + this.state.money1}</span>总件数： <span>{this.state.num}</span></div>
                    <div className="footerOrder1" onClick={this.gopay.bind(this)}>去支付</div>
                </footer>
            </div>
        )
    }
}

let mapToState = function (state) {
    return {
        status: state.orderReducer1.status,
        result: state.orderReducer1.result || [],
        orderId: state.orderReducer1.orderId || ''
    }
}

export default connect(mapToState, orderActions)(OrderComponent)
