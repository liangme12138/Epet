import React from 'react'

import { List, InputItem, WhiteSpace, Button } from 'antd-mobile';
import baseUrl from '../../utils/baseUrl'
import http from "../../utils/reqAjax.js"
import './login.scss'
export default class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            show:true,
            phone:'',
            checkcode: '',
            user:'',
            pwd:'',
            count:80,
            obj:"获取动态密码"
        };
    }
    changeTab=(e)=>{
        const idx=$(e.target).index();
        if(idx=="0"){
            $(e.target).children().addClass('active').parent('li').siblings('li').children().removeClass('active');
            this.setState({show:true});
        }
        else if(idx=="1"){
            $(e.target).children().addClass('active').parent('li').siblings('li').children().removeClass('active');
            this.setState({ show: false });
        }
    }
    getUser=(e)=>{
        if(e.length>0){
          this.setState({user:$.trim(e)});      
        }
        
    }
    getPwd=(e)=>{
        if(e.length>0){
            this.setState({ pwd: $.trim(e)});
        }          
    }
    getPhone=(e)=>{
        if (e.length > 0) {
            this.setState({ phone: $.trim(e) });
        } 
    }
    login1=(e)=>{
        if(!this.state.user){

        }
    }
    login2 = (e) => {

    }
    randomNumber(min, max) {
        return parseInt(Math.random() * (max - min + 1) + min);
    }
    getCode=(e)=>{
        var codes = this.randomNumber(999999, 100000);
        this.setState({ checkcode: codes });
        $.ajax({
            type: 'POST',
            url: baseUrl.Url + "smsyzm.php",
            data: { yzm:codes, yzmtel: this.state.phone},
            success: function (res) {
                res = eval('(' + res + ')');
                if (res.msg =="OK") {
                    // 设置倒计时
                    var timer = setInterval(()=>{
                        this.setState({ count: this.state.count - 1 });
                        if (this.state.count <= 0) {
                            clearInterval(timer);
                            this.setState({ obj: '获取动态密码' });
                            return;
                        }
                        this.setState({ obj: this.state.count });
                    }, 1000)
                    
                }
            }.bind(this)
        })
     
       
    }
    goBack=(e)=>{
        // this.props.router.goBack(-1);
        this.props.router.push("/");
    }
    skipTo = (e) => {
        this.props.router.push("register");
    }
    render(){
        return (
            <div id="sm_login">
                <div id="top" style={{ background: "url('../../src/assets/img/login/loginBg.png') no-repeat", backgroundSize: "100% 100%"}}>
                     <p className="header">
                        <span><i className="iconfont icon-back" onClick={this.goBack}></i></span>
                        <span onClick={this.skipTo}>注册</span>
                     </p>
                    <div className="logo"> <img src="" alt="" /></div>
                    <ul className="tab" onClick={this.changeTab}>
                        <li>普通登录<i className="active"></i></li>
                        <li>手机动态密码登录<i></i></li>
                    </ul>
                    <div id="main">
                    {this.state.show? <div className="login1">
                            <InputItem onBlur={this.getUser}                          
                                placeholder="手机号/邮箱/用户名"
                                autoFocus
                            >
                                <div className="iconfont icon-ren"/>
                            </InputItem>
                            <InputItem onBlur={this.getPwd}
                                placeholder="输入密码"
                            >
                                <div className="iconfont icon-mima"/>
                            </InputItem>
                            <WhiteSpace />
                            <p className="mima"><span>新用户注册</span><span>忘记密码？</span></p>  
                            <div className="btn-container">
                                <Button className="btn" type="primary" onClick={this.login1}>登录</Button>
                            </div>
                        </div>:<div className="login2">
                                <InputItem onBlur={this.getPhone}
                                    placeholder="已注册的手机号"
                                >
                                    <div className="iconfont icon-ren" />
                                </InputItem>
                                <InputItem
                                    placeholder="动态密码"
                                >
                                    <div className="iconfont icon-mima" />
                                    <Button type="ghost" inline size="small" style={{ marginRight: '0.08rem' }} onClick={this.getCode}>{this.state.obj}</Button>
                                </InputItem>
                               
                                <WhiteSpace />
                                <p className="mima"><span>新用户注册</span><span>忘记密码？</span></p>
                                <div className="btn-container">
                                    <Button className="btn" type="primary" onClick={this.login1}>登录</Button>
                                </div>
                        </div>
                    }
                       
                        
                    </div>
                    <div id="bot">
                        <p>合作网站登录</p>
                        <ul>
                            <li> <img src="../../src/assets/img/login/login_ico4.png" alt="" /></li>
                            <li> <img src="../../src/assets/img/login/login_ico2.png" alt="" /></li>
                        </ul>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}