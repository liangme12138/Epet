import React from 'react'
// import { connect } from 'react-redux';
import { List, InputItem, Picker, WhiteSpace, Switch } from 'antd-mobile';
import { createForm } from 'rc-form';
import { district, provinceLite as province } from 'antd-mobile-demo-data';
import './editAddress.scss'
class Edit extends React.Component {
    state = {
        pickerValue: []
    };
    goBack = (e) => {
        this.props.router.goBack(-1);
    }
    render(){
        const { getFieldProps } = this.props.form;
        return(
           <div id="sm_edit">
                <header className="header">
                    <p><i className="iconfont icon-back" onClick={this.goBack}></i>地址编辑<span>保存</span><i className="iconfont icon-viewgallery"></i></p>
                </header>
                <div className="main">
                    <InputItem
                        clear
                        placeholder=""
                        autoFocus
                    >收件人</InputItem>
                    <InputItem
                        clear
                        placeholder=""
                        autoFocus
                    >手机号码</InputItem>
                    <Picker
                        data={district}
                        title="选择地区"
                        extra=""
                        value={this.state.pickerValue}
                        onChange={v => this.setState({ pickerValue: v })}
                    >
                        <List.Item arrow="horizontal">所在地区</List.Item>
                    </Picker>
                    <InputItem
                        clear
                        placeholder=""
                        autoFocus
                    >详细地址</InputItem>
                    <List.Item
                        extra={<Switch
                            {...getFieldProps('Switch2', {
                                initialValue: false,
                                valuePropName: 'checked',
                            }) }
                        />}
                    >设为默认地址</List.Item>
                </div>
           </div> 
        )
    }
}
const EditAddresssComponent= createForm()(Edit);
export default EditAddresssComponent