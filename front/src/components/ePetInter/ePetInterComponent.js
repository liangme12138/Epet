import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';
import './ePetInter.scss';


export default class ePetInterComponent extends React.Component{
    state={
        
    }
    componentDidMount(){

    }

    render(){
        return(
            <div className="ePetInter">
                <div className="ePetInterTop">
                    <img src={require('../../assets/img/navList/epetinter.jpg')}/>
                </div>
                <div className="ePetInterMain">
                    <div className="ePetInter-title">
                        <h1>E宠国际</h1>
                        <p>ABOUT EPETHK</p>
                    </div>
                    <div className="ePetInter-con">
                        <ul>
                            <li>
                                <p className="p1">
                                    E宠国际自建资深买手团队亲赴海外原产地，
                                    为宠物家长精挑洗选高品质尖货、好货，
                                    只为把全球各地精致养宠的生活方式带给中国养宠家庭。
                                </p>
                                <img src={require('../../assets/img/navList/con1.png')} className="conF1"/>
                            </li>
                            <li>
                                <img src={require('../../assets/img/navList/con2.png')} className="conF2"/>
                                <p className="p2">
                                    同时，E宠国际深入商品原产地与品牌方、优质供应商合作,
                                    制定严苛的采购流程，专业团队层层把关，从源头控制品质，
                                    保障所售商品100%正品。
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="ePetInter-brand">
                        <img src={require('../../assets/img/navList/Interbrands.png')} className=""/>
                    </div>
                    <div className="ePetInter-bottom">
                        <div className="ePetInter-bottomTitle">
                            <h1>E宠国际服务</h1>
                            <p>SERVICE & SUPPORT</p>
                        </div>
                        <div className="ePetInter-bottomServer">
                            <p>发现全球好货 为每个养宠家庭创造无限美好</p>
                            <p>海外直供，全程海关监管，预计15-25个工作日送达</p>
                            <p>(注：海关周末和法定节假日休息。包裹会自动依时顺延)</p>
                            <div className="baozhang">
                                <img src={require('../../assets/img/navList/baozhang.png')} alt=""/>
                            </div>
                        </div>
                        <div className="ePetInterBuy">
                            <img src={require('../../assets/img/navList/buy.jpg')} alt=""/>
                        </div>
                        <div className="ePetInter-desc">
                            <div className="ePetInterdesc-tit">
                                <h1>尽享全球养宠美好生活</h1>
                                <p>ENJOY YOUR PETS WORLDWIDE</p>
                                <img src={require('../../assets/img/navList/code.jpg')} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}