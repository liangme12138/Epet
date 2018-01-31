import React from 'react';
import './publicMenu.scss'

export default class publicMenu extends React.Component{
    render(){
        return(
            <div>
            <ul className="menus_cen">
                    <li><i className="iconfont icon-fenlei"></i><span>首页</span></li>
                    <li><i className="iconfont icon-fenlei"></i><span>分类</span></li>
                    <li><i className="iconfont icon-fenlei"></i><span>购物车</span></li>
                    <li><i className="iconfont icon-fenlei"></i><span>我的萌宠</span></li>
                </ul>
            </div>
        )
    }
}