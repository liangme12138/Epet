import React from 'react';
import { Router, Route, Link, hashHistory,browserHistory, IndexRoute } from 'react-router';
import './home.scss';
import * as HomeAction from './homeAction';
import { connect } from 'react-redux';
import { Layout, Menu, Breadcrumb, Icon, Avatar, Dropdown, Input, Button} from 'antd';
import MenuComponent from './MenuComponent';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const a = '/';

let personal;
let aId;

const menu = (
    <Menu>
        <Menu.Item key="20">
            <Link to={'/admins_list'}>修改个人信息</Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="21">
            <Link to="/login">退出登录</Link>
        </Menu.Item>
    </Menu>
);
const Search = Input.Search;
class HomeComponent extends React.Component{

    state = {
        collapsed: false,
    };
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }
    render(){
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >
                    <div className="logo" >宠物联萌后台管理系统</div>

                    <MenuComponent permission={this.state.permission} />
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} >
                        <Breadcrumb style={{ margin: '0 16px' }}>
                            <Breadcrumb.Item>
                                {/* <Link to="/">首页</Link> */}
                                <Search
                                    placeholder="input search text"
                                    style={{ width: 200 }}
                                    onSearch={value => console.log(value)}
                                /> <Button type="primary">搜索</Button>
                            </Breadcrumb.Item>

                        </Breadcrumb>
                        <Dropdown overlay={menu} trigger={['click']}>
                            <Avatar style={{ backgroundColor: '#108ee9', position: 'absolute', top: 20, right: 30 }} icon="user" />
                        </Dropdown>
                    </Header>
                    <Content style={{ margin: '16px 0 0 16px' }}>
                        <div style={{ padding: 20, background: '#fff', minHeight: 360}}>
                            {this.props.children}
                        </div>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

const mapToState = function (state) {
    // console.log(state.MenuReducer.result)
    return {
    }
}

export default connect(mapToState, HomeAction)(HomeComponent);