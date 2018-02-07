import React from 'react';
import { connect } from 'react-redux';
import * as HealthCareIndexAction from './HealthCareIndexAction';
import action from '../../utils/tab'; 
import '../dogFoodIndex/dogFoodIndex.scss';
import HomeBastComponent from '../home/homeBestComponent';
import '../../sass/indexbase.scss';
import spinner from '../spinner/spinner';
import { Modal, Button, SearchBar, WhiteSpace } from 'antd-mobile';

class HealthCareIndexComponent extends React.Component{
    state = {
        Tab: [],
        tabItems: [], 
        changeTab: [],
        avtBigId: [],
        avtBigImg: [],
        datalist:[]
    }
    componentWillMount() {
        spinner.loadSpinner();
        this.props.getIndexMenus().then(() => {
            $('#tabs').find('li').eq(0).find('img').attr({ src: this.props.IndexMenus[0].tabImg2 });
        });
        this.props.getTab(5)
        // ajax 精选品牌数据
        this.props.getBigImg().then(() => {
            this.props.atvPrd.forEach((item) => {
                if (this.state.avtBigId.indexOf(item.activityId) == -1) {
                    this.state.avtBigId.push(item.activityId);
                    this.state.avtBigImg.push(item.activityImg);
                }
            })
            this.setState({ avtBigId: this.state.avtBigId });
            // console.log(this.state.avtBigId)
            this.setState({ avtBigImg: this.state.avtBigImg });
            spinner.closeSpinner();
        }).catch(error => {
            spinner.closeSpinner();
        })

        this.props.HealthCareMenu();
        this.props.getProduct('all').then(res => {
            this.setState({ datalist: res })
        });
    } 
    componentDidMount() {
        $('.all').addClass('active');
    }
    toTabItem(id) {
        // 封装--详细请看tab.js文件
        this.setState({ tabItems: action.TabItem(id, this.state.tabItems, this.props.TabDate) })
    }
    tabSmall(obj, eve) {
        console.log(obj)
        for (let i = 0; i < this.props.IndexMenus.length; i++) {
            if (i != obj.idx) {
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
        console.log('val', val)
        this.props.router.push("/defail/" + val);
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
                    <img src="../src/assets/img/icon/nodata_stance.png" />
                    <p>暂无该类的商品数据!</p>
                </div>
            );
        }
    }
    clickMenu(id, event) {
        console.log(event.target.tagName);
        $('.dogfoodMenuUL li span').removeClass('active');
        event.target.classList.toggle('active');

        this.props.getProduct(id).then((res) => {
            if (res == "fail") {
                this.setState({ datalist: '' })
            } else {
                this.setState({ datalist: res })
            }
        });
    }
    render(){
        return (
            <div className="dogFood">
                <div className="dogFoodMenu">
                    <ul id="tabs">
                        {
                            this.props.IndexMenus.map((item, idx) => {
                                return <li key={idx} data-id={idx} onClick={this.tabSmall.bind(this, { idx: idx, tabId: item.tabId })}><img src={item.tabImg1} /></li>
                            })
                        }
                    </ul>
                    <div className="tabItems">
                        {
                            this.props.TabDate.map((item, idx) => {
                                return <div key={idx} ><img src={item.classifyImg} /></div>
                            })
                        }
                    </div>
                </div>
                <HomeBastComponent Img={['../src/assets/img/navList/d720be7dab61d13745d644d26a0feaef.jpg', '../src/assets/img/navList/5914108edeadbfba0118b6c2ec9a26c1.jpg', '../src/assets/img/navList/b405fedf3e8d3dd537928f8b997a628b.jpg']} active={["drive", "watch", "scarce"]}/>
                <div className="Activites">
                    <h2>
                        <img src="../src/assets/img/navList/ebf85555c851f683bf33cd4c14f7f68b.jpg" />
                    </h2>
                    <div className="Activite">
                        {
                            this.state.avtBigId.map((item, idx) => {
                                return <div className="ActiviteItem" key={idx}>
                                    <div className="ActiviteImg" onClick={this.ToActivite.bind(this, item)}>
                                        <img src={this.state.avtBigImg[idx]} />
                                    </div>
                                    <ul className="ActiviteGoods">
                                        {
                                            this.props.atvPrd.map((item1, index) => {
                                                if (item == item1.activityId) {
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
                <div className="dogfoodMenu">
                    <ul className="dogfoodMenuUL">
                        <li><span className="all" onClick={this.clickMenu.bind(this, 'all')}>全部</span></li>
                        {
                            this.props.getDogFoodMenu.map((item, idx) => {
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
    console.log('state', state.healthcareReducer.result3)
    return {
        AjaxTabState: state.healthcareReducer.status,
        TabDate: state.healthcareReducer.result1 || [],
        atvPrd: state.healthcareReducer.result2 || [],
        getDogFoodMenu: state.healthcareReducer.result3 || [],
        IndexMenus: state.TabsReducer.result6 || []
    }
}

export default connect(mapToState, HealthCareIndexAction)(HealthCareIndexComponent);