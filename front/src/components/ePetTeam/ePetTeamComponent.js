import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import * as ePetTeamActions from './ePetTeamAction';
import '../../sass/iconfont.css';
import './ePetTeam.scss';
import { NoticeBar, WhiteSpace, Icon } from 'antd-mobile';

// import { Popover, NavBar, Icon } from 'antd-mobile';
// const Item = Popover.Item;

class EpetTeamComponent extends React.Component{
    state ={
        database:[]
    }

    componentDidMount() {
        this.props.getGoodsData().then((res)=>{
            console.log(res)
            for(var i=0;i<res.length;i++){
                this.state.database.push(res[i])
            }
            console.log(this.state.database)
            this.setState({database:this.state.database})
        })
    }
    toTop() {
        window.scrollTo(0,0);
    }

    back() {
        window.history.back();
    }
    
    
    render() {
        return(
            <div className="ePetTeam">
                <div className="titleTop">
                    <i className="iconfont icon-back titleTopLeft" onClick={this.back}></i>
                    <h2>E宠团</h2>
                </div>
                <div className="titleMain">
                    <div className="titlePicture">
                        <img src={require('../../assets/img/navList/ePetTeam.jpg')}/>
                    </div>
                    <NoticeBarExample />

                    <div className="goodslists-ePet">
                        
                        <div className="goodsList-ePet">
                            <div className="img-real">
                                {
                                    this.state.database.map((item,idx)=>{
                                        console.log(item)
                                        return <img src={item.goodsimg} key={idx}/>
                                    })
                                }
                                
                            </div>
                            <div className="goodsList-info">
                                {
                                    this.state.database.map((item,idx)=>{
                                        return <p className="goodslist-Name" key={idx}>{item.goodsname}</p>
                                    })
                                }
                                    <p className="goodslist-content">
                                        <span>
                                            <em className="iconfont  icon-ren"></em>
                                            3人成团
                                        </span>
                                        <span>
                                            力省
                                            <i>xx元</i>
                                        </span>
                                    </p>
                                    <p className="goodslist-price">
                                        ¥
                                        <span className="price-mostPerson">
                                            77.00
                                        </span>/单独买
                                        <span className="price-single">
                                            88.00
                                        </span>
                                    </p>
                            </div>

                        </div>
                        <div className="ePetTeam-status">
                            <span className="iconfont  icon-ren status-done">
                                9人已支付
                            </span>
                            <span className="status-btn">
                                去开团
                            </span>

                        </div>
                    </div>


                    <div className="goodslist-loadmore">
                        <span className="more-history">
                            查看更多历史活动
                        </span>
                    </div>
                </div>
                <div className="toTop iconfont icon-less" onClick={this.toTop.bind(this)}>
                    
                </div>
            </div>
        )
    }
}


// 通知栏
const NoticeBarExample = () => (
    <div>
        <WhiteSpace size="lg" />
        <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 0.15rem' } }}>
            01月已经累计拼团600件，为宠友节省7.23万元
        </NoticeBar>
        <WhiteSpace size="lg" />
    </div>
);

// ReactDOM.render(<NoticeBarExample />, mountNode);
const mapToState = function (state) {
    // console.log(state)
    return {
        ajaxState: state.GoodslistReducer.status || []
    }
}
export default connect(mapToState, ePetTeamActions)(EpetTeamComponent)
