import React from 'react'
import Datagrid from '../datagridComponent/datagridComponent';
import '../../sass/titleTips.scss';
export default class selfOrderComponent extends React.Component {
    render(){
        return (
            <div id="selfOrder">
                <h2><span>订单管理</span> > 自营商品订单</h2>
                <Datagrid iCurShow="viewOrder" url='buyerOrder.php' />
            </div>
        )
    }
}