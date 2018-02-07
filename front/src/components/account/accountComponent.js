import React from 'react'
// import { connect } from 'react-redux';
import { List, InputItem, WhiteSpace, Button, Picker } from 'antd-mobile';
import { createForm } from 'rc-form';
// import { district, provinceLite as province } from 'antd-mobile-demo-data';
import './account.scss'
const gender = [{ label: "男", value:"男"},{label:"女",value:"女"}]
const animal = [{ label: "哈士奇", value: "哈士奇" }, { label: "藏獒", value: "藏獒" }, { label: "贵宾犬", value: "贵宾犬" }, { label: "松狮", value: "松狮" }, { label: "边境牧羊犬", value: "边境牧羊犬" }, { label: "吉娃娃", value: "吉娃娃" }, { label: "秋田犬", value: "秋田犬" }, { label: "博美犬", value: "博美犬" }, { label: "蝴蝶犬", value: "蝴蝶犬" }, { label: "法国斗牛犬", value: "法国斗牛犬" }, { label: "萨摩耶犬", value: "萨摩耶犬" }, { label: "巴哥犬", value: "巴哥犬" }, { label: "西高地白梗", value: "西高地白梗" }, { label: "卷毛比雄犬", value: "卷毛比雄犬" }, { label: "纽芬兰犬", value: "纽芬兰犬" }, { label: "阿拉斯加雪橇犬", value: "阿拉斯加雪橇犬" }]
class Account extends React.Component {
    state = {
        data: [],
        cols: 1,
        pickerValue: [],
        asyncValue: []

    };
   goBack=(e)=>{
       this.props.router.goBack(-1);
   }
   skipAddress=(e)=>{
       this.props.router.push('address');
   }
    render(){
        const { getFieldProps } = this.props.form;
        return (
            <div id="sm_account">
                <header className="header">
                    <p><i className="iconfont icon-back" onClick={this.goBack}></i>账户管理<i className="iconfont icon-viewgallery"></i></p>
                </header>
                <main className="main">
                    <div className="headImgs am-list-item am-input-item am-list-item-middle">
                        <p>头像</p>
                        <div className="headimg"><img src="../../src/assets/img/login/1.jpg" alt="" /></div>
                    </div>
                    <InputItem
                        clear
                        placeholder="请输入昵称"
                        autoFocus >
                   昵称
                    </InputItem>
                    <InputItem
                        clear
                        placeholder="请输入姓名"
                        autoFocus
                    >姓名</InputItem>
                    <Picker data={gender} cols={1} {...getFieldProps('district3') } className="forss">
                        <List.Item arrow="horizontal">性别
                        </List.Item>  
                    </Picker>
                    <Picker data={animal} cols={1} {...getFieldProps('district3') } className="forss">
                         <List.Item arrow="horizontal">你的宠物</List.Item>
                    </Picker>      
                    <List.Item arrow="horizontal" onClick={this.skipAddress}>地址管理</List.Item>    
                </main>
                <div className="btn-container">
                    <Button className="btn" type="primary" >保存</Button>
                </div>
            </div>
        )
    }
}
const Accounts = createForm()(Account);
export default Accounts