import React from 'react';
import '../fake/fake.scss'

export default class FeedComponent extends React.Component {
    state = {

    }
    componentWillMount() {

    }
    back() {
        window.history.back();
    }
    render() {
        return (
            <div className="specialist">
                <div className="specialist-top">
                    <i className="iconfont icon-back" onClick={this.back}></i>
                    <h2>吃事甚大-喂有原则</h2>
                    <i className="iconfont icon-viewgallery"></i>
                </div>
                <div className="specialist-bottom">
                    <div className="details">
                        <div className="img">
                            <img src="../../src/assets/img/specialist/d5bc85c552b9cf64317d8883d8609208.png" />
                        </div>
                        <div className="img">
                            <img src="../../src/assets/img/specialist/e7f3502ba83661bf4aa666938e53a411.png" />
                        </div>
                        <div className="img">
                            <img src="../../src/assets/img/specialist/e7f3502ba83661bf4aa666938e53a411 (1).png" />
                        </div>
                        <div className="img">
                            <img src="../../src/assets/img/specialist/1a6219f6582de03627b2c7b869ae7824.png" />
                        </div>
                        <div className="img">
                            <img src="../../src/assets/img/specialist/1a6219f6582de03627b2c7b869ae7824 (1).png" />
                        </div>
                        <div className="img">
                            <img src="../../src/assets/img/specialist/7ffcc243f9d75a5a8a4c2e38b8ecef10.png" />
                        </div>
                        <div className="img">
                            <img src="../../src/assets/img/specialist/7ffcc243f9d75a5a8a4c2e38b8ecef10 (1).png" />
                        </div>
                        <div className="product1 col">
                            <div className="left">
                                <img src="../../src/assets/img/specialist/23296ae018f6b5e70309210a110dc31d.jpg" />
                            </div>
                            <div className="right">
                                <p></p>
                                <span> ￥65.55 <i>￥69.00</i></span>
                                <span>加入购物车</span>
                            </div>
                        </div>
                        <div className="img">
                            <img src="../../src/assets/img/specialist/26e2f557060d80595925d3f59d9758dc.png" />
                        </div>
                        <div className="img">
                            <img src="../../src/assets/img/specialist/26e2f557060d80595925d3f59d9758dc (1).png" />
                        </div>
                        <div className="img">
                            <img src="../../src/assets/img/specialist/b6f4092908ccac9a2d42bad178159ede.png" />
                        </div>
                        <div className="img">
                            <img src="../../src/assets/img/specialist/b6f4092908ccac9a2d42bad178159ede (1).png" />
                        </div>
                        <div className="product1 col">
                            <div className="left">
                                <img src="../../src/assets/img/specialist/7f9d9c734615da92fa0988a354fd3601.jpg" />
                            </div>
                            <div className="right">
                                <p>宠博士  心型带刻度粮食铲 狗粮量杯 200cc 颜色随机</p>
                                <span> ￥4.55 <i>￥5.00</i></span>
                                <span>加入购物车</span>
                            </div>
                            
                        </div>
                        <div className="img">
                            <img src="../../src/assets/img/specialist/d504b8af1cdba5d6829250a70955d9b7.png " />
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}
