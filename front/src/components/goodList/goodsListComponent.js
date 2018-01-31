import React from 'react';
import ReactDOM from 'react-dom'
import {connect} from 'react-redux';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router'
import * as goodsListActions from '../goodList/goodsListAction'
import { Button } from 'antd-mobile';
import "../goodList/goodsList.scss"

// const { Header, Footer, Content } = Layout;
class goodsListComponent extends React.Component{
    componentDidMount(){
      
    }
    
    render(){
      
        return (
    <div>
                <Button className="btn" type="primary">primary 按钮</Button>
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