import React from 'react';
// import ReactDOM from 'react-dom';
// import { Router, Route, Link, hashHistory } from 'react-router';
import '../indexSurprise/indexSurprise.scss'

export default class IndexSurpriseComponent extends React.Component{
    render(){
        return(
            <div className="surprise-day">
                <div className="surprise-top">
                    <div className="sur-top-left">
                        <img src={require('../../assets/img/navList/qiang.png')} className="qiang"/>
                        <span>下一场开始</span>
                        <span className="hour">12</span>
                        <span>:</span>
                        <span className="minute">00</span>
                        <img src={require('../../assets/img/navList/more.png')}className="index-more"/>
                    </div>
                </div>
                <div className="surprise-bottom">
                    <ul>
                        <li>
                            <img src={require('../../assets/img/navList/goods1.jpg')}/>
                        </li>
                        <li>
                            <img src={require('../../assets/img/navList/goods1.jpg')}/>
                        </li>
                        <li>
                            <img src={require('../../assets/img/navList/goods1.jpg')}/>
                        </li>
                        <li>
                            <img src={require('../../assets/img/navList/goods1.jpg')}/>
                        </li>
                        <li>
                            <img src={require('../../assets/img/navList/goods1.jpg')}/>
                        </li>
                        <li>
                            <img src={require('../../assets/img/navList/goods1.jpg')}/>
                        </li>
                    </ul>
                </div>
            </div>  
        )
    }
}