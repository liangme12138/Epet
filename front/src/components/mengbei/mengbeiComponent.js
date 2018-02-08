import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import * as mengbeiActions from './mengbeiAction';
import spinner from '../spinner/spinner';
import './mengbei.scss';

class MengbeiComponent extends React.Component {
    state = {
        mgdata: []
    }
    back() {
        window.history.back()
    }
    componentDidMount() {
        this.props.getdata().then((res) => {
            res.map((item) => {
                this.state.mgdata.push(item)
            })
            this.setState({ mgdata: this.state.mgdata })
        })
    }

    render() {
        return (
            <div className="natureBridge">
                <div className="titleTop">
                    <i className="iconfont icon-back titleTopLeft" onClick={this.back}></i>
                    <h2>蒙贝7折起</h2>
                </div>
                <div className="imgbox">
                    <img src="../src/assets/img/navList/baace4ad7c28453f68e33ad16ef31fab.jpg" />
                </div>
                <div className="natureBridge-main">
                    <ul>
                        {
                            this.state.mgdata.map((item, idx) => {
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
        result: state.MengbeiReducer.res || []
    }
}
export default connect(mapToState, mengbeiActions)(MengbeiComponent);