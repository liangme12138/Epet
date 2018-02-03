import React from 'react';
import { connect } from 'react-redux';
import * as dogFoodIndexAction from './dogFoodIndexAction'; 
import '../dogFoodIndex/dogFoodIndex.scss'

class DogFoodIndexComponent extends React.Component{
    state = {
        Tab:[],
        tabItems:[],
        changeTab:[]
    }
    componentWillMount(){ 
        var arr =[]
        // console.log('componentWillMount');
        this.props.getTab().then(()=>{
            // console.log('aa', this.props.TabDate)
            this.props.TabDate.forEach((item)=>{
                if (this.state.Tab.indexOf(item.tabImg1) == -1){
                    this.state.Tab.push(item.tabImg1);
                    this.state.changeTab.push(item.tabImg2)
                }
            })
            this.setState({ Tab: this.state.Tab})
            this.setState({ changeTab: this.state.changeTab })
            this.toTabItem(1);
        })
        
    }
    // 点击切换菜单
    toTabItem(id) {
        this.state.tabItems = [];
        if (this.props.TabDate) {
            this.props.TabDate.forEach(item => {
                if (item.tabId == id) {
                    // console.log(item.tabId)
                    this.state.tabItems.push(item.classifyImg)
                }
            })
            this.setState({ tabItems: this.state.tabItems})
        }
    }
    tabSmall(idx,eve){
        this.toTabItem((idx*1+1));
        for(var i=0;i<this.state.Tab.length;i++){
            if(i != idx){
                // console.log($('#tabs').find('li').eq(i))
                $('#tabs').find('li').eq(i).find('img').attr({ src: this.state.Tab[i] })
            }
        }
        $(eve.target).attr({ src: this.state.changeTab[idx] })
    }
    render(){
        return(
            <div className="dogFood">
                <div className="banner-item-2">
                    <img src="https://img2.epetbar.com/nowater/2017-09/15/08/a4a9af65943791fd74db9a5ae3cb38b7.png@!water"/>
                    
                </div>
                <div className="dogFoodMenu">
                    <ul id="tabs">
                        {
                            this.state.Tab.map((item,idx)=>{
                                return <li key={idx} data-id={idx} onClick={this.tabSmall.bind(this,idx)}><img src={item}/></li>
                            })
                        }
                    </ul>
                    <div className="tabItems">
                        {
                            this.state.tabItems.map((item, idx) => {
                                return <div key={idx}><img src={item} /></div>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapToState = function (state) {
    console.log(state.TabsReducer)
    return {
        AjaxTabState: state.TabsReducer.status,
        TabDate: state.TabsReducer.result || []
    }
}

export default connect(mapToState, dogFoodIndexAction)(DogFoodIndexComponent);