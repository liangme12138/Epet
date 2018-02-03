import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import * as brandSaleActions from './brandSaleAction';
import '../../sass/iconfont.css';
import './brandSale.scss';

export default class BrandSaleComponent extends React.Component{
    componentDidMount() {

    }

    render() {
        return(
            <div className="brandSale">
                <div className="titleTop">
                    <i className="iconfont icon-back titleTopLeft"></i>
                    <h2>品牌特卖</h2>
                    <i className="iconfont icon-close titleTopClose"></i>
                </div>
                <div className="titleMain">
                    <div className="titlePicture">
                        <img src={require('../../assets/img/navList/brandsale.jpg')} />
                    </div>
                    <div className="title-nav">
                        <ul>
                            <li>
                                <i>
                                    <img src={require('../../assets/img/navList/icon1_active.png')}/>
                                </i>
                                主粮零食
                            </li>
                            <li>
                                <i>
                                    <img src={require('')}/>
                                </i>
                                医疗保健
                            </li>
                            <li>
                                <i></i>
                                玩具用品
                            </li>
                            <li>
                                <i></i>
                                已结束
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}