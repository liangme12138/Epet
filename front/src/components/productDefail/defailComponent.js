import React from 'react';
import { connect } from 'react-redux';
import PublicMenu from '../publicMenu/publicMenuComponent'
import * as defailActions from './defailComponentAction'
import spinner from '../spinner/spinner'
import './defailComponent.scss'


class DefailComponent extends React.Component{
    state = {
        num:1,
        type:false
    }
    componentWillMount() {
        spinner.loadSpinner();
        var id = this.props.router.params.goodId || this.props.goodId;
        this.props.getDefail(id).then(res=>{
            $('.num').val(1);
            // $(".defailPro")[0].scrollTo(0, 0);
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
                </div>
                <div className="defailPro">
                    {
                        this.props.result.map((item,idx)=>{
                            return(
                                <div key={idx}>
                                    <img src={item.ImgUrl} alt=""/>
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
                                        <div>
                                            <div><i className="iconfont icon-favoritesfilling"></i><span>收藏</span></div>
                                            <div><i className="iconfont icon-cart"></i><span>购物车</span></div>
                                        </div>
                                        <div className="defailCart">加入购物车</div>
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
    return {
        status: state.defail.status,
        result: state.defail.result || [],
        goodId: state.defail.goodID || ''
    }
}

export default connect(mapToState, defailActions)(DefailComponent)