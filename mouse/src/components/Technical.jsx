import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Row, Col, Card, Tooltip, Menu } from 'antd';
import { PlaySquareOutlined } from '@ant-design/icons';
import NProgress from 'nprogress';

const { Meta } = Card;

class Technical extends React.Component {

    constructor(props) {
        NProgress.start();
        super(props);
        this.state = {
            technicalList: [{
                id: 0,
                name: 'Apache Echarts',
                description: '非常流行好用的图表技术',
                cover: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                link: 'echarts'
            },{
                id: 1,
                name: 'QRCode React',
                description: '一款好用的React二维码生成组件',
                cover: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                link: 'qrcode'
            }]
        }
    }

    componentWillMount = () => {
        NProgress.set(0.5);
    }

    componentDidMount = () => {
        NProgress.done(true);
    }

    render() {
        return (
            <>
                <Row gutter={[{xs: 8, sm: 16, md: 24, lg: 32}, {xs: 8, sm: 16, md: 24, lg: 32}]}>
                    {this.state.technicalList.map(technical => (
                        <Col key={technical.id} xl={6} lg={8} md={12} sm={24} xs={24}>
                            <Card
                                cover={<img src={technical.cover} alt={technical.name} />}
                                actions={[
                                    <Link to={`/work/technical/${technical.link}`}><Tooltip title="实例演示"><PlaySquareOutlined /></Tooltip></Link>
                                ]}>
                                <Meta title={technical.name} description={technical.description}></Meta>
                            </Card>
                        </Col>
                    ))}
                    
                </Row>
            </>
        )
    }


}

export default withRouter(Technical);