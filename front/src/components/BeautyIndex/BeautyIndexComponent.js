import React from 'react';
import { connect } from 'react-redux';
import * as BeautyIndexAction from './BeautyIndexAction';
import '../../sass/indexbase.scss';
import action from '../../utils/tab';
// import './BeautyIndex.scss'
import { Modal, Button, SearchBar, WhiteSpace } from 'antd-mobile';

class BeautyIndexComponent extends React.Component {
  state = {
    Tab: [],
    tabItems: [],
    changeTab: [],
    avtBigId: [],
    avtBigImg: [],
    datalist: []
  }
  componentWillMount() {
    //ajax tab菜单数据
    this.props.getTab().then(() => {
      // console.log('aa', this.props.TabDate)
      this.props.TabDate.forEach((item) => {
        if (this.state.Tab.indexOf(item.tabImg1) == -1) {
          this.state.Tab.push(item.tabImg1);
          this.state.changeTab.push(item.tabImg2)
        }
      })
      this.setState({ Tab: this.state.Tab })
      this.setState({ changeTab: this.state.changeTab })
      // console.log(' this.state.changeTab', this.state.changeTab)
      // 封装函数
      // this.toTabItem(1);
      this.setState({ tabItems: action.TabItem(17, this.state.tabItems, this.props.TabDate) })
      // console.log('tabItems', this.state.tabItems)
      $('#tabs').find('li').eq(0).find('img').attr({ src: this.state.changeTab[0] })
    }); 

    this.props.BeautyMenu();
    // 获取商品
    this.props.getProduct('all').then(res => {
      this.setState({ datalist: res })
    });
  }
  toTabItem(id) {
    // 封装--详细请看tab.js文件
    this.setState({ tabItems: action.TabItem(id, this.state.tabItems, this.props.TabDate) })
  }
  tabSmall(idx, eve) {
    this.toTabItem((idx * 1 + 17), this.state.tabItems, this.props.TabDate);
    for (let i = 0; i < this.state.Tab.length; i++) {
      if (i != idx) {
        // console.log($('#tabs').find('li').eq(i))
        $('#tabs').find('li').eq(i).find('img').attr({ src: this.state.Tab[i] })
      }
    }
    $(eve.target).attr({ src: this.state.changeTab[idx] })
  }
  componentDidMount() {
    $('.all').addClass('active');
  }
  godefail(val) {
    console.log('val', val)
    this.props.router.push("/defail/" + val);
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
  render() {
    return (
      <div className="dogFood">
        <div className="banner-item-3">
          <img src={require('../../assets/img/navList/676d37a188b262942db271ccdb4e7049.png')} />
        </div>
        <div className="dogFoodMenu">
          <ul id="tabs">
            {
              this.state.Tab.map((item, idx) => {
                return <li key={idx} data-id={idx} onClick={this.tabSmall.bind(this, idx)}><img src={item} /></li>
              })
            }
          </ul>
          <div className="tabItems">
            {
              this.state.tabItems.map((item, idx) => {
                return <div key={idx}><img src={item} /></div>
              })
            }
          </div>
        </div>
        {/* <div className="Activites">
          <h2>
            <img src="../src/assets/img/navList/ebf85555c851f683bf33cd4c14f7f68b.jpg" />
          </h2>
          <div className="Activite">
            {
              this.state.avtBigId.map((item, idx) => {
                return <div className="ActiviteItem" key={idx}>
                  <div className="ActiviteImg">
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
                              <span>￥{item1.Price}</span>
                            </div>
                          </li>
                        }
                      })
                    }
                  </ul>
                </div>
              })
            }
          </div>
        </div> */}
        <div className="dogfoodMenu">
          <ul className="dogfoodMenuUL">
            <li><span className="all"  onClick={this.clickMenu.bind(this, 'all')}>全部</span></li>
            {
              this.props.BeautyMenus.map((item, idx) => {
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
  console.log('state', state.BeautyIndexReducer.result1)
  return {
    AjaxTabState: state.BeautyIndexReducer.status,
    TabDate: state.BeautyIndexReducer.result1 || [],
    atvPrd: state.BeautyIndexReducer.result2 || [],
    BeautyMenus: state.BeautyIndexReducer.result3 || []
  }
}

export default connect(mapToState, BeautyIndexAction)( BeautyIndexComponent)