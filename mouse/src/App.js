import React from 'react';
import { Row, Col, Layout, Menu, Dropdown, Tooltip, Avatar, Space, Button, Modal } from 'antd';
import { HomeTwoTone, CaretDownOutlined, HeartTwoTone, GithubOutlined, PictureTwoTone, IdcardTwoTone,
  VideoCameraTwoTone, ContactsTwoTone, CustomerServiceTwoTone, ReadOutlined, MenuFoldOutlined,MenuUnfoldOutlined, QrcodeOutlined,
  ShopTwoTone } from '@ant-design/icons';
import { HashRouter, Route, Link, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import QRCode from 'qrcode.react';
import RouterBreadcrumb from './components/RouterBreadcrumb';
import Game from './components/Game';
import Photo from './components/Photo';
import Story from './components/Story';
import Chart from './components/Chart';
import MdEditor from './components/MdEditor';
import ArticlePaper from './store/containers/article';
import Paper from './components/Paper';
import Shopping from './store/containers/product';
import ArticleListAll from './store/containers/articles';
import VideoPlayer from './components/VideoPlayer';
import MusicPlayer from './components/MusicPlayer';
import FileUploader from './components/FileUploader';
import Technical from './components/Technical';
import QRCodeDemo from './components/QRCodeDemo';
import app from './App.module.less';
import 'nprogress/nprogress.css';
import iconLogo from './public/img/icon-logo.png';

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      collapsed: false,
      visible: false
    }
  }
  
  componentWillReceiveProps = () => {
  }

  componentDidMount = () => {

  }

  showQrCode = () => {
    this.setState({
      visible: true
    });
  }

  handleCancel = () => {
    this.setState({
      visible: false
    });
  }

  getMenu = () => {
    return (
      <>
        <Menu>
          <Menu.Item key="0">
            <GithubOutlined />
            <span>登录</span>
          </Menu.Item>
          <Menu.Item key="1" onClick={this.showQrCode}>
            <QrcodeOutlined />
            <span>打赏</span>
          </Menu.Item>
        </Menu>
      </>
    )
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Layout>
            <Sider theme="light" width={200} collapsible collapsed={this.state.collapsed} trigger={null}>
              <Row justify="center" align="middle" style={{marginTop: 7, marginBottom: 7}}>
                <img style={{width: 50}} src={iconLogo} alt="logo" />{this.state.collapsed ? <></> : <span style={{marginLeft: 20, float: 'right'}}>Mouse</span>}
              </Row>
              <Menu
                mode="inline"
                theme="light"
                defaultSelectedKeys={[]}
                defaultOpenKeys={[]}
                style={{ height: '100%', borderRight: 0 }}
              >
                <SubMenu
                  key="sub1"
                  title={
                    <>
                      <HomeTwoTone />
                      <span>生活</span>
                    </>
                  }
                >
                  <Menu.Item key="1">
                    <Link id="Photos" to="/life/photos"><PictureTwoTone />相册</Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Link id="Story" to="/life/story"><ReadOutlined />故事</Link>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Link id="Shop" to="/life/shop"><ShopTwoTone />购物</Link>
                  </Menu.Item>
                  <Menu.Item key="4">待开发</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <>
                      <ContactsTwoTone />
                      <span>工作</span>
                    </>
                  }
                >
                  <Menu.Item key="5">
                    <Link id="Summary" to="/work/summary">工作总结</Link>
                  </Menu.Item>
                  <Menu.Item key="6">
                    <Link id="Chart" to="/work/technical">技术学习</Link>
                  </Menu.Item>
                  <Menu.Item key="7">职业规划</Menu.Item>
                  <Menu.Item key="8"><IdcardTwoTone />个人简历</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  title={
                    <>
                      <HeartTwoTone twoToneColor="#eb2f96" />
                      <span>情感</span>
                    </>
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
                    <>
                      <CustomerServiceTwoTone />
                      <span>娱乐</span>
                    </>
                  }
                >
                  <Menu.Item key="13">
                    <Link id="amuseMusic" to="/amuse/music"></Link>音乐
                  </Menu.Item>
                  <Menu.Item key="14">电视剧</Menu.Item>
                  <Menu.Item key="15">
                    <Link id="amuseMovie" to="/amuse/movie"><VideoCameraTwoTone />电影</Link>
                  </Menu.Item>
                  <Menu.Item key="16">
                    <Link id="amuseKing" to="/amuse/King">游戏</Link>
                  </Menu.Item>
                </SubMenu>
              </Menu>
              <MusicPlayer></MusicPlayer>
            </Sider>
            <Layout style={{paddingLeft: 1}}>
              <Header style={{background: '#fff'}}>
                <Row justify="space-between">
                  <a style={{marginLeft: -30, color: '#282c34'}} onClick={this.toggle}>{this.state.collapsed ? <Tooltip title="展开菜单"><MenuUnfoldOutlined /></Tooltip> : <Tooltip title="收起菜单"><MenuFoldOutlined /></Tooltip>}</a>
                  <Dropdown overlay={this.getMenu()} trigger={['click']}>
                      <a className={["ant-dropdown-link"].join(' ')} style={{color: '#282c34'}}  onClick={e => e.preventDefault()}>
                        <Avatar src={iconLogo} />
                        <CaretDownOutlined />
                      </a>
                  </Dropdown>
                </Row>
              </Header>
              <Layout style={{paddingTop: 1}}>
                <Content
                  style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 700,
                    background: '#fff'
                  }}
                >
                  <Modal
                    title="感谢您的支持"
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    footer={[
                      <Button key="back" onClick={this.handleCancel}>
                        关闭
                      </Button>
                    ]}>
                      <Row justify="center">
                        <Col>
                          <QRCode value="https://ankang94.github.io" fgColor="#4bd600"></QRCode>
                        </Col>
                      </Row>
                  </Modal>
                  <Switch>
                    <Redirect exact from="/" to="/work/summary"></Redirect>
                    <Route path="/amuse/King" component={ Game }></Route>
                    <Route path="/amuse/movie" component={ VideoPlayer }></Route>
                    <Route path="/amuse/music" component={ FileUploader }></Route>
                    <Route path="/life/photos" component={ Photo }></Route>
                    <Route path="/life/story" component={ Story }></Route>
                    <Route path="/life/shop" component={ Shopping }></Route>
                    <Route exact path="/work/technical" component={ Technical }></Route>
                    <Route path="/work/technical/echarts" component={ Chart }></Route>
                    <Route path="/work/technical/qrcode" component={ QRCodeDemo }></Route>
                    <Route exact path="/work/summary" component={ ArticleListAll }></Route>
                    <Route exact path="/work/summary/:id" component={ ArticlePaper }></Route>
                  </Switch>
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </Layout>
      </BrowserRouter>
    );
  }

}
