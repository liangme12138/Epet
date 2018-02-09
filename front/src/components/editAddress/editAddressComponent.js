import React from 'react'
import { connect } from 'react-redux';
import { List, InputItem, Picker, WhiteSpace, Switch,Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import * as editAction from '../address/addressAction'
import { district, provinceLite as province } from 'antd-mobile-demo-data';
import './editAddress.scss'
class Edit extends React.Component {
    state = {
        pickerValue: [],
        receiveId: this.props.params.rid,
        userId:this.props.params.uid,
        type:false
    };
    goBack = (e) => {
        this.props.router.goBack(-1);
    }
   
    componentWillMount(){
        if(this.state.receiveId){
            this.props.editAddress('address.php',{editId:this.state.receiveId}).then(res=>{
               this.setState({
                village: res[0].village.split(','),
                linkMan: res[0].linkMan,
                phone: res[0].phone,
                doorplate: res[0].doorplate,
                type: res[0].type
                })
            })
        }
    }
    save=(e)=>{
        if (this.state.receiveId){
        var arr = [{linkMan: this.state.linkMan }, {phone: this.state.phone }, { village: (this.state.village).toString() }, { doorplate: this.state.doorplate },{ type: this.state.type }];
                this.props.updataAddress('address.php', { data: JSON.stringify(arr), receiveId2: this.state.receiveId }).then(res=>{
                if(res==true){
                        Toast.success('修改成功!!!', 1,()=>{
                            this.props.router.goBack(-1);
                        }); 
                                
                }
                })
        }
        else if (this.state.userId){
            var ph = new RegExp(/^1[34578]\d{9}$/).test(this.state.phone);
            if (!ph) {
                Toast.info('请输入有效的电话号码！', 1);
                this.setState({ phone: '' });
            }
            var data= {userId:this.state.userId,linkMan: this.state.linkMan, phone: this.state.phone, village: (this.state.village).toString() ,  doorplate: this.state.doorplate ,  type: this.state.type };
            for (var key in data) {
                if (!data[key]) {
                    switch (key) {
                        case 'linkMan':
                            Toast.info('请填写收件人姓名！', 1);
                            this.setState({ linkMan: '' });
                            break;
                        case 'phone':
                            Toast.info('请填写联系电话！', 1);
                            this.setState({phone: '' });
                            break;
                        case 'village':
                            Toast.info('请选择地区！', 1);
                            this.setState({village: '' });
                            break;
                        case 'doorplate':
                            Toast.info('请填写详细地址信息！', 1);
                            this.setState({doorplate: '' });
                            break;
                    }
                    return;
                }
            }
            this.props.addAddress('address.php', { newdata:JSON.stringify(data)}).then(res => {
                if (res == true) {
                    Toast.success('添加成功!!!', 1, () => {
                        this.props.router.goBack(-1);
                    });
                }
            })
        }
       
    }
    render(){
        const { getFieldProps } = this.props.form;
        return(
           <div id="sm_edit">
                <header className="header">
                    <p><i className="iconfont icon-back" onClick={this.goBack}></i>地址编辑<span onClick={this.save}>保存</span><i className="iconfont icon-viewgallery"></i></p>
                </header>
                <div className="main">
                    <InputItem
                        clear
                        placeholder="请添加收件人"
                        value={this.state.linkMan}
                        onChange={v => this.setState({ linkMan: v })}
                        autoFocus
                    >收件人</InputItem>
                    <InputItem
                        clear
                        type="phone"
                        placeholder=""
                        value={this.state.phone}
                        onChange={v => this.setState({ phone: v.replace(/\s/g, "")})}
                        autoFocus
                    >手机号码</InputItem>
                    <Picker
                        data={district}
                        title="选择地区"
                        extra={this.state.village}
                        value={this.state.village}
                        onChange={v =>this.setState({village: v })}
                    >
                        <List.Item arrow="horizontal" >所在地区</List.Item>
                    </Picker>
                    <InputItem
                        clear
                        placeholder=""
                        value={this.state.doorplate}
                        onChange={v => this.setState({doorplate: v })}
                        autoFocus
                    >详细地址</InputItem>
                    <List.Item 
                        extra={<Switch
                            {...getFieldProps('Switch2', {
                                initialValue:this.state.type,
                                valuePropName: 'checked', 
                            }) }
                            onChange={v => this.setState({ type: v })}
                        />}
                    >设为默认地址</List.Item>
                </div>
           </div> 
        )
    }
}
const EditAddresssComponent= createForm()(Edit);
const getState = function (state) {
    return {
        status: state.addressReducer.status,
        type: state.addressReducer.type,
        date: state.addressReducer.editdate || [],
        updataDate: state.addressReducer.updataDate || [],
        addDate: state.addressReducer.addDate || [],
    }
}

export default connect(getState, editAction)(EditAddresssComponent);