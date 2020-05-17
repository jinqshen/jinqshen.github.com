import React from 'react';
import { Card, Row, Col, Affix, Button, Icon, Modal, Tooltip, Input } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import NProgress from 'nprogress';

const { Meta } = Card;
const { TextArea } = Input;

export default class Photo extends React.Component {

    constructor() {
        super();
        this.state = {
            album: [
                {
                    name: "小学",
                    description: "some message",
                    createDate: "2020年1月18日",
                    defaultCover: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                },{
                    name: "初中",
                    description: "some message",
                    createDate: "2020年1月18日",
                    defaultCover: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                },{
                    name: "高中",
                    description: "some message",
                    createDate: "2020年1月18日",
                    defaultCover: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                },{
                    name: "大学",
                    description: "some message",
                    createDate: "2020年1月18日",
                    defaultCover: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                }
            ],
            addAlbumModalFlag: false,
            addAlbumModalconfirmLoading: false,
            albumTemp: {
                name: "",
                description: "",
                createDate: "2020年1月18日",
                defaultCover: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            }
        };
        NProgress.start();
    }

    componentWillMount = () => {
        NProgress.set(0.5);
    }

    componentDidMount = () => {
        NProgress.done(true);
    }

    changeAlbumTempName = (e) => {
        const albumTempItem = Object.assign(this.state.albumTemp, {name: e.target.value})
        this.setState({
            albumTemp: albumTempItem
        })
    }

    changeAlbumTempDescription = (e) => {
        const albumTempItem = Object.assign(this.state.albumTemp, {description: e.target.value})
        this.setState({
            albumTemp: albumTempItem
        })
    }

    showModal = () => {
        this.setState({
            addAlbumModalFlag: true,
        });
    };

    handleOk = e => {
        const albumList = this.state.album;
        this.setState({
            addAlbumModalconfirmLoading: true,
        });
        setTimeout(() => {
            albumList.push(this.state.albumTemp);
            this.setState({
                addAlbumModalFlag: false,
                addAlbumModalconfirmLoading: false,
            });
            this.setState({
                album: albumList,
                albumTemp: {
                    name: "",
                    description: "",
                    createDate: "2020年1月18日",
                    defaultCover: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                }
            });
        }, 2000);
    };
    
    handleCancel = e => {
        this.setState({
            addAlbumModalFlag: false,
        });
    };

    render() {
        return (
            <div>
                <Affix offsetTop="300">
                    <Button type="primary" style={{ float:"right" }} onClick={() => this.showModal()} >
                        <PlusSquareOutlined />
                    </Button>
                </Affix>
                <Row gutter={16}>
                    { this.state.album.map(item => {
                        return (
                            <Col key={item.name} span={6}>
                                <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="" src={ item.defaultCover } />}
                                >
                                    <Meta title={ item.name } description={ item.description } />
                                </Card>
                            </Col>
                        )
                    }) }
                </Row>
                <Modal
                    title="新增相册"
                    visible={this.state.addAlbumModalFlag}
                    confirmLoading={this.state.addAlbumModalconfirmLoading}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    >
                    <Input style={{marginTop: 8}}
                        value={this.state.albumTemp.name}
                        onChange={(e) => this.changeAlbumTempName(e)}
                        placeholder="请输入相册名"
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        suffix={
                            <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                        }
                    />
                    <TextArea style={{marginTop: 27}}
                        onChange={(e) => this.changeAlbumTempDescription(e)}
                        value={this.state.albumTemp.description}
                        placeholder="请输入相册描述"
                    />
                </Modal>
            </div>
        )
    }
}