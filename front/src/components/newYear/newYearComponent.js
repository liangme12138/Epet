import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import './newYear.scss';

export default class NewYearComponent extends React.Component{
    state = {

    }
    componentDidMount() {

    }
    back(){
        window.history.back();
    }
    render() {
        return(
            <div className="newYear">
                <div className="titleTop">
                    <i className="iconfont icon-back titleTopLeft" onClick={this.back}></i>
                    <h2>寻年味-携宠齐回家，年才更有味</h2>
                </div>
                <div className="newyear-main">
                    <div className="imgbox1">
                        <img src="../src/assets/img/navList/newyear1.jpg" />
                    </div>
                    <div className="imgbox2">
                        <img src="../src/assets/img/navList/newyear2.jpg" />
                    </div>
                    <div className="imgbox3">
                        <img src="../src/assets/img/navList/newyear3.jpg" />
                    </div>
                    <div className="imgbox4">
                        <img src="../src/assets/img/navList/newyear4.jpg" />
                    </div>
                    <div className="imgbox5">
                        <img src="../src/assets/img/navList/newyear5.png" />
                    </div>
                    <div className="imgbox6">
                        <img src="../src/assets/img/navList/newyear6.jpg" />
                    </div>
                    <div className="imgbox7">
                        <img src="../src/assets/img/navList/newyear7.jpg" />
                    </div>
                    <div className="imgbox8">
                        <img src="../src/assets/img/navList/newyear8.jpg" />
                    </div>
                    <img src="../src/assets/img/navList/newyear9.jpg" />
                    <img src="../src/assets/img/navList/newyear10.jpg" />
                    <img src="../src/assets/img/navList/newyear11.jpg" />
                    <img src="../src/assets/img/navList/newyear12.jpg" />
                    <img src="../src/assets/img/navList/newyear13.jpg" />
                    <img src="../src/assets/img/navList/newyear14.jpg" />
                    <img src="../src/assets/img/navList/newyear15.jpg" />
                    <img src="../src/assets/img/navList/newyear16.jpg" />
                    <img src="../src/assets/img/navList/newyear17.jpg" />
                    <div className="imgbox9">
                        <img src="../src/assets/img/navList/newyear18.jpg" />
                        <img src="../src/assets/img/navList/n1.png" className="n1"/>
                        <img src="../src/assets/img/navList/n2.png" className="n2"/>
                        <img src="../src/assets/img/navList/n3.png" className="n3"/>
                    </div>
                        
                    
                    
                </div>
                
            </div>
        )
    }
}