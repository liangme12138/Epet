import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import * as IndexAction  from './indexAction';
import '../../sass/base.scss';
import './index.scss';
import rem from '../../utils/getRem.js';
import { lxCarousel } from '../../utils/banner'
// 下拉刷新
// import { RefreshControl, ListView } from 'antd-mobile';
rem.rem();
// import IndexSurpriseComponent from '../indexSurprise/indexSurpriseComponent';
import HomeBastComponent from '../home/homeBestComponent';

class IndexComponent extends React.Component{
    state={
        imgUrl:[],
        way: ['clothCity', 'applaws', 'naturebridge', 'moshm', 'ugfood','mengbei',
            'farmfood', 'petin', 'ancol','qc']

    }
    // 进入e宠团
    toEpetTeam(){
        hashHistory.push('epetteam')
    }
    // 进入品牌特卖
    toBrandSale() {
        hashHistory.push('brandsale');
    }
    // 进入宠国际
    toEpetInter(){
        hashHistory.push('guide')
    }
    // 进入潮品预售
    toEpettop() {
        hashHistory.push('epettop')
    }
    // 进入特价清仓
    toEpetmarking() {
        hashHistory.push('epetmarking')
    }
    // 萌宠联盟
    // topetalliance() {
    //     hashHistory.push('petalliance')
    // }
    brandMore() {
        hashHistory.push('brandsale')
    }
    toNewYear() {
        hashHistory.push('newyear')
    }
    // toTopVideo() {
    //     hashHistory.push('topvideo')
    // }
    
    go() {
        var len = $('.ul').length;
        console.log(len)

    }
    
    componentDidMount() {
        this.props.getImg().then((res)=>{
            // console.log(res,'66666666')
            res.map((item)=>{
                this.state.imgUrl.push(item)
            })
            this.setState({imgUrl:this.state.imgUrl})
        })
        $('.carousel').lxCarousel({
            imgs: ["../src/assets/img/navList/a745927376b596c2cb4685686af4d2ad.jpg", "../src/assets/img/navList/f106d8068e48bbb7cdbb6da829a1362a.jpg", "../src/assets/img/navList/81daec9ab76d65bc6a30e90f97b9a4ce.jpg", "../src/assets/img/navList/47f70eebdc4f7a3c4f3f81daf4f61748.jpg", "../src/assets/img/navList/cf0dfc1221504900fa9c3831dc7e3c69.jpg", "../src/assets/img/navList/280f12517e14a55ccbd358da770a119b.jpg", "../src/assets/img/navList/c766240b3a1c5229fad7ee776a5a555c.jpg", "../src/assets/img/navList/a745927376b596c2cb4685686af4d2ad.jpg"],
            wufeng: true
        })
    }

    render(){
        return (
           <div id="index-1">
                
                <div className="banner-item-1">
                    <div className="carousel">

                    </div>
                    {/* <img src="https://img2.epetbar.com/nowater/2018-01/29/14/a745927376b596c2cb4685686af4d2ad.jpg@!water" /> */}
                </div>
                <div className="video-img" onClick={this.toNewYear}>
                    <img src="https://img2.epetbar.com/nowater/2018-01/29/18/1bba61520c6e0f89abb16fe0705ccf5e.gif" />
                </div>
                <div className="index-1-main">
                    <div className="icon-navList">
                        <ul>
                            <li onClick={this.toEpetTeam}>
                                <i>
                                    <img src={require('../../assets/img/navList/1.jpg')}/>
                                </i>
                            </li>
                            <li onClick={this.toBrandSale}>
                                <i>
                                    <img src={require('../../assets/img/navList/2.jpg')}/>
                                </i>
                            </li>
                            <li onClick={this.toEpetInter}>
                                <i>
                                    <img src={require('../../assets/img/navList/3.jpg')}/>
                                </i>
                            </li>
                            <li onClick={this.toEpettop}>
                                <i>
                                    <img src={require('../../assets/img/navList/4.jpg')}/>
                                </i>
                            </li>
                            <li onClick={this.toEpetmarking}>
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
                    <HomeBastComponent Img={['../src/assets/img/navList/11.jpg', '../src/assets/img/navList/12.jpg', '../src/assets/img/navList/13.jpg']} active={["guide", "HighQuality", "toys"]}/>
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
                            <li onClick={this.toTopVideo}>
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
                        <img src={require('../../assets/img/navList/more.png')} className="brandMore" onClick={this.brandMore}/>
                    </div>
                    <div className="brandDetails-img">
                        <ul onClick={this.go} className="ul">
                            {
                                
                                this.state.imgUrl.map((item,idx)=>{
                                    return <li key={idx}>
                                            <Link to = {{pathname:this.state.way[idx]}}>
                                        <img src={item.imgurl} /></Link>
                                    </li>
                                })
                            }
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
           </div>
        )
    }
}


const mapToState = function (state) {
    return {
        imgsrc: state.IndexReducer.imgres || []
    }
}
export default connect(mapToState, IndexAction)(IndexComponent)





 