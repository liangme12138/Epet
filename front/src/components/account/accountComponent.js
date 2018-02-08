import React from 'react'
import { connect } from 'react-redux';
import * as accountAction from './accountAction.js'
import { List, InputItem, WhiteSpace, Button, Picker,Toast } from 'antd-mobile';
import { district, provinceLite as province } from 'antd-mobile-demo-data';
import spinner from '../spinner/spinner'
import { createForm } from 'rc-form';
import baseurl from '../../utils/baseUrl'
import '../../utils/jquery.form'
import './account.scss'
const gender = [{ label: "男", value:"男"},{label:"女",value:"女"}]
const animal = [{ label: "哈士奇", value: "哈士奇" }, { label: "藏獒", value: "藏獒" }, { label: "贵宾犬", value: "贵宾犬" }, { label: "松狮", value: "松狮" }, { label: "边境牧羊犬", value: "边境牧羊犬" }, { label: "吉娃娃", value: "吉娃娃" }, { label: "秋田犬", value: "秋田犬" }, { label: "博美犬", value: "博美犬" }, { label: "蝴蝶犬", value: "蝴蝶犬" }, { label: "法国斗牛犬", value: "法国斗牛犬" }, { label: "萨摩耶犬", value: "萨摩耶犬" }, { label: "巴哥犬", value: "巴哥犬" }, { label: "西高地白梗", value: "西高地白梗" }, { label: "卷毛比雄犬", value: "卷毛比雄犬" }, { label: "纽芬兰犬", value: "纽芬兰犬" }, { label: "阿拉斯加雪橇犬", value: "阿拉斯加雪橇犬" }]
class Account extends React.Component {
    state = {
        userInfo: JSON.parse(window.localStorage.getItem('userInfo'))||[],
        headImg: '../../src/assets/img/headImg/1.jpg'
    };
    componentWillMount(){
        if (this.state.userInfo.length>0){
            this.setState({
                // 获取用户（对象）
                userId: this.state.userInfo[0].userId,
                gender: this.state.userInfo[0].gender,
                pet: this.state.userInfo[0].pet,
                nickName: this.state.userInfo[0].nickName,
                userName: this.state.userInfo[0].userName,
                headImg: this.state.userInfo[0].headeImg || '../../src/assets/img/headImg/1.jpg'           
             });
        }
       
    }
    changeImg=(e)=>{
        if (document.querySelector("input[type=file]").files.length) {
            spinner.loadSpinner();
            $(".headImgs").ajaxSubmit({
                type: 'post',
                url: baseurl.Url + 'headimg.php',
                success: function (data) {
                    spinner.closeSpinner();
                    data = JSON.parse(data);
                    var imgUrl = "../../src/assets/img/headImg/" + data.fileName;
                    this.setState({ headImg: imgUrl});
                    this.props.changeImg('setting.php',{headImg:imgUrl});            
                }.bind(this)
            })
            
        }
    }
    save= (e) =>{
        var arr=[{userName:this.state.userName},{nickName:this.state.nickName},{gender:this.state.gender},{pet:this.state.pet},{headeImg:this.state.headImg}];
        this.props.upData('setting.php',{data:JSON.stringify(arr),userId:this.state.userId}).then(res=>{
            if(res==true){
                Toast.success('保存成功！', 1);
                this.props.router.push('mine');
            }
            else{
                Toast.fail('保存失败！', 1);
            }
        })
    }
    goBack=(e)=>{
       this.props.router.push('mine');
   }
   skipAddress=(e)=>{
       this.props.router.push('address');
   }
    render(){
        if(!this.state.userInfo){
            return false;
        }
        const { getFieldProps } = this.props.form;
        return (
            <div id="sm_account">
                <header className="header">
                    <p><i className="iconfont icon-back" onClick={this.goBack}></i>账户管理<i className="iconfont icon-viewgallery"></i></p>
                </header>
                <main className="main">
                    <form className="headImgs am-list-item am-input-item am-list-item-middle">
                        <p>头像</p>
                        <input type="file" id="files" name="file" onChange={this.changeImg}/>
                        <div className="headimg"><img src={this.state.headImg} alt="" /></div>
                    </form>
                    <InputItem
                        clear
                        placeholder="请输入昵称"
                        autoFocus 
                        value={this.state.nickName}
                        onChange={v => this.setState({ nickName: v })}
                        >
                   昵称
                    </InputItem>
                    <InputItem
                        clear
                        placeholder="请输入姓名"
                        value={this.state.userName}
                        onChange={v => this.setState({ userName: v })}
                        autoFocus
                    >姓名</InputItem>
                    <Picker data={gender} cols={1} extra={this.state.gender} onChange={v => this.setState({ gender: v.toString() })}>
                        <List.Item arrow="horizontal" >性别</List.Item>        
                    </Picker>
                    <Picker data={animal} cols={1} extra={this.state.pet} onChange={v => this.setState({ pet: v.toString() })} >
                        <List.Item arrow="horizontal">你的宠物</List.Item>
                    </Picker>      
                    <List.Item arrow="horizontal" onClick={this.skipAddress}>地址管理</List.Item>    
                </main>
                <div className="btn-container">
                    <Button className="btn" type="primary" onClick={this.save}>保存</Button>
                </div>
            </div>
        )
    }
}
const Accounts = createForm()(Account);
const getState = function (state) {
    return {
        status: state.accountReducer.status,
        type: state.accountReducer.type,
        date: state.accountReducer.result || []
    }
}

export default connect(getState, accountAction)(Accounts);