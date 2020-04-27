import React from 'react';
import { Typography, Divider, Tag, Row, Col } from 'antd';
import { CalendarTwoTone, UserOutlined } from '@ant-design/icons';
import Paper from './Paper';

const { Title, Paragraph, Text } = Typography;

export default class Article extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }


    render() {
        return (
            <>
                <Typography>
                    <Title>React学习笔记</Title>
                    <Paragraph>
                        <UserOutlined style={{marginRight:5}} />作者：xxx
                    </Paragraph>
                    <Paragraph>
                        <Row justify="space-between">
                            <Col span={4}>
                                <Tag color="magenta">node.js</Tag>
                                <Tag color="green">前端</Tag>
                                <Tag color="cyan">React</Tag>
                                <Tag color="blue">ES6</Tag>
                            </Col>
                            <Col span={4}>
                                <CalendarTwoTone style={{marginRight:5}} />创建日期：2020年4月27日
                            </Col>
                        </Row>
                    </Paragraph>
                    <Divider></Divider>
                    <Paragraph>
                        <Paper></Paper>
                    </Paragraph>
                </Typography>
            </>
        )
    }

}
