import React from 'React'
// import { connect } from 'react-redux';
import './orderList.scss'
import {Toast } from 'antd-mobile';
export default class OrderlistComponent extends React.Component {
    state={
        status: ['','去付款','确认收货','去评价'],
        text:['','等待付款','等待收货','等待评价']
    }
    cancel(id,e){
        Toast.loading('服务器繁忙,数据请求中!', 2);
    }
    render(){  
        return(
            <div id="sm_orderlist">
             { this.props.data?
                    <ul>
                    {
                        this.props.data.map((item,idx)=>{ 
                                return <li key={idx}>
                                    <div className="top">
                                        <p><span>订单号 {item.orderId}</span><span onClick={this.cancel.bind(this, item.orderId)}>应付 ￥{item.Price}<i className="iconfont icon-more"></i></span></p>
                                        <p><span><i className="iconfont icon-dianpu"></i>东部大仓</span>
                                            <span>{this.state.text[Number(item.status)]}</span>
                                        </p>
                                    </div>
                                    <div className="center">
                                        <img src={item.ImgUrl} alt="" />
                                    </div>
                                    <div className="bot"><button>{this.state.status[Number(item.status)]}</button></div>
                                </li>

                        })
                    }
                      
                    </ul>
                    :
                    <div id="sm_nodata">
                        <img src="../../src/assets/img/nodata.png" alt="" />
                        <p>你还没有任何订单</p>
                    </div>
                      
             }
            </div>   
             
            
        )
    }
}