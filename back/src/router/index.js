import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';

import HomeComponent from '../components/home/homeComponent';
import GoodListComponent from '../components/goodList/goodListComponent';
export default (
    <div>
        <Route path="/" component={HomeComponent}>
            <Route path="/goodList" component={GoodListComponent}></Route>
        </Route> 
        
    </div>
)