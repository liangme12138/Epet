import React from 'react';
import ReactDOM from 'react-dom'
import {connect} from 'react-redux';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router'
import * as goodsListActions from '../goodList/goodsListAction'
import "../goodList/goodsList.scss"
import PublicMenu from '../publicMenu/publicMenuComponent'
import spinner from '../spinner/spinner'
import { Toast} from 'antd-mobile';

class GoodsListComponent extends React.Component{
    componentWillMount(){
        //显示loading
        spinner.loadSpinner();
        

    }
    
    check(event){
        if(event.target.tagName == "SPAN"){
            $('header span').removeClass();
            event.target.classList.toggle('active');
        } else if (event.target.tagName == "I"){
            this.props.router.push('/search');
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
                <PublicMenu></PublicMenu>
            </div>
        )
    }
}

//DataModel => m
const mapToState = function(state){
    return {
        
    }
}

export default connect(mapToState, goodsListActions)(GoodsListComponent)