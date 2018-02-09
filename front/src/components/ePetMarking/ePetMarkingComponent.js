import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import * as petmarkingActions from './ePetMarkingAction';
import './ePetMarking.scss';

// 清仓特价
class ePetMarkingComponent extends React.Component{
    state={
        goods1: [],
        goods2: [],
        goods3: [],
        goods4: [],
        domStyle:{
            color:'#f03e3e',
            fontWeight: 'bold'
        }
    }
    back() {
        window.history.back();
    }
    componentWillReceiveProps(){
        
    }

    componentDidMount() {
        this.props.getDisUp().then((response1)=>{
            this.setState({ goods1: [] })
            
            //console.log(response,'3333')
            response1.map((item)=>{
                this.state.goods1.push(item)
            })
            this.setState({goods1:this.state.goods1})
            // console.log(this.state.goods1,'11')
        })
    }        
    discountUp(){
        // console.log(this.state.goods2,'click')
        this.props.getDisUp().then((response1) => {
            //console.log(response,'3333')
            response1.map((item) => {
                this.state.goods1.push(item)
            })
            this.setState({ goods1: this.state.goods1 })
            // console.log(this.state.goods1, '11')
        })
        this.setState({goods1:this.state.goods1})

        $('.disUp,.disDown,.priUp,.priDown').removeAttr('style');
        $('.disUp').css(this.state.domStyle)

    }
    discountDown(){
        this.props.getDisDown().then((response2) => {
            response2.map((item) => {
                this.state.goods2.push(item)
            })
            this.setState({ goods2: this.state.goods2 })
            // console.log(this.state.goods2, 'yiyiyiyiiyi')
        })
        this.setState({ goods1: this.state.goods2 })

        $('.disUp,.disDown,.priUp,.priDown').removeAttr('style');
        $('.disDown').css(this.state.domStyle)
        
    }
    priceUp(){
        this.props.getPriceUp().then((response3) => {
            response3.map((item) => {
                this.state.goods3.push(item)
            })
            this.setState({ goods3: this.state.goods3 })
            // console.log(this.state.goods3, '333')
        })
        this.setState({ goods1: this.state.goods3 })
        $('.disUp,.disDown,.priUp,.priDown').removeAttr('style');
        $('.priUp').css(this.state.domStyle)
        
    }
    priceDown(){
        this.props.getPriceDown().then((response4) => {
            response4.map((item) => {
                this.state.goods4.push(item)
            })
            this.setState({ goods4: this.state.goods4 })
            // console.log(this.state.goods4, '444')
        })
        this.setState({ goods1: this.state.goods4 })
        $('.disUp,.disDown,.priUp,.priDown').removeAttr('style');
        $('.priDown').css(this.state.domStyle)
    }

    toDetails(val) {
        this.props.router.push('defail/' + val)
    }

   
    render() {
        return(
            <div className="ePetMarking">
                <div className="titleTop">
                    <i className="iconfont icon-back titleTopLeft" onClick={this.back}></i>
                    <h2>清仓特价</h2>
                </div>
                <div className="sortBox">
                    <ul>
                        <li>折扣
                            <i className="iconfont icon-less disUp" onClick={this.discountUp.bind(this)}></i>
                            <i className="iconfont icon-moreunfold disDown" onClick={this.discountDown.bind(this)}></i>
                        </li>
                        <li>价格
                            <i className="iconfont icon-less priUp" onClick={this.priceUp.bind(this)}></i>
                            <i className="iconfont icon-moreunfold priDown" onClick={this.priceDown.bind(this)}></i>
                        </li>
                    </ul>
                </div>
                <div className="ePetMarking-main">
                    {
                        this.state.goods1.map((item,idx)=>{
                            return <div className="ePetMarking-list" key={idx}>
                        <p className="ePetMarking-title">
                            <span className="t1">{item.state}</span>
                            <span className="t2">{item.deadline}</span>
                            <span className="discount">{item.discount}折</span>
                        </p>
                        <div className="ePetMarking-details" onClick={this.toDetails.bind(this,item.goodsid)}>
                            <div className="epetmarkingImg">
                                <img src={item.imgurl}/>
                            </div>
                            <p className="ePetMarking-name">{item.name}</p>
                            <p className="epetmarkingPrice">
                                <span className="price-cur">现价￥{item.curPrice}</span>
                                <span className="price-ori">原价￥{item.oriPrice}</span>
                            </p>
                            <i className="to-cart iconfont icon-cart"></i>    
                        </div>
                    </div>
                        })
                    }



                    
                </div>
            </div>
        )
    }
}
const mapToState = function (state) {
    return {
        // type: state.BrandSaleReducer.res1 || [],
        // brandsale: state.BrandSaleReducer.res2 || []
        database1: state.EpetMarkReducer.res1 || [],
        database2: state.EpetMarkReducer.res2 || [],
        database3: state.EpetMarkReducer.res3 || [],
        database4: state.EpetMarkReducer.res4 || []
    }
}
export default connect(mapToState, petmarkingActions)(ePetMarkingComponent);