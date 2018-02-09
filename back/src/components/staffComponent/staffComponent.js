import React from 'react';
import { hashHistory } from 'react-router';
import {message} from 'antd';
import Datagrid from '../datagridComponent/datagridComponent';
import '../../sass/titleTips.scss';
export default class StaffComponent extends React.Component {
    warning = () => {
        message.warning(
            '亲爱的' + window.sessionStorage.getItem('username') + '! 你没有权限进入员工管理！'
        );
    };
    
    componentDidMount(){
        if (window.sessionStorage.getItem('position') != "管理员"){
            this.warning('warning');
            hashHistory.push("/index");
        }
    }
    render() {
        return (
            <div id="pet">
                <h2><span>商品管理</span> > 员工信息</h2>
                <Datagrid iCurShow="staff" url='staff.php' />
            </div>
        )
    }
}