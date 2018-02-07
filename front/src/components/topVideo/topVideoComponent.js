import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';
import './topVideo.scss';

export default class TopVideoComponent extends React.Component{

    componentDidMount(){

    }
    render(){
        return(
            <div className="topVideo">
                <div className="titleTop">
                    <i className="iconfont icon-back titleTopLeft" onClick={this.back}></i>
                    <h2>钢骨 金钢级磨牙棒 非一般的硬</h2>
                </div>
                <div className="topVideo-main">
                    <div className="topVideo-play">
                        <img src={require('../../assets/img/navList/topvideo.jpg')}/>
                    </div>
                    <div className="topVideo-goods">
                        <ul>
                            <li>
                                <img src={require('../../assets/img/navList/topvideo1.jpg')}/>
                                <h4>钢骨 金钢级H型陪伴零食 牛肉味S号 46g</h4>
                                <p className="rel">真正的『硬货』来了</p>
                                <p className="topvideoprice">
                                    <span>￥</span>
                                    <span className="price">111</span>
                                    <span className="cart iconfont icon-cart" >

                                    </span>
                                </p>
                            </li>

                            <li>
                                <img src={require('../../assets/img/navList/topvideo1.jpg')} />
                                <h4>钢骨 金钢级H型陪伴零食 牛肉味S号 46g</h4>
                                <p className="rel">真正的『硬货』来了</p>
                                <p className="topvideoprice">
                                    <span>￥</span>
                                    <span className="price">111</span>
                                    <span className="cart iconfont icon-cart" ></span>
                                </p>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            
            </div>
        )
    }
}