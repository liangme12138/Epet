import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router'

import "../goodList/goodsList.scss"
import PublicMenu from '../publicMenu/publicMenuComponent'

export default class GoodsListComponent extends React.Component{
    componentDidMount(){
        if (this.props.children.props.route.path){
            if (this.props.children.props.route.path == '/brand'){
                $('header span').removeClass();
                $('header span').eq(1).toggleClass('active');
            }
        }
    }
    check(event){
        if(event.target.tagName == "SPAN"){
            $('header span').removeClass();
            event.target.classList.toggle('active');
            if (event.target.innerHTML == "分类"){
                this.props.router.push('category');
            } else if (event.target.innerHTML == "品牌"){
                this.props.router.push('brand');
            }
        } else if (event.target.tagName == "I"){
            this.props.router.push('search');
        }
    }
    render(){
        return (
            <div id="goodslist">  
                <header onClick={this.check.bind(this)}>
                    <div>
                        <span className="active">分类</span>
                    </div>
                    <div>
                        <span>品牌</span>
                    </div>
                    <i className="iconfont icon-sousuo"></i>
                </header>
                <div className="mainGoods">{this.props.children}</div>
                <div className="footer">
                    <PublicMenu></PublicMenu>
                </div>
            </div>
        )
    }
}
