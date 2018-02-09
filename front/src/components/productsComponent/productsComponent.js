import React from 'react';
import {connect} from 'react-redux';
import * as productActions from './productAction'
import spinner from '../spinner/spinner'
import PublicMenu from '../publicMenu/publicMenuComponent'
import './products.scss'
import { Modal, Button,SearchBar, WhiteSpace } from 'antd-mobile';
const alert = Modal.alert;

class ProductsComponent extends React.Component{
    state = {
        type:false,
        filtrate:false,
        userId: '',
        brand:[],
        efficacy:['不限制','蛔虫','球虫','心丝虫'],
        physique: ['不限制', '粉剂', '片剂', '液态'],
        price: ['不限制', '1-20元', '20-50元', '50-80元','80元以上'],
        data:[],
        states:false
    }
    componentWillMount(){
        spinner.loadSpinner();
        if (JSON.parse(window.localStorage.getItem('userInfo'))) {
            this.setState({ userId: JSON.parse(window.localStorage.getItem('userInfo'))[0].userId });
        }
        var val = this.props.router.params.val || this.props.productId;
        if (val.indexOf('tab') != -1 || isNaN(val) == false){
            this.props.getProduct(val).then((res) => {
                var arr = ['全部'];
                res.forEach(item => {
                    if (this.state.brand.indexOf(item.brand) == -1) {
                        arr.push(item.brand);
                        this.setState({ brand: arr });
                    }
                })
                this.setState({ brand: arr });
                this.setState({ data: arr });
                spinner.closeSpinner();
            }).catch(error => {
                spinner.closeSpinner();
            })
        }else if (isNaN(val)){
            this.props.getProduct('', '', '', val).then((res) => {
                spinner.closeSpinner();
            }).catch(error => {
                spinner.closeSpinner();
            })
        }
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }
    
    handleScroll(e) {
        if (document.getElementsByClassName('sort')[0]){
            if (document.documentElement.scrollTop > 240){
                document.getElementsByClassName('sort')[0].style.position = 'fixed';
                document.getElementsByClassName('sort')[0].style.top = 0;
            } else if (document.documentElement.scrollTop < 240){
                document.getElementsByClassName('sort')[0].style.position = 'relative';
            }
        }
    }
    productSkip(){
        this.props.router.push("search");
    }
    goback(){
        this.props.router.goBack(-1);
    }
    show(){
        $('.publicMenu').slideToggle();
    }
    sort(event){
        var name = '';
        var state = '';
        
        if (event.target.innerHTML == "销量"){
            name = 'sale';
            state = 'desc';
            this.setState({ filtrate: false });
            $('.productsMask').css('display', 'none');
        } else if (event.target.innerHTML == "价格") {
            name = 'Price';
            this.setState({ filtrate: false });
            $('.productsMask').css('display', 'none');
            if (event.target.className == 'Price'){
                state = 'desc';
            }else{
                state = 'asc';
            }
            $('.sort1 ul li').eq(2).toggleClass('Price');
        } else if (event.target.className == "defaultsList"){
            this.setState({ states: !this.state.states});
            this.setState({ filtrate: false });
            $('.productsMask').css('display','block');
            if (this.state.states){
                $('.productsMask').css('display', 'none');
            }
            return;
        } else if (event.target.innerText == "筛选"){
            this.setState({ filtrate: !this.state.filtrate });
            $('.productsMask').css('display', 'block');
            this.setState({ states: false });
            if (this.state.filtrate) {
                $('.filtrate').css('display', 'none');
                $('.productsMask').css('display', 'none');
            }
            return;
        }
        spinner.loadSpinner();
        if (this.state.states){
            $('.productsMask').css('display', 'none');
            this.setState({ states: !this.state.states });
        }
        var val = this.props.router.params.val || this.props.productId;
        this.props.getProduct(val,name,state).then((res) => {
            spinner.closeSpinner();
        }).catch(error => {
            spinner.closeSpinner();
        })
    }
    sort1(event){
        var name = '';
        var state = '';
        if (event.target.innerHTML == "人气") {
            name = 'sale';
            state = 'desc';
        } else if (event.target.innerHTML == "最新") {
            name = 'addTime';
            state = 'desc';
        } 
        if (this.state.states) {
            $('.productsMask').css('display', 'none');
            this.setState({ states: !this.state.states });
        }
        spinner.loadSpinner();
        $('.defaultsList').text(event.target.innerHTML);
        var val = this.props.router.params.val || this.props.productId;
        this.props.getProduct(val, name, state).then((res) => {
            spinner.closeSpinner();
        }).catch(error => {
            spinner.closeSpinner();
        })
    }
    sort2(event){
        spinner.loadSpinner();
        var name = '';
        var state = '';
        var val = this.props.router.params.val || this.props.productId;
        if (event.target.innerText == "全部" || event.target.innerText == "不限制"){
            this.props.getProduct(val, name, state).then((res) => {
                spinner.closeSpinner();
            }).catch(error => {
                spinner.closeSpinner();
            })
        }else{
            this.props.getProduct('','','',event.target.innerText).then((res) => {
                spinner.closeSpinner();
            }).catch(error => {
                spinner.closeSpinner();
            })
        }
        spinner.closeSpinner();
        this.setState({ filtrate: !this.state.filtrate });
        $('.filtrate').css('display', 'none');
        $('.productsMask').css('display', 'none');
    }
    sort3(event){
        if (event.target.innerHTML == "品牌"){
            this.setState({data:this.state.brand});
        } else if (event.target.innerHTML == "商品功效"){
            this.setState({ data: this.state.efficacy });
        } else if (event.target.innerHTML == "物理形态") {
            this.setState({ data: this.state.physique });
        } else if (event.target.innerHTML == "价格区间") {
            this.setState({ data: this.state.price });
        }
        $('ul li').removeClass('active');
        event.target.classList.toggle('active');
    }
    productsMask(){
        $('.productsMask').css('display', 'none');
        this.setState({ states: !this.state.states });
    }
    godefail(val,event){
        if (event.target.tagName !== "I"){
            this.props.router.push("/defail/" + val);
        }
    }
    addcart1(){
        if (this.state.userId != '') {
            this.props.addcart1(this.state.userId, this.props.productId, 1, true, 'addcar').then(res => {
                
            })
        }
    }
    render(){
        return (
            <div id="product">
                <header>
                    <i className="iconfont icon-back" onClick={this.goback.bind(this)}></i>
                    <p>商品列表</p>
                    <i className="iconfont icon-viewgallery" onClick={this.show.bind(this)}></i>
                </header>
                <div className="publicMenu" style={this.state.type ? { display: 'block' } : { display: 'none' }}>
                    <PublicMenu></PublicMenu>
                </div>
                <div className="search" onClick={this.productSkip.bind(this)}>
                    <SearchBar placeholder="搜索" />
                </div>
                <div className="sort">
                    <div className="sort1">
                        <ul onClick={this.sort.bind(this)}>
                            <li><span className="defaultsList">默认</span><i className="iconfont icon-moreunfold"></i></li>
                            <li>销量</li>
                            <li className="Price">价格</li>
                            <li>筛选<i className="iconfont icon-moreunfold"></i></li>
                        </ul>
                        <div className="filtrate" style={this.state.filtrate ? { display: 'block' } : { display: 'none' }}>
                            <ul onClick={this.sort3.bind(this)}>
                                <li className="active">品牌</li>
                                <li>商品功效</li>
                                <li>物理形态</li>
                                <li>价格区间</li>
                            </ul>
                            <ul onClick={this.sort2.bind(this)}>
                               {
                                    this.state.data.map((item,idx)=>{
                                        return (
                                            <li key={idx}>{item}</li>
                                        )
                                    })
                               } 
                            </ul>
                        </div>
                        <ul className="defaults" style={this.state.states ? { display: 'block' } : { display: 'none' }} onClick={this.sort1.bind(this)}>
                            <li>默认</li>
                            <li>人气</li>
                            <li>最新</li>
                            <li>评论</li>
                        </ul>
                    </div>
                    <div className="sort2">

                    </div>
                </div>
                <div className="products">
                    <div className="productsMask" onClick={this.productsMask.bind(this)}></div>
                    <ul>
                        {
                            this.props.result.map((item,idx)=>{
                                return (
                                    <li key={idx} onClick={this.godefail.bind(this,item.goodId)}>
                                        <img src={item.ImgUrl} alt=""/>
                                        <div>
                                            <h3>{item.goodName}</h3>
                                            <p className="others">{item.size}</p>
                                            <p className="price">{"￥ "+item.Price}</p>
                                            <p className="sell">{"售出: " + item.sale}</p>
                                        </div>
                                        <Button onClick={this.state.userId ? () => alert('我的萌宠', '已成功添加到购物车!', [
                                            { text: '继续购物', onPress: () => console.log(), style: 'default' },
                                            { text: '去购物车', onPress: () => this.props.router.push("/cart"), style: { fontWeight: 'bold' } },
                                        ]) : () => alert('我的萌宠', '亲！请先登录!', [
                                            { text: '继续逛逛', onPress: () => console.log(), style: 'default' },
                                            { text: '去登录', onPress: () => this.props.router.push("/login"), style: { fontWeight: 'bold' } },
                                        ]) }
                                        ><i className="iconfont icon-cart" onClick={this.addcart1.bind(this)}></i></Button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

let productToState =  (state) => {
    if (state.product.result){
        state.product.result.map((item, idx)=> {
            if (item.sale.length > 4) {
                item.sale = item.sale.slice(0, -4) + "w";
            }
        })
    }
    return {
        status: state.product.status,
        result: state.product.result || [],
        productId: state.product.productId || ''
    }
}

export default connect(productToState, productActions)(ProductsComponent)