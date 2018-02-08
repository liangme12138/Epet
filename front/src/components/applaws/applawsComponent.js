import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import './applaws.scss';
export default class ApplawsComponent extends React.Component{
    state = {

    }
    componentDidMount() {

    }
    back(){
        window.history.back()
    }

    render(){
        return(
            <div className="applaws">
                <div className="titleTop">
                    <i className="iconfont icon-back titleTopLeft" onClick={this.back}></i>
                    <h2>爱普士狗站妙餐包买赠活动</h2>
                </div>
                <div className="fullcuttop">
                    <div className="full1">
                        <img src="../src/assets/img/navList/nav3-1.jpg" />
                    </div>
                    <div className="full2">
                        <img src="../src/assets/img/navList/nav3-2.jpg" />
                    </div>
                    <div className="full3">
                        <img src="../src/assets/img/navList/nav3-3.jpg" />
                    </div>
                    <div className="full4">
                        <img src="../src/assets/img/navList/nav3-4.jpg" />
                    </div>
                    <div className="full5">
                        <img src="../src/assets/img/navList/nav3-5.jpg" />
                    </div>
                    <div className="full6">
                        <img src="../src/assets/img/navList/nav3-6.jpg" />
                    </div>
                    <div className="full7">
                        <img src="../src/assets/img/navList/nav3-7.jpg" />
                    </div>
                    <div className="full8">
                        <img src="../src/assets/img/navList/nav3-8.jpg" />
                        <p className="title">泰国进口爱普士Applaws 鸡肉＋牛肉＋玉米＋西兰花 犬用妙餐包 150g </p>
                        <p className="all">
                            <span>￥0.00</span>
                            <span>原价：￥17.00</span>
                        </p>
                        <button>
                            加入购物车
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}