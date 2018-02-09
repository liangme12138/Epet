import React from 'react'
import { Router, Route, hashHistory,Link } from 'react-router';
import { Layout, Menu, Breadcrumb, Popover, Icon, Switch, Input, Button, Modal } from 'antd';
import store from '../../store/configStore';
import DaragridAction from '../../actions/datagridAction';
const SubMenu = Menu.SubMenu;
const { Header, Content, Footer, Sider } = Layout;
const Search = Input.Search;
const content = <Button type="primary"><Link to="/">退出</Link></Button>;
export default class PublicComponent extends React.Component{
    state = {
        theme: 'dark',
        current: '1',
    }
    
    changeTheme = (value) => {
        this.setState({
            theme: value ? 'dark' : 'light',
        });
    }
    handleClick = (e) => {
        window.sessionStorage.setItem('key',e.key);
        this.setState({
            current: e.key,
        });
    }
    componentWillMount(){
        if(!window.sessionStorage.getItem('username')){
                hashHistory.push("/");
        }
    }
    componentDidMount(){
        if (window.sessionStorage.getItem('key')){
            this.setState({
                current: window.sessionStorage.getItem('key')
            });
        }
    }
    componentWillUnmount(){
        if (window.sessionStorage.getItem('username')){
            if(confirm('您确定要离开当前页面吗?')){
                window.sessionStorage.clear();
                hashHistory.push("/");
            }
        }
    }
    searchKey(event){
       this.setState({
           keyWord : event.target.value
       })
    }
    goSearch(){
        let params = {
            status: 'page',
            page: '1',
            url: store.getState().Datagrid.iCurUrl,
            keyWord:this.state.keyWord
        };
        store.dispatch({
            types: ['beforeRequest', 'datagridSearch', 'error'],
            'url': store.getState().Datagrid.iCurUrl,
            'params': params,
            'method': 'post'
        });
    }
    render() {
        return (
            <div>
                <div
                    style={{ backgroundColor: '#00152A' ,height:'100px'}}
                >
                    <Popover content={content} trigger="hover">
                        <img src="./src/assets/defultHead.jpg" style={{ float: 'right', marginTop: 25, marginRight: 30,  height: '50px' }}/>
                    </Popover>
                    <div style={{ width: 400, height: '100px',marginLeft:240, float: 'left'}}>
                        <Search
                            placeholder="请输入关键字"
                            style={{ width: 300, marginTop: 30,height:'40px',marginRight:10,float:'left'}}
                            onSearch={value => console.log(value)}
                            onChange={this.searchKey.bind(this)}
                        />
                        <Button type="primary" style={{ float: 'left', marginTop: 30, height: '40px'}} onClick={this.goSearch.bind(this)}>搜索</Button>
                    </div>
                </div>
                <Menu
                    theme={this.state.theme}
                    onClick={this.handleClick}
                    style={{ width: 240,float:'left' }}
                    defaultOpenKeys={['sub1']}
                    selectedKeys={[this.state.current]}
                    mode="inline"
                >
                    <Menu.Item key="12"><Icon type="home" />首页</Menu.Item>
                    <SubMenu key="sub1" title={<span><Icon type="shop" /><span>商品管理</span></span>}>
                        <Menu.Item key="1">
                            <Link to="/index/proprietary">周边产品</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/index/pet">宠物信息</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/index/warning">库存预警</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>用户管理</span></span>}>
                        <Menu.Item key="11"><Link to="/index/userManage">用户信息</Link></Menu.Item>
                        <Menu.Item key="13"><Link to="/index/chat">客服中心</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span><Icon type="setting" /><span>订单管理</span></span>}>
                        <Menu.Item key="5"><Link to="/index/selfOrder">自营商品订单</Link></Menu.Item>
                        <Menu.Item key="6">实时订单</Menu.Item>
                        <Menu.Item key="7"><Link to="/index/userSeller">用户交易订单</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="user" /><span>员工管理</span></span>}>
                        <Menu.Item key="9"><Link to="/index/staff">员工信息</Link></Menu.Item>
                        <Menu.Item key="10"><Link to="/index/setting">个人中心</Link></Menu.Item>
                    </SubMenu>
                </Menu>
                <Content style={{ margin: '0 16px', float: 'left',width: '78%'}}>
                    <div style={{background: '#fff', width:'100%' ,height:500}}>
                       {this.props.children}
                    </div>
                </Content>
            </div>
        );
    }
}

    