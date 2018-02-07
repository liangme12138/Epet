import React from 'react';
import '../fake/fake.scss'

export default class  ClothesComponent extends React.Component {
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
                    <h3>买对衣服，你就是全球最会穿衣的狗狗</h3>
                    <i className="iconfont icon-viewgallery"></i>
                </div>
                <div className="specialist-bottom">
                    <div className="details">
                        <div className="img">
                            <img src="../../src/assets/img/specialist/ffd9fa01269f37ac4d50ea92b877dd0a.jpg@!water" />
                        </div>
                        <div className="img">
                            <img src="../../src/assets/img/specialist/206c4d05926e359f8e2e472f4b82e833.jpg" />
                        </div>
                        <div className="img">
                            <img src="../../src/assets/img/specialist/ce80ada582515228faa1e446d6f1ef2c.jpg" />
                        </div>
                        <div className="img">
                            <img src="../../src/assets/img/specialist/109de52a81537067841c9ccd9757513f.jpg" />
                        </div>
                        <div className="img">
                            <img src="../../src/assets/img/specialist/b21de3440624075e42b47ee53d28d5a5.jpg" />
                        </div>
                        <div className="img">
                            <img src="../../src/assets/img/specialist/1ee62a7dcdd4b3eb0428036535b6fdff.jpg" />
                        </div>
                        <div className="img">
                            <img src="../../src/assets/img/specialist/5fc78b5dfd193428643854e33a1f1243.jpg" />
                        </div>
                        <div className="img">
                            <img src="../../src/assets/img/specialist/2c33b6633f67e58592c8bccb401e5dc8.jpg" />
                        </div>
                        <div className="img">
                            <img src="../../src/assets/img/specialist/be180cc9852ecfafb5ded3e9f8693adc.jpg" />
                        </div>
                        <div className="img">
                            <img src="../../src/assets/img/specialist/da30c10490863f4d30a249db569c9e73.jpg" />
                        </div>
                        <div className="img">
                            <img src="../../src/assets/img/specialist/b522caf64612e867aae1ad64447f75d3.jpg" />
                        </div>
                        <div className="img">
                            <img src="../../src/assets/img/specialist/620173c43174c2dcca3d2b5f58c71370.jpg" />
                        </div>
                        <div className="img">
                            <img src="../../src/assets/img/specialist/b7198ffdff3976bfcb391de438271b2a.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        )
    } 
} 
