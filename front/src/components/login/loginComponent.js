import React from 'react'
import { connect } from 'react-redux';
import * as loginAction from './loginAction'
import { List, InputItem, WhiteSpace, Button, Toast } from 'antd-mobile';
import baseUrl from '../../utils/baseUrl'
import './login.scss'
class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            show:true,
            count:80,
            obj:"获取动态密码",
            timer:'',
        };
    }
    changeTab=(e)=>{
        const tab=e.target.className;
        if(tab=="tab1"){
            $(e.target).children().addClass('active1').parent('li').siblings('li').children().removeClass('active1');
            this.setState({show:true});
        }
        else if(tab=="tab2"){
            $(e.target).children().addClass('active1').parent('li').siblings('li').children().removeClass('active1');
            this.setState({ show: false });
        }
    }

    getUser=(e)=>{
        var phone = e.replace(/\s/g, "");
        if ($.trim(e) && new RegExp(/^1[34578]\d{9}$/).test(phone)) {
            this.props.checkPhone('login.php', { phone2: phone }).then(res => {
                if (res ==false) {
                    Toast.info('该手机号尚未注册，请前往注册', 1);
                    this.setState({ user: '' });
                }
                else {
                    this.setState({user: phone });
                }
            })
        }
        else {
            Toast.info('该手机号无效!!!', 1);
        } 
    }
    getPwd=(e)=>{
        this.setState({ pwd:e}); 
    }
    getPhone=(e)=>{
        if($.trim(e)){
            var phone = e.replace(/\s/g, "");
            var ph = new RegExp(/^1[34578]\d{9}$/).test(phone);
            if (!ph) {
                Toast.info('该手机号无效!!!', 1);
                this.setState({ phone: '' });
            }
            this.props.checkPhone("login.php", { phone2:phone}).then(res=>{
                if(res==false){
                    Toast.info('该手机号尚未注册，请前往注册', 1);
                    this.setState({ phone:''});
                }
                this.setState({ phone:phone});
            }); 
        }
    }
    login1=(e)=>{
        if(!$.trim(this.state.user) || !$.trim(this.state.pwd)){
            Toast.info('手机号或密码不能为空!!!', 1);
        }
        else if ($.trim(this.state.user) && $.trim(this.state.pwd)) {
            this.props.login("login.php", { phone: this.state.user, password: this.state.pwd }).then(res=>{
                if(res.length>0){
                    var str = JSON.stringify(this.props.data);
                    window.localStorage.setItem('userInfo', str);
                    Toast.success('登录成功!!!', 1);
                    this.props.router.push("/");
                }
                else{
                    Toast.info('手机号或密码错误！', 1);
                }
            });
        }
    
    }
   
    randomNumber(min, max) {
        return parseInt(Math.random() * (max - min + 1) + min);
    }
    getCode=(e)=>{
        if (!this.state.phone) {
            Toast.info('请重输手机号', 1);
        }
        else{
            var codes = this.randomNumber(999999, 100000);
            this.setState({ checkcode: codes });
            $.ajax({
                type: 'POST',
                url: baseUrl.Url + "smsyzm.php",
                data: { yzm: codes, yzmtel: this.state.phone },
                success: function (res) {
                    res = eval('(' + res + ')');
                    if (res.msg == "OK") {
                        Toast.info('已发送动态密码，请查看手机！', 1);
                        // 设置倒计时
                        clearInterval(this.state.timer);
                        this.state.timer = setInterval(() => {
                            this.setState({ count: this.state.count - 1 });
                            if (this.state.count <= 0) {
                                this.setState({checkcode:''});
                                clearInterval(this.state.timer);
                                this.setState({ obj: '获取动态密码' });
                                return;
                            }
                            this.setState({ obj: this.state.count });
                        }, 1000)

                    }
                }.bind(this)
            })

        }
       
       
    }
    code=(e)=>{
        var code=$.trim(e);
        this.setState({code:e});
    }
    login2 = (e) => { 
        clearInterval(this.state.timer);
        if(this.state.code==this.state.checkcode){
            this.props.login("login.php", { phone4:this.state.phone}).then(res => {
                if (res.length>0) {
                    var str = JSON.stringify(this.props.data);
                    window.localStorage.setItem('userInfo', str);
                    Toast.success('登录成功!!!', 1);
                    this.props.router.push("/");
                }
                else{
                    Toast.fail('登录失败，请重新登录！', 1);
                }
            })
        }
        else{
            Toast.info('动态密码验证输入错误', 1);
        }
    }
    goBack=(e)=>{
        this.props.router.goBack(-1);
        // this.props.router.push("/");
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
                        <li className="tab1">普通登录<i className="active1"></i></li>
                        <li className="tab2">手机动态密码登录<i></i></li>
                    </ul>
                    <div id="main">
                    {this.state.show? <div className="login1">
                            <InputItem onBlur={this.getUser} 
                                type="phone"                         
                                placeholder="手机号/邮箱/用户名"
                                clear
                                autoFocus
                            >
                                <div className="iconfont icon-ren"/>
                            </InputItem>
                            <InputItem onBlur={this.getPwd}
                                type="password"
                                placeholder="输入密码"
                            >
                                <div className="iconfont icon-mima"/>
                            </InputItem>
                            <WhiteSpace />
                            <p className="mima"><span>新用户注册</span><span>忘记密码？</span></p>  
                            <div className="btn-container" >
                                <Button className="btn" type="primary" onClick={this.login1}>登录</Button>
                            </div>
                        </div>:<div className="login2">
                                <InputItem onBlur={this.getPhone}
                                    clear
                                    type="phone" 
                                    placeholder="已注册的手机号"
                                >
                                    <div className="iconfont icon-ren" />
                                </InputItem>
                                <InputItem onBlur={this.code}
                                    clear
                                    placeholder="动态密码"
                                >
                                    <div className="iconfont icon-mima" />
                                    <Button type="ghost" inline size="small" style={{ marginRight: '0.08rem' }} onClick={this.getCode}>{this.state.obj}</Button>
                                </InputItem>
                               
                                <WhiteSpace />
                                <p className="mima"><span>新用户注册</span><span>忘记密码？</span></p>
                                <div className="btn-container">
                                    <Button className="btn" type="primary" onClick={this.login2}>登录</Button>
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
const mapToState = function (state) {
    return {
        data: state.loginReducer.result || [],
        type: state.loginReducer.type
    }
}
export default connect(mapToState, loginAction)(Login)