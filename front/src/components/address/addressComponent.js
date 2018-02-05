import React from 'react'
// import { connect } from 'react-redux';
import { List, Radio, Flex, WhiteSpace } from 'antd-mobile';
import './address.scss'
const RadioItem = Radio.RadioItem;
export default class AddresssComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            check:false    
        };
    }
    selectIt=(e)=>{
      console.log(e.target)
     
    }
    skipEdit=(e)=>{
        this.props.router.push('editAddress');
    }
    goBack = (e) => {
        this.props.router.goBack(-1);
    }
    render() {
        return (
            <div id="sm_address">
                <header className="header">
                    <p><i className="iconfont icon-back" onClick={this.goBack}></i>地址列表<span>添加</span><i className="iconfont icon-viewgallery"></i></p>
                </header>
                <ul className="main">
                    <li>
                        <div className="top">
                            <p><span>sherah</span><span>13589333333</span></p>
                            <p>广东省广州市白云区82号</p>
                        </div>
                        <div className="bot">
                            <Flex style={{ padding: '0.2rem' }}>
                                <Flex.Item>
                                    <Radio className="my-radio" name="address" onChange={this.selectIt}>默认地址</Radio>
                                </Flex.Item>
                                <span onClick={this.skipEdit}><i className="iconfont icon-evaluate"></i>编辑</span> <span><i className="iconfont icon-delete"></i>删除</span>
                            </Flex>
                        </div>
                    </li>
                    <li>
                        <div className="top">
                            <p><span>sherah</span><span>13589333333</span></p>
                            <p>广东省广州市白云区82号</p>
                        </div>
                        <div className="bot">
                            <Flex style={{ padding: '0.2rem' }}>
                                <Flex.Item>
                                    <Radio className="my-radio" name="address" onChange={this.selectIt}>默认地址</Radio>
                                </Flex.Item>
                                <span><i className="iconfont icon-evaluate"></i>编辑</span> <span><i className="iconfont icon-delete"></i>删除</span>
                            </Flex>
                        </div>
                    </li>
               
                </ul>
            </div>
        )
    }
}