import React from 'react';
import { Row, Col, Layout, Menu, Dropdown, Breadcrumb, Avatar, Icon } from 'antd';
import {HashRouter, Route, Link} from 'react-router-dom';
import Game from './components/Game';
import Photo from './components/Photo';
import app from './App.module.css';
import iconLogo from './public/img/icon-logo.png';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const menu = (
  <Menu>
    <Menu.Item key="0">
      <Icon type="login" />
      <span>登录</span>
    </Menu.Item>
  </Menu>
);

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <HashRouter>
        <Layout>
          <Header className={app.white}>
            <Row>
              <div className={app.logo}>
                <img className={app['logo-image']} src={iconLogo} alt="logo" />
                <span>Mouse</span>
              </div>
              <Menu
                theme="white"
                mode="horizontal"
                defaultSelectedKeys={[]}
                style={{ lineHeight: '64px' }}
              >
                <Dropdown overlay={menu} trigger={['click']}>
                  <Menu.Item key="1" style={{float:"right"}}>
                    <a className={["ant-dropdown-link", app['caret-gray']].join(' ')} href="#">
                      <Avatar src={iconLogo} />
                      <Icon type="caret-down" />
                    </a>
                  </Menu.Item>
                </Dropdown>
              </Menu>
            </Row>
          </Header>
          <Row style={{ height:"20px", backgroundColor:"#fff" }}>
          </Row>
          <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={[]}
                defaultOpenKeys={[]}
                style={{ height: '100%', borderRight: 0 }}
              >
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="home" />
                      生活
                    </span>
                  }
                >
                  <Menu.Item key="1">
                    <Link id="Photos" to="/life/photos">相册</Link>
                  </Menu.Item>
                  <Menu.Item key="2">待开发</Menu.Item>
                  <Menu.Item key="3">待开发</Menu.Item>
                  <Menu.Item key="4">待开发</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <Icon type="laptop" />
                      工作
                    </span>
                  }
                >
                  <Menu.Item key="5">工作总结</Menu.Item>
                  <Menu.Item key="6">技术学习</Menu.Item>
                  <Menu.Item key="7">职业规划</Menu.Item>
                  <Menu.Item key="8">个人简历</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  title={
                    <span>
                      <Icon type="heart" />
                      情感
                    </span>
                  }
                >
                  <Menu.Item key="9">待开发</Menu.Item>
                  <Menu.Item key="10">待开发</Menu.Item>
                  <Menu.Item key="11">待开发</Menu.Item>
                  <Menu.Item key="12">待开发</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub4"
                  title={
                    <span>
                      <Icon type="gift" />
                      娱乐
                    </span>
                  }
                >
                  <Menu.Item key="13">音乐</Menu.Item>
                  <Menu.Item key="14">电视剧</Menu.Item>
                  <Menu.Item key="15">电影</Menu.Item>
                  <Menu.Item key="16">
                    <Link id="amuseKing" to="/amuse/King">游戏</Link>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout style={{ padding:"0px 0px 0px 1px" }}>
              <Content
                style={{
                  background: '#fff',
                  padding: 24,
                  margin: 0,
                  minHeight: 700,
                }}
              >
                <Route path="/amuse/King" component={ Game }></Route>
                <Route path="/life/photos" component={ Photo }></Route>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </HashRouter>
    );
  }

}