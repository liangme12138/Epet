import React from 'react';
import '../fake/fake.scss'

export default class FakeComponent extends React.Component {
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
                    <h2>怎样才能选到搞品质的狗粮？</h2>
                    <i className="iconfont icon-viewgallery"></i>
                </div>
                <div className="specialist-bottom">
                    <div className="details">
                        <div className="img">
                            <img src="../../src/assets/img/specialist/70d4116c7a41f4b7f7e76460884273ad.png"  />
                        </div>
                        <div className="img">
                            <img src="../../src/assets/img/specialist/e2ad7e4c96d27e3cd244a22bf6a39408.png" />
                        </div>
                        <div className="img">
                            <img src="../../src/assets/img/specialist/7abfa90d73526f422d48703bb79e902b.png" />
                        </div>
                        <div className="img">
                            <img src="../../src/assets/img/specialist/b5ec806b891a38b2f5dc1011d1a13c7a.png" />
                        </div>
                        <div className="img">
                            <img src="../../src/assets/img/specialist/fe529c84948b5849cf4090127618857b.png" />
                        </div>
                        
                        </div>
                  
                </div>
            </div>
        )
    }
}
