import React from 'react';
import Datagrid from '../datagridComponent/datagridComponent';
import '../../sass/titleTips.scss';
export default class PetComponent extends React.Component{
    render(){
        return (
            <div id="pet">
                <h2><span>商品管理</span> > 宠物信息</h2>
                <Datagrid iCurShow="pet" url='petBack.php' />
            </div>
        )
    }
}