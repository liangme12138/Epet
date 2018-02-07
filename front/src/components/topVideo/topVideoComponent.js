import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import * as topvideoActions from './topVideoAction';
import './topVideo.scss';

class TopVideoComponent extends React.Component{
    state = {
        topGoods: []
        
    }
    back() {
        window.history.back()
    }

    componentDidMount(){
        this.props.getTop().then((res)=>{
            // console.log(res)
            res.map((item)=>{
                this.state.topGoods.push(item)
            })
            this.setState({topGoods:this.state.topGoods})
        })
    }
    render(){
        return(
            <div className="topVideo">
                <div className="titleTop">
                    <i className="iconfont icon-back titleTopLeft" onClick={this.back}></i>
                    <h2>钢骨 金钢级磨牙棒 非一般的硬</h2>
                </div>
                <div className="topVideo-main">
                    <div className="topVideo-play">
                        <img src={require('../../assets/img/navList/topvideo.jpg')}/>
                    </div>
                    <div className="topVideo-goods">
                        <ul>
                            {
                                this.state.topGoods.map((item,idx)=>{
                                    return <li key={idx}>
                                        <img src={item.imgurl} />
                                        <h4>{item.topname}</h4>
                                        <p className="rel">{item.toptitle}</p>
                                        <p className="topvideoprice">
                                            <span>￥</span>
                                            <span className="price">{item.topprice}</span>
                                            <span className="cart iconfont icon-cart" ></span>
                                        </p>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                    
                </div>
            
            </div>
        )
    }
}
const mapToState = function (state) {
    return {
        // type: state.BrandSaleReducer.res1 || [],
        // brandsale: state.BrandSaleReducer.res2 || []
        result: state.topReducer.res || []
    }
}
export default connect(mapToState, topvideoActions)(TopVideoComponent);