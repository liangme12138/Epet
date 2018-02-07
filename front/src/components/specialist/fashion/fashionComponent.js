import React from 'react';
import '../fake/fake.scss'

export default class FashionComponent extends React.Component {
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
          <h2>超暖卫衣，9.9元带回家！</h2>
          <i className="iconfont icon-viewgallery"></i>
        </div>
        <div className="specialist-bottom">
          <div className="details">
            <div className="img">
              <img src="../../src/assets/img/specialist/5c59c41a44ea74fffcb22909de7b27b2.jpg" />
            </div>
            <div className="img">
              <img src="../../src/assets/img/specialist/cdbbd9d2fdd49718785a88b1fa790ab3.jpg" />
            </div>
            <div className="img">
              <img src="../../src/assets/img/specialist/e0a23cd491037199c3e3f0d7438f14de.jpg" />
            </div>
            <div className="img">
              <img src="../../src/assets/img/specialist/bd910ae72f8b42c917086dd6a16ff67c.jpg" />
            </div>
           
  
          </div>
        </div>
      </div>
    )
  } 
} 
