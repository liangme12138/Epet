import React from 'react'
// import { connect } from 'react-redux';
import './collect.scss'
export default class Collect extends React.Component {
    changeTab=(e)=>{
        var tab =e.target.tagName.toLowerCase();
        if(tab=='span'){
            $(e.target).addClass('active').parent('li').siblings('li').find('span').removeClass('active');
        }
    }
    goBack = (e) => {
        this.props.router.goBack(-1);
    }
    render(){
        return(
             <div id="sm_collect">
                 <header className="header">
                    <p><i className="iconfont icon-back" onClick={this.goBack}></i>我的收藏<i className="iconfont icon-viewgallery"></i></p>
                </header>
                <ul className="nav" onClick={this.changeTab}>
                    <li><span className="active">新品</span></li>
                    <li><span>新宠课堂</span></li>
                </ul>
                <ul className="main"></ul>
             </div>
        )   
    }
}