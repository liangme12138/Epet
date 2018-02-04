import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';
import './ePetMarking.scss';

// 清仓特价
export default class ePetMarkingComponent extends React.Component{
    state={

    }
    back() {
        window.history.back();
    }
    render() {
        return(
            <div className="ePetMarking">
                <div className="titleTop">
                    <i className="iconfont icon-back titleTopLeft" onClick={this.back}></i>
                    <h2>清仓特价</h2>
                </div>
                <div className="sortBox">
                    <ul>
                        <li>折扣
                            <i></i>
                            <i></i>
                        </li>
                        <li>价格
                            <i></i>
                            <i></i>
                        </li>
                    </ul>
                </div>
                <div className="ePetMarking-main">
                    <div className="ePetMarking-list">
                        <p className="ePetMarking-title">
                            <span className="t1">我不完美</span>
                            <span className="t2">有使用痕迹</span>
                            <span className="discount">6折</span>
                        </p>
                        <div className="ePetMarking-details">
                            <div className="epetmarkingImg">
                                <img src={require('../../assets/img/navList/epetMark1.jpg')} alt=""/>
                            </div>
                            <p className="ePetMarking-name">美国原装进口RW拉夫威尔   雪穴防寒服 暮光灰 XXS XXS</p>
                            <p className="epetmarkingPrice">
                                <span className="price-cur">
                                    260.00
                                </span>
                                <span className="price-ori">
                                    366.00
                                </span>
                            </p>
                            <i className="to-cart iconfont icon-cart">
                                
                            </i>    
                        </div>
                    </div>
                </div>

                <div className="ePetMarking-main">
                    <div className="ePetMarking-list">
                        <p className="ePetMarking-title">
                            <span className="t1">我不完美</span>
                            <span className="t2">有使用痕迹</span>
                            <span className="discount">6折</span>
                        </p>
                        <div className="ePetMarking-details">
                            <div className="epetmarkingImg">
                                <img src={require('../../assets/img/navList/epetMark1.jpg')} alt="" />
                            </div>
                            <p className="ePetMarking-name">美国原装进口RW拉夫威尔   雪穴防寒服 暮光灰 XXS XXS</p>
                            <p className="epetmarkingPrice">
                                <span className="price-cur">
                                    260.00
                                </span>
                                <span className="price-ori">
                                    366.00
                                </span>
                            </p>
                            <i className="to-cart iconfont icon-cart">

                            </i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}