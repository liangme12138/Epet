import React from 'react';
import '../fake/fake.scss'

export default class DriveComponent extends React.Component {
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
                    <h2>手把手教你做驱虫</h2>
                    <i className="iconfont icon-viewgallery"></i>
                </div>
                <div className="specialist-bottom">
                    <div className="details">
                        <div className="img">
                            <img src="../../src/assets/img/specialist/7294b82c9dca4e0443779f738bfd9c38.png" />
                        </div>
                        <div className="img">
                            <img src="../../src/assets/img/specialist/076f5542c0716268896eaf10dc9da1b9.png" />
                        </div>
                        <div className="img">
                            <img src="../../src/assets/img/specialist/076f5542c0716268896eaf10dc9da1b9 (1).png" />
                        </div>
                        <div className="img">
                            <img src="../../src/assets/img/specialist/076f5542c0716268896eaf10dc9da1b9 (2).png" />
                        </div>
                        <div className="img">
                            <img src="../../src/assets/img/specialist/076f5542c0716268896eaf10dc9da1b9 (3).png" />
                        </div>
                        <div className="img">
                            <img src="../../src/assets/img/specialist/076f5542c0716268896eaf10dc9da1b9 (4).png" />
                        </div>
                        <div className="img">
                            <img src="../../src/assets/img/specialist/076f5542c0716268896eaf10dc9da1b9 (5).png" />
                        </div>
                        <div className="img">
                            <img src="../../src/assets/img/specialist/076f5542c0716268896eaf10dc9da1b9 (6).png" />
                        </div>
                        <div className="img">
                            <img src="../../src/assets/img/specialist/2b75ab566492a9215b897c4c101c7e4f(2).png" />
                        </div>
                        <div className="product1 col1">
                            <div className="left">
                                <img src="../../src/assets/img/specialist/6aee3cd41417e1e3ae436a96bba4805d.jpg" />
                            </div>
                            <div className="right">
                                <p>拜耳Bayer 犬用拜宠清 单粒装</p>
                                <span> ￥27.9 <i>￥31.00</i></span>
                                <span>加入购物车</span>
                            </div>

                        </div>
                        <div className="img">
                            <img src="../../src/assets/img/specialist/dd6f1ada7653b9f51c1eed191156760b.png" />
                        </div>
                        <div className="img">
                            <img src="../../src/assets/img/specialist/dd6f1ada7653b9f51c1eed191156760b(1).png" />
                        </div>
                        <div className="img">
                            <img src="../../src/assets/img/specialist/dd6f1ada7653b9f51c1eed191156760b(2).png" />
                        </div>
                        <div className="img">
                            <img src="../../src/assets/img/specialist/2b75ab566492a9215b897c4c101c7e4f.png" />
                        </div>
                        <div className="img">
                            <img src="../../src/assets/img/specialist/2b75ab566492a9215b897c4c101c7e4f(1).png" />
                        </div>
                        <div className="product1 col1">
                            <div className="left">
                                <img src="../../src/assets/img/specialist/36630f75de7d88f6f40b47094b34620b.jpg" />
                            </div>
                            <div className="right">
                                <p>谷登GOLDEN 犬用益生菌进口菌源5gx5袋/盒</p>
                                <span> ￥37.9 <i>￥39.00</i></span>
                                <span>加入购物车</span>
                            </div>

                        </div>
                        <div className="img">
                            <img src="../../src/assets/img/specialist/b81c293ee9de1d9e12daf175fa6e2fe3.png" />
                        </div>
                        <div className="product1 col1">
                            <div className="left">
                                <img src="../../src/assets/img/specialist/560a3dc659c5e3878339494a6c4bf46e.jpg" />
                            </div>
                            <div className="right">
                                <p>医仕高  犬用高能营养膏 120g</p>
                                <span> ￥53.9 <i>￥56.00</i></span>
                                <span>加入购物车</span>
                            </div>

                        </div>
                        <div className="img">
                            <img src="../../src/assets/img/specialist/74b8844bf102223107084265881bedf3.png" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 
