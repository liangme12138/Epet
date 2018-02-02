import React from 'react'
// import { connect } from 'react-redux';
import { List, InputItem, WhiteSpace, Button } from 'antd-mobile';
import './mine.scss'
export default class Mine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }
    render() {
        return (
            <div id="sm_mine">
                <header className="header" style={{ background: "url('../../src/assets/img/login/mine.jpg') no-repeat", backgroundSize: "100% 100%" }}>
                    <div className="top">
                        <p><span style={{ background: "url('../../src/assets/img/login/newn.png') no-repeat" }}></span><span style={{ background: "url('../../src/assets/img/login/setting.png') no-repeat" }}></span></p>
                    </div>
                    <div className="status">
                        <div className="headimg"><img src="../../src/assets/img/login/1.jpg" alt="" /></div>
                        <div className="users">
                            <p>dfsfsaf</p>
                            <span>爱宠V星球</span>
                        </div> 
                    </div>
                    <div className="qian"><img src="../../src/assets/img/login/signin.png" alt=""/></div>
                    
                </header>
                <ul className="nav"></ul>
                <div className="pit"></div>
                <div className="lis"></div>
                <div className="btn-container">
                    <Button className="btn" type="primary" onClick={this.login1}>退出</Button>
                </div>
                
            </div>
        )
    }
}

