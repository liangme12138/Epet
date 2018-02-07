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
            // console.log(res)
            for(var i=0;i<res.length;i++){
                this.state.database.push(res[i])
            }
            this.setState({database:this.state.database})
            console.log(this.state.database,'7777')
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
                    <h2>M宠团</h2>
                </div>
                <div className="titleMain">
                    <div className="titlePicture">
                        <img src={require('../../assets/img/navList/ePetTeam.jpg')}/>
                    </div>
                    <NoticeBarExample />

                    <div className="goodslists-ePet">
                        <ul>
                            {
                                this.state.database.map((item,idx)=>{
                                    return <li className="eteamMain" key={idx}>
                                        <img src={item.goodsimg} alt="" />
                                        <p className="name">{item.goodsname}</p>
                                        <p className="icon">
                                            <span className="iconfont icon-ren ren">{item.personteam}</span>
                                            <span className="colll">{item.savemoney}</span>
                                        </p>
                                        <p className="price">
                                            <span className="curprice">{item.curteamprice}</span>
                                            /单独买¥<span>{item.oriprice}</span>
                                        </p>
                                        <h2>
                                            <span className="buied iconfont icon-ren">{item.teambuied}</span>
                                            <span className="buyBtn">已抢光</span>
                                        </h2>
                                    </li>
                                })
                            }
                        </ul>
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
