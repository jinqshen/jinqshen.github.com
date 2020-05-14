import React from 'react';
import { withRouter } from 'react-router-dom';
import { Typography, Divider, Tag, Row, Col } from 'antd';
import { CalendarTwoTone, UserOutlined } from '@ant-design/icons';
import NProgress from 'nprogress';
import Paper from './Paper';

const { Title, Paragraph, Text } = Typography;

class Article extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
        NProgress.start();
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
                <Typography>
                    <Title>{this.props.article.title}</Title>
                    <Paragraph>
                        <UserOutlined style={{marginRight:5}} />作者：{this.props.article.author}
                    </Paragraph>
                    <Paragraph>
                        <Row justify="space-between">
                            <Col span={4}>
                                {this.props.article.classify.map(item => (<Tag key={item.text} color={item.color}>{item.text}</Tag>))}
                            </Col>
                            <Col span={4}>
                                <CalendarTwoTone style={{marginRight:5}} />创建日期：{this.props.article.createTime}
                            </Col>
                        </Row>
                    </Paragraph>
                    <Divider></Divider>
                    <Paragraph>
                        <Paper content={this.props.article.content}></Paper>
                    </Paragraph>
                </Typography>
            </>
        )
    }

}

export default withRouter(Article);