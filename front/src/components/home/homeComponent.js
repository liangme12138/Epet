import React from 'react';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import './home.scss';
export default class homeComponent extends React.Component{
    ToComponent(event){
        console.log(666);
        if (event.target.tagName == 'LI'){
            $(event.target).css({ 'border-bottom': '1px solid rgb(2, 105, 2)', color:'rgb(2, 105, 2)'}).siblings('li').css({border:'none',color:'#333'})
        }
    }
    render(){
        return (
            <div className="home">
                <div className="top_home">
                    <div className="top_left">
                        <span>北京</span>
                        <i className="iconfont icon-moreunfold"></i>
                    </div>
                    <div className="top_center">
                        <i className="iconfont icon-icon-test2"></i>
                        <input type="text" placeholder="搜索类品、类目、关键字" ref="searchName" />
                    </div>
                    <div className="top_right"><i className="iconfont icon-pingjia"></i></div>
                </div>
                <div className="home_Menus">
                    <ul onClick={this.ToComponent}>
                        <li>首页</li>
                        <li>狗狗主梁</li>
                        <li>服饰城</li>
                        <li>医疗保健</li>
                        <li>零食玩具</li>
                        <li>日用外出</li>
                        <li>美容香波</li>
                    </ul>
                </div>
            </div>
        )
    }
}