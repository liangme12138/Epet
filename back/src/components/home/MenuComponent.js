import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Avatar , Dropdown} from 'antd';
import {Router, Route, Link, hashHistory, IndexRoute}  from 'react-router';
const SubMenu = Menu.SubMenu;
const a='/';
export default class MenuComponent extends React.Component {

    render() {
        return (
            <Menu theme="dark" defaultSelectedKeys={['3']} mode="inline" defaultOpenKeys={["sub1"]}>
                <SubMenu
                  key="sub1"
                  title={<span><Icon type="appstore" /><span>商品管理</span></span>}
                >
                    <Menu.Item key="3"><Link to='/goodList'>商品列表</Link></Menu.Item>
                    <Menu.Item key="4"  className={this.props.permission ? 'menushow' : 'menuhidden'}><Link to='/goods_add'>添加商品</Link></Menu.Item>
                </SubMenu>

              
                <SubMenu
                    key="sub3"
                    title={<span><Icon type="team" /><span>订单管理</span></span>}
                  >
                    <Menu.Item key="8"><Link to='/orders_list'>订单列表</Link>订单列表</Menu.Item>
                    <Menu.Item key="11"><Link to='/orders_add'>添加订单</Link></Menu.Item>
                </SubMenu>
                <SubMenu
                    key="sub4"
                    title={<span><Icon type="api" /><span>商品活动管理</span></span>}
                  >
                    <Menu.Item key="10"><Link to='/admins_list'>商品活动列表</Link></Menu.Item>
                    <Menu.Item key="11"><Link to='/admins_add'>添加商品活动</Link></Menu.Item>
                </SubMenu>
                <SubMenu
                    key="sub2"
                    title={<span><Icon type="user" /><span>用户管理</span></span>}
                  >
                    <Menu.Item key="6"><Link to='/users_list'>用户列表</Link></Menu.Item>
                    <Menu.Item key="7"><Link to='/users_add'>添加用户</Link></Menu.Item>
                </SubMenu> 
            
            </Menu>
        );
    }
}
