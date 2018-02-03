import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';
import '../../components/home/home.scss';

export default class HomeBastComponent extends React.Component{
    render(){
        return(
            <div className="currency_ad">
                <div className="currency-box">
                    <div className="currency-box-left">
                        <i>
                            <img src={require('../../assets/img/navList/11.jpg')} />
                        </i>
                    </div>
                    <div className="currency-box-right">
                        <i>
                            <img src={require('../../assets/img/navList/12.jpg')} />
                        </i>
                        <i>
                            <img src={require('../../assets/img/navList/13.jpg')} />
                        </i>
                    </div>
                </div>
            </div>
        )
    }
}