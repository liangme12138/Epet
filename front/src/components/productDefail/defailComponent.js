import React from 'react';
import { connect } from 'react-redux';
import PublicMenu from '../publicMenu/publicMenuComponent'
import * as defailActions from './defailComponentAction'
import spinner from '../spinner/spinner'
import './defailComponent.scss'
import { Modal, Button, SearchBar, WhiteSpace } from 'antd-mobile';
const alert = Modal.alert;

class DefailComponent extends React.Component{
    state = {
        num:1,
        numDefail:0,
        userId:'',
        type:false
    }
    componentWillMount() {
        spinner.loadSpinner();
        if (JSON.parse(window.localStorage.getItem('userInfo'))){
            this.setState({ userId: JSON.parse(window.localStorage.getItem('userInfo'))[0].userId});
            var val = JSON.parse(window.localStorage.getItem('userInfo'))[0].userId;
            // 判断商品是否被收藏
            this.props.collectDefail(val, this.props.goodId, 'collect').then(res=>{
                if(res == "ok"){
                    $('.icon-favoritesfilling').addClass('active');
                }
            })
            // 获取购物车商品数量
            this.props.cartDefail(val,'cart').then(res=>{
                if (res[0].count){
                    var count = 0;
                    for(var i=0;i<res.length;i++){
                        count += res[i].count*1
                    }
                    this.setState({ numDefail: count});
                }
            })
        }
        var id = this.props.router.params.goodId || this.props.goodId;
        this.props.getDefail(id).then(res=>{
            $('.num').val(1);
            $("#defail")[0].scrollTo(0, 0);
            spinner.closeSpinner();
        }).catch(error => {
            spinner.closeSpinner();
        });
    }
    goback() {
        this.props.router.goBack(-1);
    }
    show() {
        $('.publicMenu1').slideToggle();
        if ($('.publicMenu1').css("display") == 'block'){
            $('.publicMenu1').css({'position':'fixed','top':'.67rem'});
        }
    }
    add(event){
        if (event.target.innerText == "+"){
            var num = this.state.num*1 + 1;
            $('.num').val(num);
            this.setState({ num: num });
        } else if (event.target.innerText == "-"){
            if (this.state.num == 1){
                return;
            }
            var num = this.state.num - 1;
            $('.num').val(num);
            this.setState({ num: num });
        }
    }
    change(val){
        this.setState({ num: val.target.value})
    }
    check(event){
        console.log(this.props.goodId)
        if(this.state.userId){
            if (event.target.parentNode.className == 'favorites'){
                $('.icon-favoritesfilling').toggleClass('active');
                if ($('.icon-favoritesfilling').hasClass('active')){
                    this.props.Defail(this.state.userId,this.props.goodId,'add');
                }else{
                    this.props.Defail(this.state.userId,this.props.goodId, 'del');
                }
            } else if (event.target.parentNode.className == 'cart') {
                this.props.router.push('cart');
            }
        }
    }
    addCar(event){
        // console.log($(event.target).closest('.defailCart'))
        if ($(event.target).closest('.defailCart')){
            this.props.addcartDefail(this.state.userId, this.props.goodId, this.state.num, true, 'addcar').then(res=>{
                if(res == "ok"){
                    var num = this.state.numDefail*1 + this.state.num*1;
                    this.setState({ numDefail: num });
                }
            })
        }
    }
    render(){
        return(
            <div id="defail">
                <header>
                    <i className="iconfont icon-back" onClick={this.goback.bind(this)}></i>
                    <p><span>商品详情</span></p>
                    <p><span>评论</span></p>
                    <i className="iconfont icon-viewgallery" onClick={this.show.bind(this)}></i>
                </header>
                <div className="publicMenu1" style={this.state.type ? { display: 'block' } : { display: 'none' }}>
                    <PublicMenu></PublicMenu>
                    <span className="headerNum" id="numDefaill">{this.state.numDefail}</span>
                </div>
                <div className="defailPro">
                    {
                        this.props.result.map((item,idx)=>{
                            return(
                                <div key={idx}>
                                    <img src={item.ImgUrl || item.goodImgUrl} alt=""/>
                                    <p>{item.goodName}</p>
                                    <p>{item.describe}</p>
                                    <p><span>{'￥' + item.Price}</span><del>{'￥' + item.originPrice}</del></p>
                                    <div>
                                        <p>购买数量：</p>
                                        <p onClick={this.add.bind(this)}><span>-</span><input type="text" onChange={this.change.bind(this)} className="num"/><span>+</span></p>
                                    </div>
                                    <img src="../../src/assets/img/defail/productDetail2.jpg" alt="" />
                                    <img src="../../src/assets/img/defail/productDetail3.jpg" alt="" />
                                    <img src="../../src/assets/img/defail/productDetail0.jpg" alt="" />
                                    <img src="../../src/assets/img/defail/productDetail1.jpg" alt=""/>
                                    <div className="footDefail">
                                        <div onClick={this.check.bind(this)}>
                                            <Button id="btn" onClick={this.state.userId == '' ? () => alert('我的萌宠', '亲！请先登录!', [
                                                { text: '继续逛逛', onPress: () => console.log(), style: 'default' },
                                                { text: '去登录', onPress: () => this.props.router.push("/login"), style: { fontWeight: 'bold' } },
                                            ]) : ''}>
                                                <div className="favorites">
                                                    <i className="iconfont icon-favoritesfilling"></i><span>收藏</span>
                                                </div>
                                            </Button>
                                            <Button id="btn" onClick={this.state.userId == '' ? () => alert('我的萌宠', '亲！请先登录!', [
                                                { text: '继续逛逛', onPress: () => console.log(), style: 'default' },
                                                { text: '去登录', onPress: () => this.props.router.push("/login"), style: { fontWeight: 'bold' } },
                                            ]) : ''}>
                                                <div className="cart">
                                                    <i className="iconfont icon-cart"></i><span>购物车</span>
                                                    <span className="numDefail" id="numDefail">{this.state.numDefail}</span>
                                                </div>
                                            </Button>
                                        </div>
                                        <div className="defailCart" onClick={this.addCar.bind(this)}><Button onClick={this.state.userId !== '' ?() => alert('我的萌宠', '已成功添加到购物车!', [
                                            { text: '继续购物', onPress: () => console.log(), style: 'default' },
                                            { text: '去购物车', onPress: () => this.props.router.push("/cart"), style: { fontWeight: 'bold' } },
                                        ]) : () => alert('我的萌宠', '亲！请先登录!', [
                                            { text: '继续逛逛', onPress: () => console.log(), style: 'default' },
                                            { text: '去登录', onPress: () => this.props.router.push("/login"), style: { fontWeight: 'bold' } },
                                        ])}
                                        >加入购物车</Button></div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

let mapToState = function (state) {
    console.log(state.defail)
    return {
        status: state.defail.status,
        result: state.defail.result || [],
        goodId: state.defail.goodId || ''
    }
}

export default connect(mapToState, defailActions)(DefailComponent)