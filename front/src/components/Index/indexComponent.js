import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import * as IndexAction  from './indexAction';
import '../../sass/base.scss'
import './index.scss';
import rem from '../../utils/getRem.js';
import Home from '../home/homeComponent';
// 下拉刷新
// import { RefreshControl, ListView } from 'antd-mobile';
rem.rem();

import PublicMenu from '../publicMenu/publicMenuComponent';
import IndexSurpriseComponent from '../indexSurprise/indexSurpriseComponent';
class IndexComponent extends React.Component{
    render(){
        return (
           <div id="index-1">
                <Home/>
                <div className="banner-item-1">
                    <img src="https://img2.epetbar.com/nowater/2018-01/29/14/a745927376b596c2cb4685686af4d2ad.jpg@!water" />
                </div>
                <div className="video-img">
                    <img src="https://img2.epetbar.com/nowater/2018-01/29/18/1bba61520c6e0f89abb16fe0705ccf5e.gif" />
                </div>
                <div className="index-1-main">
                    <div className="icon-navList">
                        <ul>
                            <li>
                                <i>
                                    <img src={require('../../assets/img/navList/1.jpg')}/>
                                </i>
                            </li>
                            <li>
                                <i>
                                    <img src={require('../../assets/img/navList/2.jpg')}/>
                                </i>
                            </li>
                            <li>
                                <i>
                                    <img src={require('../../assets/img/navList/3.jpg')}/>
                                </i>
                            </li>
                            <li>
                                <i>
                                    <img src={require('../../assets/img/navList/4.jpg')}/>
                                </i>
                            </li>
                            <li>
                                <i>
                                    <img src={require('../../assets/img/navList/5.jpg')}/>
                                </i>
                            </li>
                            <li>
                                <i>
                                    <img src={require('../../assets/img/navList/6.jpg')}/>
                                </i>
                            </li>
                            <li>
                                <i>
                                    <img src={require('../../assets/img/navList/7.jpg')}/>
                                </i>
                            </li>
                            <li>
                                <i>
                                    <img src={require('../../assets/img/navList/8.jpg')}/>
                                </i>
                            </li>
                            <li>
                                <i>
                                    <img src={require('../../assets/img/navList/9.jpg')}/>
                                </i>
                            </li>
                            <li>
                                <i>
                                    <img src={require('../../assets/img/navList/10.jpg')}/>
                                </i>
                            </li>
                        </ul>
                    </div>
                    <div className="new-people">
                            <img src={require('../../assets/img/navList/newPeople.gif')}/>
                    </div>
                    <IndexSurpriseComponent/>
                </div>
                <PublicMenu />
           </div>
        )
    }
}


const mapToState = function (state) {
    console.log(state)
    return {
        // dataset: state.collect.response || []
    }
}
export default connect(mapToState, IndexAction)(IndexComponent)
// 下拉加载
/* eslint no-dupe-keys: 0, no-mixed-operators: 0 */




 