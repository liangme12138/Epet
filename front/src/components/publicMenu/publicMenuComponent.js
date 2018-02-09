import React from 'react';
import { Link, hashHistory } from 'react-router';
import './publicMenu.scss'
import { Modal,Button } from 'antd-mobile';
const alert = Modal.alert;
export default class publicMenu extends React.Component{
    state = {
        type: false,
        userId: ''
    }
    componentWillMount() {
        if (JSON.parse(window.localStorage.getItem('userInfo'))) {
            this.setState({ userId: JSON.parse(window.localStorage.getItem('userInfo'))[0].userId });
        }
    }
    cart2(){
        if (this.state.userId != ''){
            console.log(this)
            hashHistory.push("/cart");
        }
    }
    render(){
        return(
            // <div className="publicMenu">
                <ul className="menus_cen">
                    <li><Link to="/"><i className="iconfont icon-dianpu-xianxing"></i><span>首页</span></Link></li>
                    <li><Link to="category"><i className="iconfont icon-fenlei"></i><span>分类</span></Link></li>
                    <li onClick={this.cart2.bind(this)}>
                        <Button onClick={this.state.userId == '' ? () => alert('我的萌宠', '亲！请先登录!', [
                            { text: '继续逛逛', onPress: () => console.log(), style: 'default' },
                        { text: '去登录', onPress: () => hashHistory.push("/login"), style: { fontWeight: 'bold' } },
                    ]) : ''}
                        ><i className="iconfont icon-cart"></i><span>购物车</span></Button>
                    </li>
                    <li><Link to="mine"><i className="iconfont icon-toys"></i><span>我的萌宠</span></Link></li>
                </ul>
            // </div>
        )
    }
}