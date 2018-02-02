import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import * as IndexAction  from './indexAction';
import '../../sass/base.scss'
import './index.scss';
import rem from '../../utils/getRem.js'
// 下拉刷新
// import { RefreshControl, ListView } from 'antd-mobile';
rem.rem();

import PublicMenu from '../publicMenu/publicMenuComponent';
// import IndexSurpriseComponent from '../indexSurprise/indexSurpriseComponent';
class IndexComponent extends React.Component{

    componentDidMount() {
        console.log(666)
    }

    render(){
        return (
           <div id="index-1">
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

                    <div className="currency_ad">
                        <div className="currency-box">
                            <div className="currency-box-left">
                                <i>
                                    <img src={require('../../assets/img/navList/11.jpg')}/>
                                </i>
                            </div>
                            <div className="currency-box-right">
                                <i>
                                    <img src={require('../../assets/img/navList/12.jpg')}/>
                                </i>
                                <i>
                                    <img src={require('../../assets/img/navList/13.jpg')}/>
                                </i>
                            </div>      
                        </div>
                    </div>
                    <div className="eTeam">
                        <img src={require('../../assets/img/navList/14.jpg')}/>
                    </div>
                    <div className="shopVideo">
                        <img src={require('../../assets/img/navList/16.jpg')} className
                        ="videoImg"/>
                        <img src={require('../../assets/img/navList/more.png')} className="videoMore"/>
                    </div>
                    <div className="shopVideoImg">
                        <ul>
                            <li>
                                <img src={require('../../assets/img/navList/15.jpg')}/>
                                <p>安蔻儿眉毛数 双梳头按摩</p>
                                <div className="shopVideo-scan">
                                    <span>37318</span>
                                    <em> | </em>
                                    <span>00:53</span>
                                </div>
                            </li>
                        </ul>
                        
                    </div>
                    <div className="brandScale">
                        <img src={require('../../assets/img/navList/17.jpg')} className="brandImg"/>
                        <img src={require('../../assets/img/navList/more.png')} className="brandMore"/>
                    </div>
                    <div className="brandDetails-img">
                        <ul>
                            <li>
                                <img src={require('../../assets/img/navList/brandScale1.jpg')}/>
                            </li>
                            <li>
                                <img src={require('../../assets/img/navList/brandScale2.jpg')}/>
                            </li>
                            <li>
                                <img src={require('../../assets/img/navList/brandScale3.jpg')}/>
                            </li>
                            <li>
                                <img src={require('../../assets/img/navList/brandScale4.jpg')}/>
                            </li>
                            <li>
                                <img src={require('../../assets/img/navList/brandScale5.jpg')}/>
                            </li>
                            <li>
                                <img src={require('../../assets/img/navList/brandScale6.jpg')}/>
                            </li>
                            <li>
                                <img src={require('../../assets/img/navList/brandScale7.jpg')} />
                            </li>
                            <li>
                                <img src={require('../../assets/img/navList/brandScale8.jpg')} />
                            </li>
                            <li>
                                <img src={require('../../assets/img/navList/brandScale9.jpg')} />
                            </li>
                            <li>
                                <img src={require('../../assets/img/navList/brandScale10.jpg')} />
                            </li>
                            <li>
                                <img src={require('../../assets/img/navList/brandScale11.jpg')} />
                            </li>
                        </ul>
                    </div>
                    <div className="tiYanGuanLogo">
                        <img src={require('../../assets/img/navList/18.jpg')} className="tiYanGuanImg"/>
                        <img src={require('../../assets/img/navList/more.png')} className="tiYanGuanMore"/>
                    </div>
                    <div className="tiYanGuanDetails">
                        <img src={require('../../assets/img/navList/tyg1.jpg')} className="tygdImg"/>
                    </div>
                    <div className="indexFoot">
                    <img src={require('../../assets/img/navList/foot.jpg')}/>
                    </div>
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




 