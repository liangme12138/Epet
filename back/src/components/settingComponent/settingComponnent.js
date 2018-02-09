import React from 'react';
import {connect} from 'react-redux';
import Datagrid from '../datagridComponent/datagridComponent';
import store from '../../store/configStore';
import * as datagridAction from '../../actions/datagridAction';
import "../../sass/settingComponnent.scss"
import '../../sass/titleTips.scss';
class SettingComponent extends React.Component {
    state = {
        data:{}
    }
    componentDidMount() {
        this.props.getData({
            status: 'page',
            position: window.sessionStorage.getItem('position'),
            username: window.sessionStorage.getItem('username'),
            url: 'staff.php'}),
        setTimeout(function(){
            this.setState({
                data: store.getState().Datagrid.moreData[0]
            })
        }.bind(this),1000)
    }
   
    render() {
        return (
            <div id="pet">
                <h2><span>商品管理</span> > 个人中心</h2>
                <div id="p1">
                    <p key={'p' + 1}><span>用户名：</span>{this.state.data.username}</p>
                    <p key={'p' + 2}><span>职位：</span>{this.state.data.position}</p>
                    <p key={'p' + 3}><span>注册时间：</span>{this.state.data.addTime}</p>
                </div>
            </div>
        )
    }
}
const mapToState = function(state){
    return {
        dataList: state.Datagrid.dataList ? state.Datagrid.dataList : []
    }
}
export default connect(mapToState, datagridAction)(SettingComponent);