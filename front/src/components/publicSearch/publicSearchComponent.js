import React from 'react';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import Cookie from '../../utils/cookie';
import './publicSearch.scss';
export default class publicSearchComponent extends React.Component{
    state = {
        historySearch:[],
    }
    componentDidMount() {
        // 获取搜索记录
        var historySearch = Cookie.get('historySearch');
        // console.log('historySearch', historySearch)
        if (historySearch){
            historySearch = JSON.parse(historySearch);
            this.setState({ historySearch: historySearch});
        }
    }
    SearchBtn(){
        // 获取搜索框的值
        var searchName = this.refs.searchName.value;
        this.refs.searchName.value = '';
        var arr =  this.state.historySearch;
        arr.push(searchName);
        // 添加到搜索历史
        Cookie.set('historySearch', JSON.stringify(this.state.historySearch), '', '/');
        this.setState({ historySearch: arr});
        // 发起搜索的ajax请求
        // 。。。
    }
    ClearHistory(){
        // 移除历史记录
        Cookie.remove('historySearch');
        // 将搜索历史清空
        this.setState({ historySearch: []})
    }
    hotSearch(event){
        if (event.target.tagName == 'LI'){
            this.refs.searchName.value = event.target.innerHTML;
        }
    }
    back(){
        window.history.back();
        // hashHistory.push('/');
    }
    render(){
        return (
            <div className="Search_cen">
                <div className="top_cen">
                    <span className="iconfont icon-back" onClick={this.back.bind(this)}></span> 
                    <div className="search">
                        <i className="iconfont icon-icon-test2"></i>
                        <input type="text" placeholder="搜索类品、类目、关键字" ref="searchName"/>
                    </div>
                    <span className="searchBtn" onClick={this.SearchBtn.bind(this)}>搜索</span>
                </div>
                <div className="hot_search">
                    <span>热门搜索</span>
                    <ul onClick={this.hotSearch.bind(this)}>
                        <li>洁齿骨</li>
                        <li>棉垫</li>
                        <li>发育室</li>
                        <li>心丝虫</li>
                        <li>狗狗玩具</li>
                        <li>杀菌除臭</li>
                        <li>比熊</li>
                        <li>幼犬</li>
                        <li>益生菌</li>
                        <li>卡比</li>
                    </ul>
                </div>
                <div className="history_search">
                    <h2><span>最近搜索</span><span onClick={this.ClearHistory.bind(this)}><i className="iconfont icon-delete"></i>清除历史</span></h2>
                    <ul>
                        {
                            this.state.historySearch.map(function(item,idx){
                                return <li key={idx}>{item}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}