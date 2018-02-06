import React from 'react';
import { connect } from 'react-redux';
import * as dogCostumeIndexAction from './dogCostumeIndexAction';
import './dogCostumeIndex.scss';
import '../../sass/indexbase.scss';

class DogCostumeIndexComponent extends React.Component{
    state = {
        avtBigId: [],
        avtBigImg: [],
        atvName:[],
        atvReferral:[]

    }
    componentWillMount() {
        // console.log('componentWillMount');
        this.props.getTab();
        this.props.getBigImg().then(() => {
            this.props.atvPrd.forEach((item) => {
                if (this.state.avtBigId.indexOf(item.activityId) == -1) {
                    this.state.avtBigId.push(item.activityId);
                    this.state.avtBigImg.push(item.activityImg);
                    this.state.atvName.push(item.activityName);
                    this.state.atvReferral.push(item.referral);
                }
            })
            this.setState({ avtBigId: this.state.avtBigId });
            // console.log(this.state.avtBigId)
            this.setState({ avtBigImg: this.state.avtBigImg });
            this.setState({ atvName: this.state.atvName });
            this.setState({ atvReferral: this.state.atvReferral });
            
            console.log('this', this.state.avtBigId)
        })
        // this.props.getDogFoodMenu();

    }
    aa(eve){
        // console.log(e)
        // $(eve.target).on("click",function(){
            // $(eve.target).animate({
            //     width:500
            // }).siblings('img').animate({width: 400});
        //   });
    }
    render(){
        return (
            <div className="dogCostume">
                <div className="banner-item-3">
                    <img src="https://img2.epetbar.com/nowater/2018-01/22/16/16acd5a53c17914bb26723a799680f51.jpg" />

                </div>
                <div className="tabMenus">
                    <ul>
                        {
                            this.props.TabDate.map(function(item,idx){
                                return  <li key={idx}>
                                            <span>
                                                <img src={item.classifyImg}/>
                                            </span>
                                            <span>{item.classifyName}</span>
                                        </li>
                            })
                        }
                       <li>
                            <span>
                                <img src="../src/assets/img/food/7a36a3a3b2ed66a888462a0ceaa702ef.png"/>
                            </span>
                            <span>更多</span>
                        </li>
                    </ul>
                </div>
                <div className="costumeOther">
                    <div className="Other-item-1">
                        <img src="../src/assets//img//navList//22bf3a2c0f094e861ebd86491627945a.jpg"/>
                    </div>
                    <div className="Other-item-1">
                        <img src="../src/assets//img//navList//d2efde3e7cf1b72e9eb0f7d1732e08f2.jpg"/>
                    </div>
                </div>
                <div className="shishang">
                    <div className="shishang-top">
                        <h2>时尚大牌</h2>
                        <p>尖货品质  深度折扣</p>
                    </div>
                    <ul onTouchEnd={this.aa.bind(this)}>
                        <li>
                            <div className="img">
                                <img src="../src/assets/img/61d7525eca35a3b739809ce675eb24be.jpg"/>
                            </div>
                            <span>Touchdog拥有强大设计团队，以设计风格时尚和潮流著称。强调美观及舒适性，把日式卡通及涂鸦融入产品，把宠物打造为一个时尚、潮流、可爱的宝贝。</span>
                        </li>
                        <li>
                            <div className="img">
                                <img src="../src/assets/img/61d7525eca35a3b739809ce675eb24be.jpg"/>
                            </div>
                            <span>Touchdog拥有强大设计团队，以设计风格时尚和潮流著称。强调美观及舒适性，把日式卡通及涂鸦融入产品，把宠物打造为一个时尚、潮流、可爱的宝贝。</span>
                        </li>
                        <li>
                            <div className="img">
                                <img src="../src/assets/img/61d7525eca35a3b739809ce675eb24be.jpg"/>
                            </div>
                            <span>Touchdog拥有强大设计团队，以设计风格时尚和潮流著称。强调美观及舒适性，把日式卡通及涂鸦融入产品，把宠物打造为一个时尚、潮流、可爱的宝贝。</span>
                        </li>
                        <li>
                            <div className="img">
                                <img src="../src/assets/img/61d7525eca35a3b739809ce675eb24be.jpg"/>
                            </div>
                            <span>Touchdog拥有强大设计团队，以设计风格时尚和潮流著称。强调美观及舒适性，把日式卡通及涂鸦融入产品，把宠物打造为一个时尚、潮流、可爱的宝贝。</span>
                        </li>
                    </ul>
                </div>
                <div className="Activites">
                    <div className="styleAtv-top">
                        <h2>流行风格</h2>
                        <p>好货不贵  做个有腔调的汪</p>
                    </div>
                    <div className="Activite">
                        {
                            this.state.avtBigId.map((item,idx)=>{
                                return <div className="ActiviteItem" key={idx}>
                                    <div className="ActiviteImg">
                                        <div className="itemImg">
                                            <img src="../src/assets/img/icon/bgimg.png" />
                                            <div className="atvMes">
                                                <h2>{this.state.atvName[idx]}</h2>
                                                <p>{this.state.atvReferral[idx]}</p>
                                                <span>精选商品31件<i></i></span>
                                            </div>
                                        </div>
                                        <img src={this.state.avtBigImg[idx]} />
                                    </div>
                                    <ul className="ActiviteGoods">
                                        {
                                            this.props.atvPrd.map((item1, index) => {
                                                if (item == item1.activityId) {
                                                    return <li key={index}>
                                                        <div className="goodImg">
                                                            <i></i>
                                                            <img src={item1.goodImgUrl} />
                                                        </div>
                                                        <div className="goodmsg">
                                                            <p>{item1.goodName}</p>
                                                            <span>￥{item1.Price}<i>${item1.originPrice}</i></span>
                                                        </div>
                                                    </li>
                                                        
                                                }
                                                
                                            })
                                        }
                                        <li>
                                            <img src="../src/assets/img/active/goods/more.jpg"/>
                                        </li>
                                    </ul>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className="hotProduct">
                    <div className="hotProduct-top">
                        <h2>热门品类</h2>
                        <p>高颜值好物</p>
                    </div>
                    <div className="hotProducts">
                        <div className="hotProductItem">
                            <div className="hotProductItem-top">
                                <span>
                                    <i className="iconfont icon-majiazhuanhuan"></i>
                                    <span>马甲</span>
                                    <span>153款商品</span>
                                </span>
                                <span>VIEW MORE ></span>
                            </div>
                            <ul>
                                <li>
                                    <img src="../src/assets/img/active/goods/064641df58382472469aa2ffe8f3fa0c.jpg"/>
                                </li>
                                <li>
                                    <img src="../src/assets/img/active/goods/064641df58382472469aa2ffe8f3fa0c.jpg" />
                                </li>
                                <li>
                                    <img src="../src/assets/img/active/goods/064641df58382472469aa2ffe8f3fa0c.jpg" />
                                </li>
                                <li>
                                    <img src="../src/assets/img/active/goods/064641df58382472469aa2ffe8f3fa0c.jpg" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapToState = function (state) {
    // console.log('state',state.CostumeReducer)
    return {
        AjaxTabState: state.CostumeReducer.status,
        TabDate: state.CostumeReducer.result1 || [], 
        atvPrd: state.CostumeReducer.result2 || []
    }
}

export default connect(mapToState, dogCostumeIndexAction)(DogCostumeIndexComponent)