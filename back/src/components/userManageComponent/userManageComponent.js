import React from 'react';
import Datagrid from '../datagridComponent/datagridComponent';
import '../../sass/titleTips.scss';
export default class UserManage extends React.Component{
    render(){
        return (
            <div id="userManage">
                <h2><span>用户管理</span> > 用户信息</h2>
                <Datagrid iCurShow="viewUser" url='userManage.php' />
            </div>
        )
    }
}