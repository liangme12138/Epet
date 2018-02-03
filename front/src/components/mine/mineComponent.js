import React from 'react'
// import { connect } from 'react-redux';
import { List, InputItem, WhiteSpace, Button } from 'antd-mobile';
import PublicMenu from '../publicMenu/publicMenuComponent'
import './mine.scss'
export default class Mine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }
    skipAccount=(e)=>{       
            this.props.router.push("account");
    }
    render() {
        return (
            <div id="sm_mine">
                <header className="header" style={{ background: "url('../../src/assets/img/login/mine.jpg') no-repeat", backgroundSize: "100% 100%" }}>
                    <div className="top">
                        <p><span style={{ background: "url('../../src/assets/img/login/newn.png') no-repeat" }}></span><span onClick={this.skipAccount} style={{ background: "url('../../src/assets/img/login/setting.png') no-repeat" }}></span></p>
                    </div>
                    <div className="status">
                        <div className="headimg"><img src="../../src/assets/img/login/1.jpg" alt="" /></div>
                        <div className="users">
                            <p>dfsfsaf</p>
                            <span>爱宠V星球<i style={{ background: "url('../../src/assets/img/login/v0.png') no-repeat" }}></i></span>
                        </div> 
                    </div>
                    <div className="qian"><img src="../../src/assets/img/login/signin.png" alt=""/></div>
                    
                </header>
                <ul className="nav common">
                    <li><i style={{ background: "url('../../src/assets/img/login/elves.png')0 0"}}></i>
                    <p>待付款</p>
                    </li>
                    <li><i style={{ background: "url('../../src/assets/img/login/elves.png')-0.4rem 0" }}></i>
                    <p>待收货</p>
                    </li>
                    <li><i style={{ background: "url('../../src/assets/img/login/elves.png')-0.8rem 0" }}></i>
                    <p>待评价</p>
                    </li >

                    <li><img src="../../src/assets/img/login/icon4_dog.png" alt="" />
                    <p>全部订单</p>
                    </li >
                </ul>
                <ul className="icon common">
                    <li>
                        <p>8</p>
                        <p>优惠券</p>
                    </li>
                    <li><p>0.00</p >
                        <p>M宠币</p>
                    </li >
                    <li><p>0.00</p >
                        <p>余额</p>
                    </li > 
                    <li><img src="../../src/assets/img/login/icon5_dog.png" alt="" />
                        <p>我的钱包</p>
                    </li >
                </ul>
                <ul className="pit">
                    <li>
                        <img src="../../src/assets/img/login/p1.jpg" alt="" />       
                    </li >
                    <li>
                        <img src="../../src/assets/img/login/p2.jpg" alt="" />
                    </li >
                    <li>
                        <img src="../../src/assets/img/login/p3.jpg" alt="" />
                    </li >
                    <li>
                        <img src="../../src/assets/img/login/p4.jpg" alt="" />
                    </li >

                </ul>
                <div className="lis">
                    <ul>
                        
                        <li>
                            <p><i style={{ background: "url('../../src/assets/img/login/elves.png')4.1rem 0" }}></i>潮品预售<i className="iconfont icon-more"></i></p>
                        </li>
                        <li>
                            <p><i style={{ background: "url('../../src/assets/img/login/elves.png')3.77rem 0" }}></i>我的团购<i className="iconfont icon-more"></i></p>
                        </li>
                        <li>
                            <p><i style={{ background: "url('../../src/assets/img/login/elves.png')3.4rem 0" }}></i>爱宠V星球<i className="iconfont icon-more"></i></p>
                        </li>
                        <li>
                            <p><i style={{ background: "url('../../src/assets/img/login/elves.png')3.1rem 0" }}></i>萌爪联盟<i className="iconfont icon-more"></i></p>
                        </li>
                        <li>
                            <p><i style={{ background: "url('../../src/assets/img/login/elves.png')2.78rem 0" }}></i>我的关注<i className="iconfont icon-more"></i></p>
                        </li>
                        <li>
                            <p><i style={{ background: "url('../../src/assets/img/login/elves.png')2.45rem 0" }}></i>我的评价<i className="iconfont icon-more"></i></p>
                        </li>
                        <li>
                            <p><i style={{ background: "url('../../src/assets/img/login/elves.png')2.1rem 0" }}></i>我的咨询<i className="iconfont icon-more"></i></p>
                        </li>
                        <li>
                            <p><i style={{ background: "url('../../src/assets/img/login/elves.png')7.13rem 0" }}></i>我的收藏<i className="iconfont icon-more"></i></p>
                        </li>
                    </ul>
                </div>
                <div className="btn-container">
                    <Button className="btn" type="primary" onClick={this.login1}>退出</Button>
                </div>
                <PublicMenu></PublicMenu>
            </div>
        )
    }
}

