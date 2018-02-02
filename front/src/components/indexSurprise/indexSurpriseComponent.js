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
                        <img src={require('../../assets/img/navList/qiang.png')} />
                        <span>下一场开始</span>
                        <div className="surCountdown">
                            <span>12</span>
                            <span>:</span>
                            <span>00</span>
                        </div>
                    </div>
                </div>
                <div className="surprise-bottom">

                </div>
            </div>  
        )
    }
}