import React from 'react';
import { List, Avatar, Tag } from 'antd';
import { Link } from 'react-router-dom';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import NProgress from 'nprogress';

export default class ArticleList extends React.Component {

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
                <List itemLayout="vertical" size="large" 
                    pagination={{
                        onChange: page => {},
                        pageSize: 5
                    }}
                    dataSource={this.props.articles}
                    renderItem={item => (
                        <List.Item key={item.index}
                            actions={[
                                <span>
                                    <StarOutlined style={{marginRight: 8}} />152
                                </span>,
                                <span>
                                    <LikeOutlined style={{marginRight: 8}} />153
                                </span>,
                                <span>
                                    <MessageOutlined style={{marginRight: 8}} />10
                                </span>
                            ]}
                            extra={
                                <img
                                  width={240}
                                  height={130}
                                  alt="logo"
                                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                />
                            }>
                            <List.Item.Meta
                                avatar={<Avatar src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
                                title={<Link to={"/work/summary/" + item.index}>{item.title}</Link>}
                                description={<>{item.classify.map(classifyItem => (<Tag key={classifyItem.color} color={classifyItem.color}>{classifyItem.text}</Tag>))}</>}
                                />
                                {item.abstract}
                        </List.Item>
                    )}>

                </List>
            </>
            
        )
    }
}
