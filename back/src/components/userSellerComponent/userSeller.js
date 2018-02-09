import React from 'react';
import Datagrid from '../datagridComponent/datagridComponent';
import '../../sass/titleTips.scss';

export default class UserSeller extends React.Component {
    render(){
        return (
            <div id="userSeller">
                <h2><span>订单管理</span> > 用户交易订单</h2>
                <Datagrid iCurShow="viewOrder" url='sellerOrder.php' />
            </div>
        )
    }
}