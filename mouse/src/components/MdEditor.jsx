import React from 'react';
import { Row, Col, Input, Form, Button, Tag, Typography } from 'antd';
import Paper from './Paper';

const { TextArea } = Input;
const { CheckableTag } = Tag;
const { Title } = Typography;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const validateMessages = {
    required: '${label}必填!'
};

export default class MdEditor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            content: '',
            tags: ['springboot', 'java', 'javascript', 'react'],
            selectedTags: []
        }
    }

    parserContent = e => {
        this.setState({
            content: e.target.value
        })
    }

    onFinish = values => {
        console.log(values);
    };

    handleChange = (tag, checked) => {
        const selectedTags = this.state.selectedTags;
        const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
        this.setState({ selectedTags: nextSelectedTags });
    }

    render() {
        return (
            <>
                <Row gutter={16}>
                    <Col span={12}>
                        <div>
                            <Title level={3}>新增文章</Title>
                            <Form {...layout} name="nest-messages" onFinish={this.onFinish} validateMessages={validateMessages}>
                                <Form.Item name={['article', 'name']} label="标题" rules={[{ required: true }]}>
                                    <Input />
                                </Form.Item>
                                <Form.Item name={['article', 'abstract']} label="摘要" rules={[{ required: true }]}>
                                    <Input />
                                </Form.Item>
                                <Form.Item name={['article', 'classify']} label="文章分类" rules={[{ required: true }]}>
                                    {this.state.tags.map(tag => (
                                        <CheckableTag
                                            key={tag}
                                            checked={this.state.selectedTags.indexOf(tag) > -1}
                                            onChange={checked => this.handleChange(tag, checked)}
                                        >
                                            {tag}
                                        </CheckableTag>
                                    ))}
                                </Form.Item>
                                <Form.Item name={['article', 'content']} label="文章内容" rules={[{ required: true }]}>
                                    <TextArea autoSize={{minRows: 20, maxRows: 30}} onChange={ e => this.parserContent(e) }></TextArea>
                                </Form.Item>
                                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                                    <Button type="primary" htmlType="submit">
                                    保存文章
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div>
                            <Title level={3}>文章内容预览</Title>
                            <Paper content={this.state.content}></Paper>
                        </div>
                    </Col>
                </Row>
            </>
        )
    }
}