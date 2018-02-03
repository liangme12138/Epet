import React from 'react'
// import { connect } from 'react-redux';
import { List, InputItem, WhiteSpace, Button } from 'antd-mobile';
import './register.scss'
export default class Register extends React.Component {
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
                    <InputItem
                        placeholder="请输入验证码"
                    >
                        <div className="iconfont icon-mima" />
                        <Button type="ghost" inline size="small" style={{ marginRight: '0.08rem' }} onClick={this.getCode}>获取验证码</Button>
                    </InputItem>
                    <InputItem onBlur={this.getPwd}
                        placeholder="请输入8-20位密码"
                    >
                        <div className="iconfont icon-mima" />
                    </InputItem>
                    <WhiteSpace />
                    <div className="btn-container">
                        <Button className="btn" type="primary" onClick={this.login1}>注册</Button>
                    </div>
                    <p className="bott">点击【关注】，即表示您阅读并同意<span>《M宠用户协议》</span></p>
                </main>
            </div>
        )
    }
}

 