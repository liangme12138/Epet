import React from 'react'
import { connect } from 'react-redux';
import {Toast } from 'antd-mobile';
import * as collectAction from './collectAction'
import './collect.scss'
class Collect extends React.Component {
     state={
         userId: (JSON.parse(window.localStorage.getItem('userInfo')))[0].userId || '',
    }
    changeTab=(e)=>{
        var tab =e.target.tagName.toLowerCase();
        if(tab=='span'){
            $(e.target).addClass('active').parent('li').siblings('li').find('span').removeClass('active');
            if ($(e.target).text() =="新品"){
                $('.tab1').css({display:'block'});
                $('.tab2').css({ display:'none'});
            }
            else if ($(e.target).text() == "新宠课堂"){
                $('.tab1').css({ display:'none' });
                $('.tab2').css({ display:'block' });
            }
        }
    }
    componentWillMount(){
        if(this.state.userId){
            this.props.getCollect('collect.php',{userId:this.state.userId}).then(res=>{
               this.setState({dataset:res});
            })
        }
        
    }
    delete(id, e) {
        this.props.deleteId('collect.php', {collectId:id}).then(res => {
            if (res == true) {
                Toast.success('删除成功!!!', 1);
                this.props.getCollect('collect.php', { userId: this.state.userId }).then(res => {
                    this.setState({dataset: res });
                })
            }
            else {
                Toast.fail('删除失败!!!', 1);
            }

        })
    }

    goBack = (e) => {
        this.props.router.goBack(-1);
    }
    toDefail(val){
        this.props.router.push('defail/'+val);

    }
    render(){
        return(
             <div id="sm_collect">
                 <header className="header">
                    <p><i className="iconfont icon-back" onClick={this.goBack}></i>我的收藏<i className="iconfont icon-viewgallery"></i></p>
                </header>
                <ul className="nav" onClick={this.changeTab}>
                    <li><span className="active">新品</span></li>
                    <li><span>新宠课堂</span></li>
                </ul>
                <div className="main">   
                    <div className="tab1"> 
                    {
                       this.state.dataset?
                            this.state.dataset.map((item, idx) => {
                    return  <div className="ePetMarking-list" key={idx} onClick={this.toDefail.bind(this,item.goodId)}>
                            <div className="ePetMarking-details">
                                <div className="epetmarkingImg">
                                    <img src={item.ImgUrl} />
                                </div>
                                <p className="ePetMarking-name">{item.goodName}</p>
                                <p className="epetmarkingPrice">
                                    <span className="price-cur">现价￥{item.Price}</span>
                                     <button className="del" onClick={this.delete.bind(this, item.collectId)}>删除</button>
                                </p>

                            </div>
                        </div>
                       }):<div id="sm_nodata">
                            <img src="../../src/assets/img/nodata.png" alt="" />
                            <p>你还没有任何收藏</p>
                        </div>    
                                                
                    } 
                    </div>
                    <div className="tab2">
                        <div id="sm_nodata">
                            <img src="../../src/assets/img/nodata.png" alt="" />
                            <p>暂无咨询</p>
                        </div>
                    </div>
                 
                </div>
             </div>
        )   
    }
}
const mapToState = function (state) {
    return {
        type:state.collectReducer.type,
        data:state.collectReducer.result||[]
    }
}
export default connect(mapToState,collectAction)(Collect)