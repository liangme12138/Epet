import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import * as ancolActions from './ancolAction';
import spinner from '../spinner/spinner';
import './ancol.scss';

class AncolComponent extends React.Component {
    state = {
        andata: []
    }
    back() {
        window.history.back()
    }
    componentDidMount() {
        this.props.getdata().then((res) => {
            res.map((item) => {
                this.state.andata.push(item)
            })
            this.setState({ andata: this.state.andata })
        })
    }

    render() {
        return (
            <div className="natureBridge">
                <div className="titleTop">
                    <i className="iconfont icon-back titleTopLeft" onClick={this.back}></i>
                    <h2>安蔻儿ANCOL5.00折起</h2>
                </div>
                <div className="imgbox">
                    <img src="../src/assets/img/navList/1e4ccb1782bb021f1ef1c44f1b3a9808.jpg" />
                </div>
                <div className="natureBridge-main">
                    <ul>
                        {
                            this.state.andata.map((item, idx) => {
                                return <li key={idx}>
                                    <img src={item.imgurl} width="100%" />
                                    <p className="title">{item.title}</p>
                                    <p className="curprice">¥{item.curprice}</p>
                                    <p className="oriprice">原价：¥{item.oriprice}</p>
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
        result: state.ancolReducer.res || []
    }
}
export default connect(mapToState, ancolActions)(AncolComponent);