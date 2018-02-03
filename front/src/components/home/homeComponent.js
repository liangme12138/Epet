import React from 'react';
import { Router, Route, Link, hashHistory,browserHistory, IndexRoute } from 'react-router';
import './home.scss';
import PublicMenu from '../publicMenu/publicMenuComponent';
import * as HomeAction from './homeAction';
import { connect } from 'react-redux';
class HomeComponent extends React.Component{
    ToComponent(event){
        // console.log(event.target.getAttribute('data-path'))
        if (event.target.tagName == 'LI'){
            $(event.target).closest('li').css({ 'border-bottom': '1px solid rgb(2, 105, 2)', color: 'rgb(2, 105, 2)' }).siblings('li').css({border:'none',color:'#333'})
        }
        var path =event.target.getAttribute('data-path')
        this.props.router.push(path)
    }
    focuse(){
        hashHistory.push('search')
        // this.props.route.push('search')
    }
    componentWillMount() {

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
                        <input type="text" placeholder="搜索类品、类目、关键字" className="search" onFocus={this.focuse}/>
                    </div>
                    <div className="top_right"><i className="iconfont icon-pingjia"></i></div>
                </div>
                <div className="home_Menus">
                    <ul onClick={this.ToComponent.bind(this)}>
                        <li data-path="/">首页</li>
                        <li data-path="/dogfoodindex">狗狗主粮</li>
                        <li data-path="/dogcostumeindex">服饰城</li>
                        <li>医疗保健</li>
                        <li>零食玩具</li>
                        <li>日用外出</li>
                        <li>美容香波</li>
                    </ul>
                </div>
                <div className="components">{this.props.children}</div>
                <PublicMenu/>
            </div>
        )
    }
}

const mapToState = function (state) {
    // console.log(state.MenuReducer.result)
    return {
        // AjaxMenutate: state.MenuReducer.status,
        // MenuDate: state.MenuReducer.result || []
    }
}

export default connect(mapToState, HomeAction)(HomeComponent);