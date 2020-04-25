import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Breadcrumb } from 'antd';

const breadcrumbNameMap = {
    '/life': '生活',
    '/work': '工作',
    '/emotion': '情感',
    '/amuse': '娱乐',
    '/amuse/King': '游戏',
    '/amuse/movie': '电影',
    '/amuse/music': '音乐',
    '/life/photos': '相册',
    '/life/story': '故事',
    '/work/chart': '技术学习',
    '/work/summary': '工作总结',
    '/work/summary/add': '新增总结'
};

class RouterBreadcrumb extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const { location } = this.props;
        const pathSnippets = location.pathname.split('/').filter(i => i);
        const extraBreadcrumbItems = pathSnippets.map((_, index) => {
            const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
            return (
            <Breadcrumb.Item key={url}>
                <Link to={url}>{breadcrumbNameMap[url]}</Link>
            </Breadcrumb.Item>
            );
        });
        const breadcrumbItems = [].concat(extraBreadcrumbItems);
        return (
            <Breadcrumb>{breadcrumbItems}</Breadcrumb>
        )
    }
}

export default withRouter(RouterBreadcrumb);