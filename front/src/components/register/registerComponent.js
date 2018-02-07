import React from 'react'
import { connect } from 'react-redux';
import * as registerAction from './registerAction'
import baseUrl from '../../utils/baseUrl'
import { List, InputItem, WhiteSpace, Button, Toast} from 'antd-mobile';
import './register.scss'
class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkCode:'',
            count: 80,
            obj: "获取验证码"
        };
    }
    componentDidUpdate() {     
        if (this.props.type =='phoneRequested' && this.props.datas==true) {
            Toast.info('该手机号已注册!!!', 1);
        }
        else if (this.props.type =='registerRequested' && this.props.datas){
            Toast.success('注册成功!!!', 1);
            this.props.router.push('login');
        }
    }

    getUser=(e)=>{
        var phone = e.replace(/\s/g, "");
        if ($.trim(e) && new RegExp(/^1[34578]\d{9}$/).test(phone)){
            this.setState({ phone: e });
            this.props.checkPhone('login.php', { phone2: phone})
        }
        else{
            Toast.info('该手机号无效!!!', 1); 
        }
        

    }
    randomNumber(min, max) {
        return parseInt(Math.random() * (max - min + 1) + min);
    }
    getCode=(e)=>{
        this.setState({code: $.trim(e)});
    }
    getPwd = (e) => {
        if ($.trim(e) && new RegExp(/^[^\s]{7,19}$/).test(e)){
            this.setState({ password: e });
        }
        else {
            Toast.info('密码输入无效!!!', 1);
        }
       
    }
   
    clickCode=(e)=>{
        // 获取验证码
        var codes = this.randomNumber(999999, 100000);
        this.setState({checkCode: codes });
        $.ajax({
            type: 'POST',
            url: baseUrl.Url + "smsyzm.php",
            data: { yzm: codes, yzmtel: $.trim(this.state.phone)},
            success: function (res) {
                res = eval('(' + res + ')');
                if (res.msg == "OK") {
                    Toast.info('已发送动态密码，请查看手机！', 1);
                    // 设置倒计时
                    // var timer = setInterval(() => {
                    //     this.setState({ count: this.state.count - 1 });
                    //     if (this.state.count <= 0) {
                    //         clearInterval(timer);
                    //         this.setState({ obj: '获取验证码' });
                    //         return;
                    //     }
                    //     this.setState({ obj: this.state.count });
                    // }, 1000)

                }
            }.bind(this)
        })
    }
    register=(e)=>{
        if (this.state.code!= this.state.checkCode) {
            console.log(this.state.code, this.state.checkCode)
            Toast.info('验证码错误！', 1);
        }
        
        else if(this.state.phone &&this.state.password){
            this.props.register('login.php', { phone3:this.state.phone, password3:this.state.password})
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
                        type="phone" 
                        placeholder="手机号码"
                        clear
                    >
                        <div className="iconfont icon-ren" />
                    </InputItem>
                    <InputItem onBlur={this.getCode}
                        placeholder="请输入验证码"
                    >
                        <div className="iconfont icon-mima" />
                        <Button type="ghost" inline size="small" style={{ marginRight: '0.08rem' }} onClick={this.clickCode}>{this.state.obj}</Button>
                    </InputItem>
                    <InputItem onBlur={this.getPwd}
                        type="password"
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
    return {
        status: state.registerReducer.status,
        datas: state.registerReducer.result || [],
        type: state.registerReducer.type
    }
}
export default connect(mapToState, registerAction)(Register)
 