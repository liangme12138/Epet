import React from 'react'
import { connect } from 'react-redux';
import * as registerAction from './registerAction'
import { List, InputItem, WhiteSpace, Button } from 'antd-mobile';
import './register.scss'
class Register extends React.Component {
    getUser=(e)=>{
        this.setState({phone:e});
        // this.props.checkPhone()

    }
    getCode=(e)=>{
        this.setState({code: e });
    }
    getPwd = (e) => {
        this.setState({ password: e });
    }
    clickCode=(e)=>{
        // 获取验证码
        // this.setState({ checkCode:e});
    }
    register=(e)=>{
        if ($.trim(this.state.phone) && $.trim(this.state.password) && $.trim(this.state.code)==this.state.checkCode){
            this.props.register('register', { phone: $.trim(this.state.phone), password: $.trim(this.state.password)})
         }   
    }
    goBack = (e) => {
        this.props.router.goBack(-1);
    }
    render(){
        return(
            <div id="sm_reg">
                <header className="header">
                    <p><i className="iconfont icon-back" onClick={this.goBack}></i>注册</p>
                </header>
                <main className="main">
                    <InputItem onBlur={this.getUser}
                        placeholder="手机号码"
                        autoFocus
                    >
                        <div className="iconfont icon-ren" />
                    </InputItem>
                    <InputItem onBlur={this.getCode}
                        placeholder="请输入验证码"
                    >
                        <div className="iconfont icon-mima" />
                        <Button type="ghost" inline size="small" style={{ marginRight: '0.08rem' }} onClick={this.clickCode}>获取验证码</Button>
                    </InputItem>
                    <InputItem onBlur={this.getPwd}
                        placeholder="请输入8-20位密码"
                    >
                        <div className="iconfont icon-mima" />
                    </InputItem>
                    <WhiteSpace />
                    <div className="btn-container">
                        <Button className="btn" type="primary" onClick={this.register}>注册</Button>
                    </div>
                    <p className="bott">点击【关注】，即表示您阅读并同意<span>《M宠用户协议》</span></p>
                </main>
            </div>
        )
    }
}
const mapToState = function (state) {
    console.log(state)
    return {
        status: state.registerReducer.status,
        data: state.registerReducer.result || []
    }
}
export default connect(mapToState, registerAction)(Register)
 