import React from 'react';
import Datagrid from '../datagridComponent/datagridComponent';
import {hashHistory} from 'react-router';
import '../../sass/titleTips.scss';
export default class ProprietaryComponent extends React.Component{
    render(){
        return (
            <div id="proprietary">
                <h2><span>商品管理</span> > 周边产品</h2>
                <Datagrid iCurShow="proprietary" url='proprietary.php' />
            </div>
        )
    }
}