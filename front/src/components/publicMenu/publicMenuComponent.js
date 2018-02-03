import React from 'react';
import { Link } from 'react-router';
import './publicMenu.scss'

export default class publicMenu extends React.Component{
    render(){
        return(
            // <div className="publicMenu">
                <ul className="menus_cen">
                    <li><Link to="/"><i className="iconfont icon-dianpu-xianxing"></i><span>首页</span></Link></li>
                    <li><Link to="category"><i className="iconfont icon-fenlei"></i><span>分类</span></Link></li>
                    <li><Link to="cart"><i className="iconfont icon-cart"></i><span>购物车</span></Link></li>
                    <li><Link to="mine"><i className="iconfont icon-toys"></i><span>我的萌宠</span></Link></li>
                </ul>
            // </div>
        )
    }
}