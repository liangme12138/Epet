import React from 'react';
import { connect } from 'react-redux';
import PublicMenu from '../publicMenu/publicMenuComponent'
import * as cartActions from './cartAction'
import spinner from '../spinner/spinner'
import './cart.scss'
import { List, Checkbox, Flex } from 'antd-mobile';
const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;

class CartComponent extends React.Component{
    state = {
        type:false,
        userId: ''
    }
    componentWillMount(){
        if (JSON.parse(window.localStorage.getItem('userInfo'))) {
            var val = JSON.parse(window.localStorage.getItem('userInfo'))[0].userId;
            this.setState({userId: val});
            this.props.getCart(val).then(res=>{

            })
        }
    }
    goback(){
        this.props.router.goBack(-1)
    }
    show() {
        $('.publicMenu2').slideToggle();
        if ($('.publicMenu2').css("display") == 'block') {
            $('.publicMenu2').css({ 'position': 'fixed', 'top': '.67rem' });
        }
    }
    render(){
        return(
            <div id="cart">
                <header>
                    <i className="iconfont icon-back" onClick={this.goback.bind(this)}></i>
                    <p>购物车</p>
                    <i className="iconfont icon-viewgallery" onClick={this.show.bind(this)}></i>
                </header>
                <div className="publicMenu2" style={this.state.type ? { display: 'block' } : { display: 'none' }}>
                    <PublicMenu></PublicMenu>
                </div>
                <div className="cartgoods">
                    {
                        <List>
                            {
                                this.props.result.map((item,idx)=>{
                                    return(
                                        <CheckboxItem key={idx}>
                                            {item.goodName}
                                        </CheckboxItem>
                                    )
                                })
                            }
                        </List>
                    }
                </div>
            </div>
        )
    }
}

let mapToState = function (state) {
    return {
        status: state.cart.status,
        result: state.cart.result || []
    }
}

export default connect(mapToState, cartActions)(CartComponent)