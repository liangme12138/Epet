import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';
import './ePetTopBar.scss';
import { connect } from 'react-redux';
import * as ePetTopBarActions from './ePetTopBarAction';

// 潮品预售
class ePetTopBarComponent extends React.Component{
    state={
        data:[]
    }
    back(){
        window.history.back();
    }
    componentDidMount() {
        this.props.getData().then((res)=>{
            console.log(res)
            res.map((item,idx)=>{
                this.state.data.push(item)
            })
            this.setState({data:this.state.data})
        })
        // console.log(this.state.data)
    }
    render() {
        return(
            <div className="ePetTopBar">
                <div className="titleTop">
                    <i className="iconfont icon-back titleTopLeft" onClick={this.back}></i>
                    <h2>潮品预售列表</h2>
                </div>
                <div className="ePetTopBar-main">
                    {
                        this.state.data.map((item,idx)=>{
                            return <div className="topBar" key={idx}>
                            <div className="topBar-img">
                                <img src={item.imgurl} />
                            </div>
                            <p>{item.name}</p>
                            <span >{item.introduce}</span>
                            <div className="topBar-price">
                                ¥ <span className="topBar-priceNum">{item.price}</span>
                                <a className="topBarBtn">
                                    我要预定
                                </a>
                            </div>
                        </div>
                        })
                    }
                </div>
                <div className="ePetTopBar-foot">
                    <span>已加载全部</span>
                </div>
            </div>
        )
    }
}

const mapToState = function (state) {
    return{
        getData: state.ePetTopBarReducer.status || []
    }
}
export default connect(mapToState, ePetTopBarActions)(ePetTopBarComponent)