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
            obj: "获取验证码",
            timer:''
        };
    }

    getUser=(e)=>{
        var phone = e.replace(/\s/g, "");
        if ($.trim(e) && new RegExp(/^1[34578]\d{9}$/).test(phone)){
            console.log(phone)
            this.props.checkPhone('login.php', { phone2: phone}).then(res=>{
                if(res==true){console.log(res)
                    Toast.info('该手机号已注册!!!', 1);
                    this.setState({phone: '' });  
                }
                else{
                    this.setState({ phone:phone});
                }
            })
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
            Toast.info('密码输入无效(8-20位字符)!!!', 1);
        }
       
    }
   
    clickCode=(e)=>{
        if (!this.state.phone) {
            Toast.info('请重输手机号', 1);
        }
        else{
            // 获取验证码
            var codes = this.randomNumber(999999, 100000);
            this.setState({ checkCode: codes });
            $.ajax({
                type: 'POST',
                url: baseUrl.Url + "smsyzm.php",
                data: { yzm: codes, yzmtel: $.trim(this.state.phone) },
                success: function (res) {
                    res = eval('(' + res + ')');
                    if (res.msg == "OK") {
                        Toast.info('已发送动态密码，请查看手机！', 1);
                        // 设置倒计时
                        clearInterval(this.state.timer);
                        this.state.timer= setInterval(() => {
                            this.setState({ count: this.state.count - 1 });
                            if (this.state.count <= 0) {
                                this.setState({ checkcode: '' });
                                clearInterval(this.state.timer);
                                this.setState({ obj: '获取验证码' });
                                return;
                            }
                            this.setState({ obj: this.state.count });
                        }, 1000)

                    }
                }.bind(this)
            })
        }

    }
    register=(e)=>{
        clearInterval(this.state.timer);
        if (this.state.code!= this.state.checkCode) {
            Toast.info('验证码错误！', 1);
        } 
        else if(this.state.phone && this.state.password){
            this.props.register('login.php', { phone3:this.state.phone, password3:this.state.password}).then(res=>{
                if(res==true){
                    Toast.success('注册成功!!!', 1);
                    this.props.router.push('login');
                }
            })
         }
        

    }
    goBack = (e) => {
        clearInterval(this.state.timer);
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
 