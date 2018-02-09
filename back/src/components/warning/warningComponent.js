import React from 'react';
import Datagrid from '../datagridComponent/datagridComponent';
import '../../sass/titleTips.scss';
export default class WarningComponent extends React.Component {
    render() {
        return (
            <div id="pet">
                <h2><span>商品管理</span> > 库存预警</h2>
                <Datagrid iCurShow="proprietary" url='proprietary.php' warning="1" />
            </div>
        )
    }
}