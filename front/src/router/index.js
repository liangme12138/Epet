import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import goodslistComponent from "../components/goodList/goodsListComponent";
import IndexComponent from '../components/Index/indexComponent';

export default (
        <div>
            <Route path="/" component={goodslistComponent}></Route>
            <Route path="/index" component={IndexComponent}></Route>            
        </div>
)