import React from 'react';
import { connect } from 'react-redux';
import {hashHistory} from 'react-router';
import { Spin } from 'antd';
import { Alert } from 'antd';
import * as LoginAction from '../../actions/loginAciton';
import '../../sass/login.scss';
class LoginComponent extends React.Component{
    componentWillMount(){
        this.setState({
            username:'',
            password:'',
            show:'hide'
        })
    }
    getName(event){
        this.setState({'username':event.target.value})
    }
    password(event){
        this.setState({ 'password': event.target.value })
    }
    goLogin(){
        this.props.goLogin(this.state.username,this.state.password);
        window.sessionStorage.setItem('username', this.state.username);
        this.setState({
            show: ""
        })
    }
    close(){
        this.props.closeTips();
    }
    render(){
        return (
            <div id="login" onClick={this.close.bind(this)}>
                <div className={this.state.show != "" ? this.state.show : this.props.class}>
                    <Spin></Spin>
                </div>
                <Alert message="很抱歉,您的帐号密码输入有误,请重新输入!" className={this.props.err} type="error"  />
                <div className="loginArea">
                    <h1>宠萌管理系统</h1>
                    <div id="form">
                        <p><input type="text" placeholder="员工帐号" onBlur={this.getName.bind(this)}/></p>
                        <p><i></i><input type="password" placeholder="密码" onBlur={this.password.bind(this)} /></p>
                        <p><button onClick={this.goLogin.bind(this)}>登录</button></p>
                        <p>
                            <span>请根据员工号登录系统</span>
                            <span>如果登录失败,请及时联系管理员</span>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
    componentDidUpdate(){
        if (this.props.position != "" && this.props.position != "fail" && this.state.username != "") {
            window.sessionStorage.setItem('position', this.props.position);
            hashHistory.push("/index");
        }
    }
    componentWillUnmount(){
        this.setState({
            'username': "",
            "password": ""
        })
    }
}
const mapToState = function(state){
    return {
        status: state.Login.status,
        class: state.Login.class ? state.Login.class : 'float hide',
        position: state.Login.position ? state.Login.position : "",
        err:state.Login.err == "" ? "" : 'hide'
    }
}
export default connect(mapToState, LoginAction)(LoginComponent);
