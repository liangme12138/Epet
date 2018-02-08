import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import './clothCity.scss';

export default class ClothCityComponent extends React.Component{
    state = {

    }

    componentDidMount() {

    }
    render() {
        return(
            <div className="clothCity">
                <div className="titleTop">
                    <i className="iconfont icon-back titleTopLeft" onClick={this.back}></i>
                    <h2>宠趣-服饰城</h2>
                </div>
                <div className="imgbox1">
                    <img src="../src/assets/img/navList/m1.jpg" />
                </div>
                <div className="clothCity-main">
                    <div className="imgbox2">
                        <img src="../src/assets/img/navList/m2.jpg"/>
                    </div>
                    <ul>
                        <li>
                            <img src="../src/assets/img/navList/cloth1.jpg" />
                            <p className="name">2017年新款 宠趣 印花不倒绒奶狗背心 蓝色兔子XXS号</p>
                            <span>￥5.00</span>
                            <p className="oriprice">原价：￥6.44</p>
                            <button>立即购买</button>
                        </li>
                        <li>


                        </li>
                        <li></li>
                        <li></li>
                    </ul>
                
                </div>

            </div>
        )
    }
}