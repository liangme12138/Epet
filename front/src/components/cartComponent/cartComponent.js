import React from 'react';
import { connect } from 'react-redux';
import PublicMenu from '../publicMenu/publicMenuComponent'
import * as cartActions from './cartAction'
import spinner from '../spinner/spinner'
import './cart.scss'
import { Modal, Button,List, Checkbox, Flex } from 'antd-mobile';
const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;
const alert = Modal.alert;

class CartComponent extends React.Component{
    state = {
        num:0,
        type:false,
        momey:'',
        type1:true,
        goodids:[],
        userId: ''
    }
    componentWillMount(){
        if (JSON.parse(window.localStorage.getItem('userInfo'))) {
            var val = JSON.parse(window.localStorage.getItem('userInfo'))[0].userId;
            this.setState({userId: val});
            var data =[];
            this.props.getCart(val).then(res=>{
                for(var i=0;i<res.length;i++){
                    if(res[i].checkedstatus == 'false'){
                        this.setState({type1:false});
                    }else{
                        for (var j = 0; j < res[i].count*1;j++){
                            data.push(res[i].goodId);
                        }
                    }
                }
                this.setState({goodids:data});
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
    godefail(val, event) {
        if (event.target.tagName !== "SPAN" && event.target.tagName !== "INPUT") {
            this.props.router.push("/defail/" + val);
        }else{
            var count = 0;
            for(var i=0;i<this.props.result.length;i++){
                if (this.props.result[i].goodId == val){
                    count = this.props.result[i].count*1;
                }
            }

            if (event.target.innerText == "+") {
                count += 1;
                this.props.addCart(this.state.userId,val,count);
            } else if (event.target.innerText == "-") {
                if (count == 1) {
                    this.props.addCart(this.state.userId, val, count,'del');
                    return;
                }
                count -= 1;
                this.props.addCart(this.state.userId, val, count);
            }
        }
    }
    addcart1() {
        if (this.state.userId != '') {
            this.props.addcart1(this.state.userId, this.props.productId, 1, true, 'addcar').then(res => {

            })
        }
    }
    goorder(){
        // 生成订单号
        var orderId = Date.parse(new Date());
        // 获取ID并将商品ID写进数据库
        var data = [];
        for (var i = 0; i < this.props.result.length; i++) {
            if (this.props.result[i].checkedstatus == 'true'){
                for (var j = 0; j < this.props.result[i].count * 1; j++) {
                    data.push(this.props.result[i].goodId);
                }
            }
        }
        this.props.orderCart(this.state.userId, data, orderId).then(res=>{
            this.props.router.push("/orderDefail/" + orderId);
        });
    }
    checked(val,event){
        if (event.target.className == 'am-checkbox-input'){
            this.props.checkCart(this.state.userId, val).then(res=>{
                var status = true;
                for(var i=0;i<res.length;i++){
                    if(res[i].checkedstatus == 'false'){
                        status = false;
                    }
                    this.setState({ type1: status });
                }
                
            });
        }
    }
    change(val,event){
        var num = event.target;
        this.props.addCart(this.state.userId, val, num.value ).then(res=>{
        });
        
    }
    checkedAll(event){
        var status = '';
        if ($(event.target).closest('span').hasClass('am-checkbox-checked')){
            status = false;
        }else{
            status = true;
        }
        this.props.checkallCart(this.state.userId, status,'check');
        this.setState({type1:status});
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
                            <ul>
                                {
                                    this.props.result != 'fail' ? this.props.result.map((item,idx)=>{
                                        return(
                                            <CheckboxItem key={idx} checked={item.checkedstatus == 'true' ? true : false} onClick={this.checked.bind(this,item.goodId)}>
                                                <li key={idx} onClick={this.godefail.bind(this, item.goodId)}>
                                                    <img src={item.ImgUrl} alt="" />
                                                    <div>
                                                        <h3>{item.goodName}</h3>
                                                        <p className="others">{item.size}</p>
                                                        <p className="price">{"￥ " + item.Price}</p>
                                                        <p className="num1"><span>-</span><input type="text" className={item.goodId} value={item.count} onChange={this.change.bind(this, item.goodId)}/><span>+</span></p>
                                                    </div>
                                                </li>
                                            </CheckboxItem>
                                        )
                                    }) : ''
                                }
                            </ul>
                        </List>
                    }
                </div>
                <footer>
                    <div className="footerCart"><CheckboxItem checked={this.state.type1} onClick={this.checkedAll.bind(this)}>总额： <span>{"￥" + this.props.money}</span></CheckboxItem></div>
                    <div className="footerCart1" onClick={this.goorder.bind(this)}>去结算({this.props.num})</div>
                </footer>
            </div>
        )
    }
}

let mapToState = function (state) {
    var arr = [];
    var money1 = 0;
    var num = 0;
    if (state.cart.result){
        arr = state.cart.result;
        // for (var i = 0; i < arr.length;i++){
        //     for (var j = i+1; j < arr.length; j++){
        //         if (arr[i].goodId == arr[j].goodId){
        //             arr[i].count = arr[j].count*1 + arr[i].count*1;
        //             arr.splice(j,1);
        //             j--;
        //         }
        //     }
        // }
        
        for(var i=0;i<arr.length;i++){
            if (arr[i].checkedstatus == 'true'){
                money1 += arr[i].Price*1 * arr[i].count*1;
                num += arr[i].count * 1;
            }
        }
    }
    return {
        status: state.cart.status,
        money: money1,
        num: num,
        result: state.cart.result || []
    }
}

export default connect(mapToState, cartActions)(CartComponent)