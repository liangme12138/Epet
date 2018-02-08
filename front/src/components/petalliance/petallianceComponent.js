import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';
import './petalliance.scss';


// 萌宠联盟
export default class PetallianceComponent extends React.Component{
    componentDidMount(){
        
    }

    back(){
        window.history.back()
    }
    
    render(){
        return (
            <div className="petalliance">
                <div className="petallianceTop">
                    <img src="../src/assets/img/navList/bg_img_trial.jpg"/>
                    <span className="left iconfont icon-back" onClick={this.back}></span>
                    <h3>M宠联盟</h3>
                    <div className="haha">
                        <div>
                            <img src="../src/assets/img/navList/left_trial.png"/>
                            <p>173</p>
                        </div>
                        <div>
                            <img src="../src/assets/img/navList/right_trial.png" />
                            <p>716</p>
                        </div>
                    </div>
                </div>
                <div className="petalliance-main">
                    <ul>
                        <li>
                            <p className="name">飞天大神猫</p>
                            <p className="other">
                                <span className="profession">
                                    预备体验师
                                </span>
                                <span className="dog">
                                    巴哥犬 3岁5个月2天
                                </span>
                                <img src="../src/assets/img/navList/dog.jpg"/>
                                <p className="introduce">狗狗安全反光救生衣使用报告</p>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            
        )
    }
}