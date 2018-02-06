import React from 'react';
import { connect } from 'react-redux';
import * as SnackToysIndexAction from './SnackToysIndexAction';
import action from '../../utils/tab';
import '../dogFoodIndex/dogFoodIndex.scss';
import '../../sass/indexbase.scss';
import  spinner from '../spinner/spinner'
class SnackToysIndexComponet extends React.Component{
    state = {
        Tab: [],
        tabItems: [],
        changeTab: [],
        avtBigId: [],
        avtBigImg: []
    }
    componentWillMount() {
        spinner.loadSpinner();
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
            this.setState({ tabItems: action.TabItem(9, this.state.tabItems, this.props.TabDate) })
            // console.log('tabItems', this.state.tabItems)
            $('#tabs').find('li').eq(0).find('img').attr({ src: this.state.changeTab[0] })
            spinner.closeSpinner();
        }).catch(error => {
            spinner.closeSpinner();
        });
        
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
        });

        this.props.SnackToysMenu()
    }
    toTabItem(id) {
        // 封装--详细请看tab.js文件
        this.setState({ tabItems: action.TabItem(id, this.state.tabItems, this.props.TabDate) })
    }
    tabSmall(idx, eve) {
        this.toTabItem((idx * 1 + 9), this.state.tabItems, this.props.TabDate);
        for (let i = 0; i < this.state.Tab.length; i++) {
            if (i != idx) {
                // console.log($('#tabs').find('li').eq(i))
                $('#tabs').find('li').eq(i).find('img').attr({ src: this.state.Tab[i] })
            }
        }
        $(eve.target).attr({ src: this.state.changeTab[idx] })
    }
    ToActivite(id) {
        // console.log(id); 
        // hashHistory.push('/activite/')
        this.props.router.push("/activite/" + id);
    }
    render(){
      return (
            <div className="dogFood">
                <div className="banner-item-3">
                  <img src={require('../../assets/img/navList/3d82338df309756421fcc4679f371050.jpg')} />
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
                      <li><span>全部</span></li>
                      {
                          this.props.SnackToysMenus.map((item, idx) => {
                              return <li key={idx}><span>{item.classifyName}</span></li>
                          })
                      }
                  </ul>
              </div>
          </div>
        )
    }
}

const mapToState = function (state) {
    console.log('state', state.SnackToysReducer.result3)
    return {
        AjaxTabState: state.SnackToysReducer.status,
        TabDate: state.SnackToysReducer.result1 || [],
        atvPrd: state.SnackToysReducer.result2 || [],
        SnackToysMenus: state.SnackToysReducer.result3 || []
    }
}

export default connect(mapToState, SnackToysIndexAction)(SnackToysIndexComponet);