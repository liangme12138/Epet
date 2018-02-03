import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import * as ePetTeamActions from './ePetTeamAction';
import './ePetTeam.scss';
import { Popover, NavBar, Icon } from 'antd-mobile';
const Item = Popover.Item;

export default class EpetTeamComponent extends React.Component{
    render() {
        return(
            <div className="ePetTeam">
                <div className="titleTop">
                    <i className="icon-back titleTopLeft"></i>
                    <h2>E宠团</h2>
                    <i></i>
                </div>
            </div>
        )
    }
}
