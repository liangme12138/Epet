import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';
import '../../components/home/home.scss';

export default class HomeBastComponent extends React.Component{
    componentWillMount() {
        // console.log(this.props.Img[0])
    }
    render(){
        return(
            <div className="currency_ad">
                <div className="currency-box">
                    <div className="currency-box-left">
                        <i>
                            <img src={this.props.Img[0]} />
                        </i>
                    </div>
                    <div className="currency-box-right">
                        <i>
                            <img src={this.props.Img[1]} />
                        </i>
                        <i>
                            <img src={this.props.Img[2]} />
                        </i>
                    </div>
                </div>
            </div>
        )
    }
}