import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';
import './ePetTopBar.scss';

// 潮品预售
export default class ePetTopBarComponent extends React.Component{
    state={

    }
    back(){
        window.history.back();
    }
    render() {
        return(
            <div className="ePetTopBar">
                <div className="titleTop">
                    <i className="iconfont icon-back titleTopLeft" onClick={this.back}></i>
                    <h2>潮品预售列表</h2>
                </div>
                <div className="ePetTopBar-main">
                    <div className="topBar">
                        <div className="topBar-img">
                            <img src={require('../../assets/img/navList/topbar1.png')} alt=""/>
                        </div>
                        <p>小蚁智家  宠物陪伴机器人 黄色 36.3*23.2*28.2cm</p>
                        <span >200万高清摄像头，APP远程遥控三段发球距离与奖励，语音互动随时随地陪伴爱宠。</span>
                        <div className="topBar-price">
                            ¥ <span className="topBar-priceNum">2999.00</span>
                            <a className="topBarBtn">
                                我要预定
                            </a>
                        </div>
                    </div>

                    <div className="topBar">
                        <div className="topBar-img">
                            <img src={require('../../assets/img/navList/topbar1.png')} alt="" />
                        </div>
                        <p>小蚁智家  宠物陪伴机器人 黄色 36.3*23.2*28.2cm</p>
                        <span >200万高清摄像头，APP远程遥控三段发球距离与奖励，语音互动随时随地陪伴爱宠。</span>
                        <div className="topBar-price">
                            ¥ <span className="topBar-priceNum">2999.00</span>
                            <a className="topBarBtn">
                                我要预定
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}