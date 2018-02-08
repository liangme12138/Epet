import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';
import './petalliance.scss';
import { connect } from 'react-redux';
import * as petAllianceActions from './petallianceAction';


// 萌宠联盟
class PetallianceComponent extends React.Component{
    state = {
        database:[]
    }
    componentDidMount(){
        this.props.getDataAll().then((res)=>{
            res.map((item)=>{
                this.state.database.push(item);
            })
            this.setState({database:this.state.database})
        })
        // console.log(this.state.database)
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
                        {
                            this.state.database.map((item,idx)=>{
                                return <li key={idx}>
                                    <p className="name">{item.nickname}</p>
                                    <p className="other">
                                        <span className="profession">{item.zhiye}</span>
                                        <span className="dog">{item.dog}</span>
                                        <img src={item.imgurl} />
                                        <p className="introduce">{item.title}</p>
                                    </p>
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
        data: state.petAllianceReducer.res || []
        
    }
}
export default connect(mapToState, petAllianceActions)(PetallianceComponent);