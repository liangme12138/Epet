import React from 'react';
import { connect } from 'react-redux';
import * as payActions from './payAction'
import './payComponent.scss'
import { Modal, Button, List, Checkbox, Flex,Toast } from 'antd-mobile';
const alert = Modal.alert;
const prompt = Modal.prompt;


class PayComponent extends React.Component {
    state = {
        userId: ''
    }
    componentWillMount(){
        var val = JSON.parse(window.localStorage.getItem('userInfo'))[0].userId;
        this.setState({ userId: val });
    }
    goMy(){
        this.props.getPay(this.state.userId, this.props.router.params.orderId).then(res=>{
            this.props.router.push("/order/takegoods");
        });
    }
    goback(){
        this.props.router.goBack(-1);
    }
    render(){
        return(
            <div className="paym">
                <header>
                    <i className="iconfont icon-back" onClick={this.goback.bind(this)}></i>
                    <p>支付页面</p>
                </header>
                <div>
                    <p>订单号：<span>{this.props.router.params.orderId}</span></p>
                    <p>总额：<span>{"￥" + this.props.router.params.money}</span></p>
                    <Button onClick={() => alert('我的萌宠', '确认支付？', [
                        { text: '考虑一下'},
                        {
                            text: '确认', onPress: () => new Promise((resolve) => {
                                {/* Toast.info('onPress Promise', 1); */}
                                setTimeout(resolve, 50);
                                this.props.getPay(this.state.userId, this.props.router.params.orderId).then(res => {
                                    this.props.router.push("/order/takegoods");
                                });
                            }),
                            style: { fontWeight: 'bold' },
                        },
                    ])}>确认支付</Button>
                    
                </div>
            </div>
        )
    }
}

let mapToState = function (state) {
    return {
        status: state.payReducer.status,
        result: state.payReducer.result || []
    }
}

export default connect(mapToState, payActions)(PayComponent)