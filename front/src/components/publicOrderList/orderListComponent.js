import React from 'React'
// import { connect } from 'react-redux';
import './orderList.scss'

export default class OrderlistComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataset:[]
        };
    }
    render(){
        return(
            <div id="sm_orderlist">
            {this.state.dataset?
                    <ul >
                        <li>
                            <div className="top">
                                <p><span>订单号 7434242</span><span>应付 ￥23.80<i className="iconfont icon-more"></i></span></p>
                                <p><span><i className="iconfont icon-dianpu"></i>东部大仓</span><span>等待付款</span></p>
                            </div>
                            <div className="center">
                                <img src="../../src/assets/img/food/0f972761c08a37c8baff88fa9302053d.jpg " alt="" />
                                <img src="../../src/assets/img/food/0c7fc2256c2a90fda3684dff237e561b.jpg" alt="" />
                            </div>
                            <div className="bot"><button>去付款</button></div>
                        </li>

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