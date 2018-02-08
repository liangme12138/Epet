import React from 'react'
import { connect } from 'react-redux';
import {Link} from 'react-router'
import { List, Radio, Flex, WhiteSpace,Toast } from 'antd-mobile';
import * as addressAction from './addressAction'
import './address.scss'
const RadioItem = Radio.RadioItem;
class AddresssComponent extends React.Component {
    state={
        userInfo: JSON.parse(window.localStorage.getItem('userInfo')) || [],
        check:false    
      
    }  
    componentWillMount(){
        if (this.state.userInfo[0].userId) {
            this.setState({
                userId: this.state.userInfo[0].userId
            })
            this.props.getAddress('address.php', {userId: this.state.userInfo[0].userId}).then(res=>{
                this.setState({dataset:res});
            })
        }
        
    }
    delete(id,e){
        this.props.delAddress('address.php', { receiveId: id }).then(res=> {
            if(res==true){
                Toast.success('删除成功!!!', 1);
                this.props.getAddress('address.php', { userId: this.state.userInfo[0].userId }).then(res => {
                    this.setState({ dataset: res });
                })
            }
            else{
                Toast.fail('删除失败!!!', 1);
            }
           
        })
    }
   
    goBack = (e) => {
        this.props.router.push('account');
    }
    render() {
        return (
            <div id="sm_address">
                <header className="header">
                    <p><i className="iconfont icon-back" onClick={this.goBack}></i>地址列表<span><Link to={{ pathname: "editAddress/" + this.state.userId }}>添加</Link></span><i className="iconfont icon-viewgallery"></i></p>
                </header>
                <form className="main">
                    <ul>
                    {   
                        this.state.dataset?
                        this.state.dataset.map((item,idx)=>{      
                         return <li key={idx} >
                                    <div className="top">
                                        <p><span>{item.linkMan}</span><span>{item.phone}</span></p>
                                        <p>{item.village} {item.doorplate}</p>
                                    </div>
                                    <div className="bot">
                                        <Flex style={{ padding: '0.2rem' }}>
                                            <Flex.Item >
                                         <Radio className="my-radio" name="address" checked={item.type}>默认地址</Radio>
                                            </Flex.Item>
                                     <Link to={{pathname:"editAddress/"+item.userId+"/"+item.receiveId}}><span><i className="iconfont icon-evaluate"></i>编辑</span></Link>      
                                        </Flex>
                                        <span onClick={this.delete.bind(this,item.receiveId)} className="del"><i className="iconfont icon-delete"></i>删除</span>
                                    </div>
                                </li>
                                
                            
                        })
                       :''
                    }
                </ul>
                </form>
            </div>
        )
    }
}
const getState = function (state) {
    return {
        status: state.addressReducer.status,
        type: state.addressReducer.type,
        date: state.addressReducer.result||[]
    }
}

export default connect(getState, addressAction)(AddresssComponent);