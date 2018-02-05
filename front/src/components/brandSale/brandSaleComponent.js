import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import * as brandSaleActions from './brandSaleAction';
import '../../sass/iconfont.css';
import './brandSale.scss';

class BrandSaleComponent extends React.Component{
    state={
        Type1:[],
        Type2:[],
        Type3:[]
    }

    

    li1(){
        var curLi = this;
        console.log(curLi)

    }
    back(){
        window.history.back();
    }

    componentDidMount() {
        this.props.getType().then((res)=>{
            console.log(res)
            res.map((item,idx)=>{
                if (item.type == "主粮零食"){
                    this.state.Type1.push(item)
                } else if (item.type == "医疗保健"){
                    this.state.Type2.push(item)
                }else{
                    this.state.Type3.push(item)
                }
            })
            this.setState({Type1:this.state.Type1})
            this.setState({Type2:this.state.Type2})
            this.setState({Type3: this.state.Type3})
            
        })
        console.log(this.state.Type1,'111')
        console.log(this.state.Type2, '222')
        console.log(this.state.Type3, '333')
        
        
    }

    render() {
        return(
            <div className="brandSale">
                <div className="titleTop">
                    <i className="iconfont icon-back titleTopLeft" onClick={this.back}></i>
                    <h2>品牌特卖</h2>
                </div>
                <div className="titleMain">
                    <div className="titlePicture">
                        <img src={require('../../assets/img/navList/brandsale.jpg')} />
                    </div>
                    <div className="title-nav">
                        <ul>
                            <li onClick={this.li1} ref="li1">
                                <i>
                                    <img src={require('../../assets/img/navList/icon1.png')}/>
                                </i>
                                主粮零食
                            </li>
                            <li onClick={this.li2}>
                                <i>
                                    <img src={require('../../assets/img/navList/icon2.png')} />
                                </i>
                                医疗保健
                            </li>
                            <li onClick={this.li3}>
                                <i>
                                    <img src={require('../../assets/img/navList/icon3.png')} />
                                </i>
                                玩具用品
                            </li>
                            <li onClick={this.li4}>
                                <i>
                                    <img src={require('../../assets/img/navList/icon0.png')} />
                                </i>
                                已结束
                            </li>
                        </ul>
                    </div>
                    <div className="brandSale-title">
                        <img src={require('../../assets/img/navList/brandsaleTit.jpg')} />
                    </div>
                    <div className="brandSale-list">
                        <ul>
                            <li className="brandSale-rela">
                                <img src={require('../../assets/img/navList/brandsale1.jpg')} />
                                <p className="leave-time">
                                    <span>仅剩</span>
                                    <span>x天xx时xx分xx秒</span>
                                    <span className="goods-name">康乐多高性价比犬粮</span>
                                </p>
                            </li>

                            <li className="brandSale-rela">
                                <img src={require('../../assets/img/navList/brandsale1.jpg')} />
                                <p className="leave-time">
                                    <span>仅剩</span>
                                    <span>x天xx时xx分xx秒</span>
                                    <span className="goods-name">康乐多高性价比犬粮</span>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}


const mapToState = function (state) {
    return {
        type: state.BrandSaleReducer.res1 || [],
        brandsale: state.BrandSaleReducer.res2 || []
    }
}
export default connect(mapToState, brandSaleActions)(BrandSaleComponent);