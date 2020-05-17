import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col, Form, Input, InputNumber, Switch, Select, Slider } from 'antd';
import NProgress from 'nprogress';
import QRCode from 'qrcode.react';
import { SketchPicker } from 'react-color';
import QRCodeCss from '../public/less/QRCodeDemo.module.less';

const { Option } = Select;

class QRCodeDemo extends React.Component {

    constructor(props) {
        NProgress.start();
        super(props);
        this.state = {
            value: 'https://jinqshen.github.io',
            size: 128,
            backgroundColor: '#ffffff',
            foregroundColor: '#000000',
            level: 'M',
            includeMargin: false,
            renderAs: 'canvas',
            imgSettings: {
                src: 'https://static.zpao.com/favicon.png',
                x: null,
                y: null,
                height: 30,
                width: 30,
                excavate: true
            },
            includeImg: true,
            isCenter: true
        }
    }

    componentWillMount = () => {
        NProgress.set(0.5);
    }

    componentDidMount = () => {
        NProgress.done(true);
    }

    changeSize = value => {
        this.setState({
            size: value
        });
    }

    changeBackgroundColor = color => {
        this.setState({
            backgroundColor: color.hex
        });
    }

    changeForegroundColor = color => {
        this.setState({
            foregroundColor: color.hex
        });
    }

    changeInCludeMargin = value => {
        this.setState({
            includeMargin: value
        });
    }

    changeRenderAs = value => {
        this.setState({
            renderAs: value
        })
    }

    changeErrorLevel = value => {
        this.setState({
            level: value
        })
    }

    changeInCludeImage = value => {
        this.setState({
            includeImg: value
        })
    }

    changeImageSrc = e => {
        this.setState({
            imgSettings: {
                src: e.target.value,
                x: this.state.imgSettings.x,
                y: this.state.imgSettings.y,
                height: this.state.imgSettings.height,
                width: this.state.imgSettings.width,
                excavate: this.state.imgSettings.excavate
            }
        });
    }

    changeImageWidth = value => {
        this.setState({
            imgSettings: {
                src: this.state.imgSettings.src,
                x: this.state.imgSettings.x,
                y: this.state.imgSettings.y,
                height: this.state.imgSettings.height,
                width: value,
                excavate: this.state.imgSettings.excavate
            }
        });
    }

    changeImageHeight = value => {
        this.setState({
            imgSettings: {
                src: this.state.imgSettings.src,
                x: this.state.imgSettings.x,
                y: this.state.imgSettings.y,
                height: value,
                width: this.state.imgSettings.width,
                excavate: this.state.imgSettings.excavate
            }
        });
    }

    changeImageX = value => {
        this.setState({
            imgSettings: {
                src: this.state.imgSettings.src,
                x: value,
                y: this.state.imgSettings.y,
                height: this.state.imgSettings.height,
                width: this.state.imgSettings.width,
                excavate: this.state.imgSettings.excavate
            }
        });
    }

    changeImageY = value => {
        this.setState({
            imgSettings: {
                src: this.state.imgSettings.src,
                x: this.state.imgSettings.x,
                y: value,
                height: this.state.imgSettings.height,
                width: this.state.imgSettings.width,
                excavate: this.state.imgSettings.excavate
            }
        });
    }

    changeIsCenter = value => {
        if(value) {
            this.setState({
                isCenter: value,
                imgSettings: {
                    src: this.state.imgSettings.src,
                    x: null,
                    y: null,
                    height: this.state.imgSettings.height,
                    width: this.state.imgSettings.width,
                    excavate: this.state.imgSettings.excavate
                }
            });
        }else {
            this.setState({
                isCenter: value,
                imgSettings: {
                    src: this.state.imgSettings.src,
                    x: 0,
                    y: 0,
                    height: this.state.imgSettings.height,
                    width: this.state.imgSettings.width,
                    excavate: this.state.imgSettings.excavate
                }
            });
        }
    }

    changeImageExcavate = value => {
        this.setState({
            imgSettings: {
                src: this.state.imgSettings.src,
                x: this.state.imgSettings.x,
                y: this.state.imgSettings.y,
                height: this.state.imgSettings.height,
                width: this.state.imgSettings.width,
                excavate: value
            }
        });
    }

    changeValue = e => {
        this.setState({
            value: e.target.value
        });
    }

    render() {
        return (
            <>
                <Row justify="center" gutter={[{xs: 8, sm: 16, md: 24, lg: 32}, {xs: 8, sm: 16, md: 24, lg: 32}]}>
                    <Col>
                        <QRCode value={this.state.value}
                            size={this.state.size}
                            bgColor={this.state.backgroundColor}
                            fgColor={this.state.foregroundColor}
                            level={this.state.level}
                            includeMargin={this.state.includeMargin}
                            renderAs={this.state.renderAs}
                            imageSettings={this.state.includeImg ? this.state.imgSettings : null}>
                        </QRCode>
                    </Col>
                </Row>
                <Row>
                    <Form layout="inline">
                        <Form.Item className={[QRCodeCss['form-item']].join(' ')} label="二维码大小">
                            <InputNumber value={this.state.size} onChange={this.changeSize} />
                        </Form.Item>
                        <Form.Item className={[QRCodeCss['form-item']].join(' ')} label="包含边框">
                            <Switch defaultChecked={this.state.includeMargin} checkedChildren="是" unCheckedChildren="否" onChange={this.changeInCludeMargin} />
                        </Form.Item>
                        <Form.Item className={[QRCodeCss['form-item']].join(' ')} label="生成格式">
                            <Select defaultValue={this.state.renderAs} onChange={this.changeRenderAs}>
                                <Option value="canvas">canvas</Option>
                                <Option value="svg">svg</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item className={[QRCodeCss['form-item']].join(' ')} label="复杂程度">
                            <Select defaultValue={this.state.level} onChange={this.changeErrorLevel}>
                                <Option value="L">L</Option>
                                <Option value="M">M</Option>
                                <Option value="H">H</Option>
                                <Option value="Q">Q</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item className={[QRCodeCss['form-item']].join(' ')} label="包含图片">
                            <Switch defaultChecked={this.state.includeImg} checkedChildren="是" unCheckedChildren="否" onChange={this.changeInCludeImage} />
                        </Form.Item>
                        <Form.Item className={[QRCodeCss['form-item']].join(' ')} label="图片地址">
                            <Input disabled={!this.state.includeImg} value={this.state.imgSettings.src} onChange={this.changeImageSrc} />
                        </Form.Item>
                        <Form.Item className={[QRCodeCss['form-item']].join(' ')} label="图片宽度">
                            <InputNumber disabled={!this.state.includeImg} value={this.state.imgSettings.width} onChange={this.changeImageWidth} />
                        </Form.Item>
                        <Form.Item className={[QRCodeCss['form-item']].join(' ')} label="图片高度">
                            <InputNumber disabled={!this.state.includeImg} value={this.state.imgSettings.height} onChange={this.changeImageHeight} />
                        </Form.Item>
                        <Form.Item className={[QRCodeCss['form-item']].join(' ')} label="图片居中">
                            <Switch disabled={!this.state.includeImg} defaultChecked={this.state.isCenter} checkedChildren="是" unCheckedChildren="否" onChange={this.changeIsCenter} />
                        </Form.Item>
                        <Form.Item className={[QRCodeCss['form-item']].join(' ')} label="图片X坐标">
                            <Slider style={{width: 100}} disabled={!this.state.includeImg || this.state.isCenter} value={this.state.imgSettings.x || 0} onChange={this.changeImageX} />
                        </Form.Item>
                        <Form.Item className={[QRCodeCss['form-item']].join(' ')} label="图片Y坐标">
                            <Slider style={{width: 100}} disabled={!this.state.includeImg || this.state.isCenter} value={this.state.imgSettings.y || 0} onChange={this.changeImageY} />
                        </Form.Item>
                        <Form.Item className={[QRCodeCss['form-item']].join(' ')} label="Excavate">
                            <Switch disabled={!this.state.includeImg} defaultChecked={this.state.imgSettings.excavate} checkedChildren="是" unCheckedChildren="否" onChange={this.changeImageExcavate} />
                        </Form.Item>
                        <Form.Item className={[QRCodeCss['form-item']].join(' ')} label="包含边框">
                            <Switch defaultChecked={this.state.includeMargin} checkedChildren="是" unCheckedChildren="否" onChange={this.changeInCludeMargin} />
                        </Form.Item>
                        <Form.Item className={[QRCodeCss['form-item']].join(' ')} label="二维码值">
                            <Input value={this.state.value} onChange={this.changeValue} />
                        </Form.Item>
                        <Form.Item className={[QRCodeCss['form-item']].join(' ')} label="背景色">
                            <SketchPicker color={this.state.backgroundColor} onChangeComplete={this.changeBackgroundColor} />
                        </Form.Item>
                        <Form.Item className={[QRCodeCss['form-item']].join(' ')} label="前景色">
                            <SketchPicker color={this.state.foregroundColor} onChangeComplete={this.changeForegroundColor} />
                        </Form.Item>
                    </Form>
                </Row>
            </>
        )
    }


}

export default withRouter(QRCodeDemo);