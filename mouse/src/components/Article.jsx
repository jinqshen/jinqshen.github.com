import React from 'react';
import { withRouter } from 'react-router-dom';
import { Typography, Divider, Tag, Row, Col, Comment, Avatar, Form, Input, Button } from 'antd';
import { CalendarTwoTone, UserOutlined, DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import NProgress from 'nprogress';
import Paper from './Paper';

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

class Article extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            commentContent: '',
            replyCommentContent: '',
            commentLoading: false,
            replyCommentLoading: false
        };
        NProgress.start();
    }

    componentWillMount = () => {
        NProgress.set(0.5);
    }

    componentDidMount = () => {
        NProgress.done(true);
    }

    changeCommentContent = e => {
        this.setState({
            commentContent: e.target.value
        });
    }

    replyComment = (commentId, name) => {
        this.props.changeReplyInputStatus(commentId);
        this.setState({
            replyCommentContent: `@${name} `
        });
    }

    changeReplyCommentContent = e => {
        this.setState({
            replyCommentContent: e.target.value
        });
    }

    addComment = () => {
        this.setState({
            commentLoading: true
        });
        setTimeout(() => {
            this.props.addComment(this.props.addComment(null, this.state.commentContent));
            this.setState({ 
                commentContent: '',
                commentLoading: false
            });
        }, 1000);
    }
    
    addReplyComment = commentId => {
        this.setState({
            replyCommentLoading: true
        });
        setTimeout(() => {
            this.props.addComment(commentId, this.state.replyCommentContent);
            this.setState({
                replyCommentContent: '',
                replyCommentLoading: false 
            });
        }, 1000);
    }

    showMyComments = comments => {
        return comments.map(comment => {
            const commentId = comment.id;
            const commentName = comment.user;
            return (
                <Comment key={comment.id}
                    actions={[
                        <span>
                            {comment.isLike ? <LikeFilled /> : <LikeOutlined />}{ comment.likeNum }
                        </span>,
                        <span key="comment-nested-reply-to" onClick={() => { this.replyComment(commentId, commentName) }}>Reply to</span>
                    ]}
                    author={<a>{comment.user}</a>}
                    avatar={
                    <Avatar
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        alt="Han Solo"
                    />
                    }
                    content={
                    <p>
                        {comment.content}
                    </p>
                    }
                >
                    {comment.isReply ? <>
                                    <Form.Item>
                                        <TextArea rows={4} onChange={this.changeReplyCommentContent} value={this.state.replyCommentContent} />
                                        </Form.Item>
                                        <Form.Item>
                                        <Button loading={this.state.replyCommentLoading} onClick={() => this.addReplyComment(commentId)} type="primary">
                                            回复评论
                                        </Button>
                                    </Form.Item>
                                </> : <></>}
                    {this.showMyComments(comment.children)}
                </Comment>
            )
        });
    }

    render() {
        return (
            <>
                <Typography>
                    <Row>
                        <Col push={1}>
                            <Title>{this.props.article.title}</Title>
                            <Paragraph>
                                <UserOutlined style={{marginRight:5}} />作者：{this.props.article.author}
                            </Paragraph>
                        </Col>
                    </Row>
                    <Paragraph>
                        <Row justify="space-between">
                            <Col push={1}>
                                {this.props.article.classify.map(item => (<Tag key={item.text} color={item.color}>{item.text}</Tag>))}
                            </Col>
                            <Col pull={1}>
                                <CalendarTwoTone style={{marginRight:5}} />创建日期：{this.props.article.createTime}
                            </Col>
                        </Row>
                    </Paragraph>
                    <Divider></Divider>
                    <Paragraph>
                        <Paper content={this.props.article.content}></Paper>
                    </Paragraph>
                    <Form.Item>
                        <TextArea rows={4} onChange={this.changeCommentContent} value={this.state.commentContent} />
                        </Form.Item>
                        <Form.Item>
                        <Button loading={this.state.commentLoading} onClick={this.addComment} type="primary">
                            添加评论
                        </Button>
                    </Form.Item>
                    <Paragraph>
                        {this.props.article.comments.length === 0 ? <>暂无评论，快来抢占沙发吧</> : this.showMyComments(this.props.article.comments)}
                    </Paragraph>
                </Typography>
            </>
        )
    }

}

export default withRouter(Article);