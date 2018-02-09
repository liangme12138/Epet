import React from 'react';
// import socket from '../../libs/socket.io';
import '../../sass/titleTips.scss';
import '../../sass/chat.scss';
export default class ChatComponent extends React.Component {
    render(){
        return (
            <div id="chatComponent">
                <h2><span>用户管理</span> > 客服中心</h2>
                <div className="chat">
                    <h3>客服咨询</h3>
                    <div className="chatArea">

                    </div>
                </div>
            </div>
        )
    }
}