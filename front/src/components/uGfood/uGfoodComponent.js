import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import * as uGfoodActions from './uGfoodAction';
import spinner from '../spinner/spinner';
import './uGfood.scss';

class UGfoodComponent extends React.Component {
    state = {
        ugdata: []
    }
    back() {
        window.history.back()
    }
    componentDidMount() {
        this.props.getdata().then((res) => {
            res.map((item) => {
                this.state.ugdata.push(item)
            })
            this.setState({ ugdata: this.state.ugdata })
        })
    }

    render() {
        return (
            <div className="natureBridge">
                <div className="titleTop">
                    <i className="iconfont icon-back titleTopLeft" onClick={this.back}></i>
                    <h2>优基品牌特卖</h2>
                </div>
                <div className="imgbox">
                    <img src="../src/assets/img/navList/fc762c770a431ebbdcf20a03d6c5870f.jpg" />
                </div>
                <div className="natureBridge-main">
                    <ul>
                        {
                            this.state.ugdata.map((item, idx) => {
                                return <li key={idx}>
                                    <img src={item.imgurl} width="100%" />
                                    <p className="title">{item.title}</p>
                                    <p className="curprice">¥{item.curprice}.00</p>
                                    <p className="oriprice">原价：¥{item.oriprice}.00</p>
                                    <span className="buy">立即购买</span>
                                </li>
                            })
                        }
                        <li>
                            <img src="../src/assets/img/navList/stance.jpg" width="100%" height="100%" />
                        </li>
                    </ul>

                </div>

            </div>
        )
    }
}
const mapToState = function (state) {
    return {
        // type: state.BrandSaleReducer.res1 || [],
        // brandsale: state.BrandSaleReducer.res2 || []
        result: state.UgfoodReducer.res || []
    }
}
export default connect(mapToState, uGfoodActions)(UGfoodComponent);

