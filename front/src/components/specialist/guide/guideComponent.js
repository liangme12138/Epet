import React from 'react';
import './guid.scss'

export default class GuideComponent extends React.Component {
    state = {

    }
    componentWillMount() {

    }
    back() {
        window.history.back();
    }
    render() {
        return (
            <div className="Guide">
                <div className="Guide-top">
                    <i className="iconfont icon-back" onClick={this.back}></i>
                    <img src="../../src/assets/img/specialist/banner.jpg"/>
                </div>
                <div className="Guide-title">
                    <h1>E宠国际</h1>
                    <p>ABOUT EPETHK</p>
                    <div className="Guide-infor">
                        <p>E宠国际自建资深买手团队亲赴海外原产地，为宠物家长精挑洗选高品质尖货、好货，只为把全球各地精致养宠的生活方式带给中国养宠家庭。</p>
                        <span><img src="../../src/assets/img/specialist/con1.png"/></span>
                    </div>
                    <div className="Guide-infor">
                        
                        <span><img src="../../src/assets/img/specialist/con2.png"/></span>
                        <p>同时，E宠国际深入商品原产地与品牌方、优质供应商合作,制定严苛的采购流程，专业团队层层把关，从源头控制品质，保障所售商品100%正品。</p>
                    </div>
                    <div className="img">
                        <img src="../../src/assets/img/specialist/brands.png"/>
                    </div>
                    <h1>E宠国际服务</h1>
                    <p>SERVICE & SUPPORT</p>
                    <div className="infor">
                        <span>发现全球好货 为每个养宠家庭创造无限美好</span>
                        <span>海外直供，全程海关监管，预计15-25个工作日送达</span>
                        <span>(注：海关周末和法定节假日休息。包裹会自动依时顺延)</span>
                    </div>
                    <div className="img">
                        <img src="../../src/assets/img/specialist/baozhang.png"/>
                    </div>
                    <div className="img">
                        <img src="../../src/assets/img/specialist/buy.jpg"/>
                    </div>
                    <h1>尽享全球养宠美好生活</h1>
                    <p>ENJOY YOUR PETS WORLDWIDE</p>
                </div>
            </div>
        )
    }
}
