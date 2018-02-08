import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import * as clothCityActions from './clothCityAction';
import './clothCity.scss';

class ClothCityComponent extends React.Component{
    state = {
        clothdata:[]
    }

    componentDidMount() {
        this.props.getCloth().then((res)=>{
            // console.log(res)
            res.map((item)=>{
                this.state.clothdata.push(item)
            })
            this.setState({clothdata:this.state.clothdata})
        })
    }
    back(){
        window.history.back()
    }
    render() {
        return(
            <div className="clothCity">
                <div className="titleTop">
                    <i className="iconfont icon-back titleTopLeft" onClick={this.back}></i>
                    <h2>宠趣-服饰城</h2>
                </div>
                <div className="imgbox1">
                    <img src="../src/assets/img/navList/m1.jpg" />
                </div>
                <div className="clothCity-main">
                    <div className="imgbox2">
                        <img src="../src/assets/img/navList/m2.jpg"/>
                    </div>
                    <ul>
                        {
                            this.state.clothdata.map((item,idx)=>{
                                return <li key={idx}>
                                    <img src={item.imgurl} />
                                    <p className="name">{item.title}</p>
                                    <span>￥{item.curprice}</span>
                                    <p className="oriprice">原价：￥{item.oriprice}</p>
                                    <button>{item.state}</button>
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
        cloth: state.ClothCityReducer.res || [],
    }
}
export default connect(mapToState, clothCityActions)(ClothCityComponent);