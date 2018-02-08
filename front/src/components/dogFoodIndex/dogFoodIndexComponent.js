import React from 'react';
import { connect } from 'react-redux';
import * as dogFoodIndexAction from './dogFoodIndexAction'; 
import '../dogFoodIndex/dogFoodIndex.scss';
import action from '../../utils/tab'
import HomeBastComponent from '../home/homeBestComponent';
import '../../sass/indexbase.scss';
import spinner from  '../spinner/spinner';
import { Modal, Button, SearchBar, WhiteSpace } from 'antd-mobile';
import {lxCarousel}  from '../../utils/banner'

class DogFoodIndexComponent extends React.Component{
    state = {
        Tab:[],
        tabItems:[],
        changeTab:[],
        avtBigId:[],
        avtBigImg:[],
        cateID:[1,2,3,4,5],
        datalist:[]
    }
    componentWillMount(){ 
       
        this.props.getIndexMenus().then(() => {
            $('#tabs').find('li').eq(0).find('img').attr({ src: this.props.IndexMenus[0].tabImg2 });
        });
        this.props.getTab('tabId1')
        // ajax 精选品牌数据
        this.props.getBigImg().then(()=>{
            this.props.atvPrd.forEach((item)=>{
                if (this.state.avtBigId.indexOf(item.activityId) == -1){
                    this.state.avtBigId.push(item.activityId);
                    this.state.avtBigImg.push(item.activityImg);
                }
            })
            this.setState({ avtBigId: this.state.avtBigId});
            // console.log(this.state.avtBigId)
            this.setState({ avtBigImg: this.state.avtBigImg });
            // spinner.closeSpinner();
        })
        this.props.getDogFoodMenu();
        // 获取商品
        this.props.getProduct('all').then(res=>{
            this.setState({ datalist:res})
        });
        
    }
    product(val) {
        this.props.router.push('/product/' + val);
    }
    componentDidMount(){
        $('.all').addClass('active');
        
        $('.carousel').lxCarousel({
            imgs: ["../src/assets/img/navList/a4a9af65943791fd74db9a5ae3cb38b7.png"],
            wufeng: true
        })
    }

    tabSmall(obj,eve){
        for(let i=0;i<this.props.IndexMenus.length;i++){
            if(i != obj.idx){
                $('#tabs').find('li').eq(i).find('img').attr({ src: this.props.IndexMenus[i].tabImg1 })
            }
        }
        $(eve.target).attr({ src: this.props.IndexMenus[obj.idx].tabImg2 });
        this.props.getTab(obj.tabId);
    }
    ToActivite(id) {
        this.props.router.push("/activite/" + id);
    }
    godefail(val) {
        // console.log('val', val)
        this.props.router.push("/defail/" + val);
    }
    // ToProductList(id){
    //     console.log(id)
    // }
    clickMenu(id, event){
        // console.log(event.target.tagName);
        $('.dogfoodMenuUL li span').removeClass('active');
        event.target.classList.toggle('active');

        this.props.getProduct(id).then((res)=>{
            if (res == "fail"){
                this.setState({ datalist: '' })
            } else {
                this.setState({ datalist: res })
            }
        });
    }
    renderUserMessage() {
        if (this.state.datalist !== '') {
            return (
                <div className="products">
                    <div className="productsMask"></div>
                    <ul>
                        {
                            this.state.datalist.map((item, idx) => {
                                return (
                                    <li key={idx} onClick={this.godefail.bind(this, item.goodId)}>
                                        <img src={item.ImgUrl} alt="" />
                                        <div>
                                            <h3>{item.goodName}</h3>
                                            <p className="others">{item.size}</p>
                                            <p className="price">{"￥ " + item.Price}</p>
                                            <p className="sell">{"售出: " + item.sale}</p>
                                        </div>
                                        <Button onClick={() => alert('我的萌宠', '已成功添加到购物车!', [
                                            { text: '继续购物', onPress: () => console.log(), style: 'default' },
                                            { text: '去购物车', onPress: () => this.props.router.push("/cart"), style: { fontWeight: 'bold' } },
                                        ])}
                                        ><i className="iconfont icon-cart"></i></Button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            );
        } else {
            return (
                <div className="DataError">
                    <img src="../src/assets/img/icon/nodata_stance.png"/>
                    <p>暂无该类的商品数据!</p>
                </div>
            );
        }
    }
    render(){
        return(
            <div className="dogFood" id="page">
                <div className="banner-item-2"> 
                    <div className="carousel">
                      
                    </div>
                </div>
                <div className="dogFoodMenu">
                    <ul id="tabs">
                        {
                            this.props.IndexMenus.map((item,idx)=>{
                                return <li key={idx} data-id={idx} onClick={this.tabSmall.bind(this, { idx: idx, tabId: item.tabId})}><img src={item.tabImg1}/></li>
                            })
                        }
                    </ul>
                    <div className="tabItems">
                        {
                            this.props.TabDate.map((item, idx) => {
                                return <div key={idx} onClick={this.product.bind(this, item.tabId)}><img src={item.classifyImg} /></div>
                            })
                        }
                    </div>
                </div>
                <HomeBastComponent Img={['../src/assets/img/navList/5df340d068e4bc97759d801edcd5ac19.jpg', '../src/assets/img/navList/6ebc7bc52a02cc2fb2d725dd9ebe58aa.jpg', '../src/assets/img/navList/e8fa7e93ded2be02792cbade66353832.jpg']} active={["fake", "HighQuality","feed"]}/>
                <div className="Activites">
                    <h2>
                        <img src="../src/assets/img/navList/ebf85555c851f683bf33cd4c14f7f68b.jpg"/>
                    </h2>
                    <div className="Activite">
                        {
                            this.state.avtBigId.map((item,idx)=>{
                                return <div className="ActiviteItem" key={idx}>
                                    <div className="ActiviteImg" onClick={this.ToActivite.bind(this, item)}>
                                                <img src={this.state.avtBigImg[idx]} />
                                            </div>
                                            <ul className="ActiviteGoods">
                                                {
                                                    this.props.atvPrd.map((item1,index)=>{
                                                if (item == item1.activityId){
                                                    return <li key={index} onClick={this.godefail.bind(this, item1.activitygoodId)}>
                                                        <div className="goodImg">
                                                            <i></i>
                                                            <img src={item1.goodImgUrl} />
                                                        </div>
                                                        <div className="goodmsg">
                                                            <p>{item1.goodName}</p>
                                                            <span>￥{item1.Price}</span>
                                                        </div>
                                                    </li>
                                                        }
                                                    })
                                                }
                                        <li onClick={this.ToActivite.bind(this, item)}>
                                            <h3>查看全部</h3>
                                            <span>SEE ALL</span>
                                        </li>
                                    </ul>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className="dogfoodMenu menus">
                    <ul className="dogfoodMenuUL">
                        <li><span className="all" onClick={this.clickMenu.bind(this,'all')}>全部</span></li>
                        {
                            this.props.dogFoodMenu.map((item,idx)=>{
                                return <li key={idx}><span onClick={this.clickMenu.bind(this, item.classify2Id)}>{item.classifyName}</span></li>
                            })
                        }
                    </ul>
                </div>
                {this.renderUserMessage()}
            </div>
        )
    }
}

const mapToState = function (state) {
    console.log('state', state.TabsReducer)
    return {
        AjaxTabState: state.TabsReducer.status,
        TabDate: state.TabsReducer.result1 || [],
        atvPrd: state.TabsReducer.result2 || [],
        dogFoodMenu: state.TabsReducer.result4 || [],
        IndexMenus: state.TabsReducer.result6 || []
    }
}

export default connect(mapToState, dogFoodIndexAction)(DogFoodIndexComponent);