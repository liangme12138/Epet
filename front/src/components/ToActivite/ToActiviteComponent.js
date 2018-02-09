import React from 'react';
import { connect } from 'react-redux';
import * as ToActiviteAction from './ToActiviteAction';
import './ToActivite.scss';
import spinner from '../spinner/spinner'

class ToActiviteComponent extends React.Component {
    state = {
        type:[1,2,3]
    }
    componentWillMount() {
        spinner.loadSpinner();
        this.props.getAtvPrd(this.props.params.id).then(()=>{
            spinner.closeSpinner();
        }).catch(error => {
            spinner.closeSpinner();
        });
    }
    back() {
        window.history.back();
    }
    render() {
        return (
            <div className="ToActivite">
                <div className="ToActivite-top">
                    <i className="iconfont icon-back" onClick={this.back}></i>
                    <h3>{this.props.data1.activityName}</h3>
                    <i className="iconfont icon-viewgallery"></i>
                </div>
                <div className="ToActivite-bottom">
                    <div className="img">
                        <img src={this.props.data1.detailsImg}/>
                    </div>
                    <ul className="prds">
                       {
                           this.props.data2.map((item,idx)=>{
                                return <li key={idx}>
                                    <div className="prd-Top">
                                        <img src={item.goodImgUrl} />
                                    </div>
                                    <div className="prd-bottom">
                                        <p>{item.goodName}</p>
                                        <span className="price">￥{item.Price}</span>
                                        <span className="Oprice">原价：￥{item.originPrice}</span>
                                        <span className="buyclass">立即购买</span>
                                    </div>
                                </li>
                           })
                       }
                    </ul>
                </div>
            </div>
        )
    }
}

const mapToState = function (state) {
    return {
        data1: state.ActiveProduct.result1 || [],
        data2: state.ActiveProduct.result2 || [],
    }
}

export default connect(mapToState, ToActiviteAction)(ToActiviteComponent);