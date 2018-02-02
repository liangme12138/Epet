import React from 'react';
import ReactDOM from 'react-dom'
import {connect} from 'react-redux';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router'
import * as goodsListActions from '../goodList/goodsListAction'
import { Button } from 'antd-mobile';
import "../goodList/goodsList.scss"
// import '../../sass/iconfont.css';
import PublicMenu from '../publicMenu/publicMenuComponent'
import spinner from '../spinner/spinner'
// const { Header, Footer, Content } = Layout;
import { Toast} from 'antd-mobile';
class goodsListComponent extends React.Component{
    componentDidMount(){
        //显示loading
        // spinner.loadSpinner();
        //隐藏loading
        // spinner.closeSpinner();
    }
    
    render(){
      
        return (
            <div>  
                <Button className="btn" type="primary">primary 按钮</Button>
                <i className="iconfont icon-fangzi01-copy"></i>
                <p>haha</p>
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

//controller => c

//connect => state and action 
//自动调用 reducer
//自动凋用了 setState
export default connect(mapToState, goodsListActions)(goodsListComponent)