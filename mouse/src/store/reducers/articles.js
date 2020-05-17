/**
 * 文章管理reducer
 * state: [{
 *  index,
 *  title,
 *  author,
 *  classify,
 *  createTime,
 *  content
 * }]
 */

import { changeReplyInputStatus } from "../actions/article";

const initdata = [
    {
        index: 0,
        title: 'React学习笔记',
        author: 'jinqshen',
        classify: [{
            color: 'magenta',
            text: 'node.js'
        },{
            color: 'green',
            text: '前端'
        },{
            color: 'cyan',
            text: 'React'
        },{
            color: 'blue',
            text: 'ES6'
        }],
        abstract: 'react（一切都用js）',
        createTime: '2020年4月27日',
        content: 'ReactLearn.md',
        comments: [
            {
                'id': 1,
                'parent_id': null,
                'user': 'Lily',
                'content': 'react好难啊',
                'isLike': false,
                'likeNum': 60,
                'isReply': false,
                'children': [{
                    'id': 4,
                    'parent_id': 1,
                    'user': 'Mars',
                    'content': '@Lily 我也觉得，搞球不懂',
                    'isLike': false,
                    'likeNum': 0,
                    'isReply': false,
                    'children': [{
                        'id': 6,
                        'parent_id': 4,
                        'user': 'Lily',
                        'content': '@Mars 哈哈，不过还是得学呀，要恰饭到嘛',
                        'isLike': false,
                        'likeNum': 0,
                        'isReply': false,
                        'children': []
                    }]
                }, {
                    'id': 5,
                    'parent_id': 1,
                    'user': 'Tom',
                    'content': '@Lily 原来不止我一个这样觉得',
                    'isLike': false,
                    'likeNum': 0,
                    'isReply': false,
                    'children': []
                }]
            }, {
                'id': 2,
                'parent_id': null,
                'user': 'Sara',
                'content': '总结的不错，比较细致',
                'isLike': false,
                'likeNum': 0,
                'isReply': false,
                'children': [{
                    'id': 7,
                    'parent_id': 2,
                    'user': 'Jims',
                    'content': '@Sara 内容感觉不是很全',
                    'isLike': true,
                    'likeNum': 1,
                    'isReply': false,
                    'children': []
                }]
            }, {
                'id': 3,
                'parent_id': null,
                'user': 'Amy',
                'content': '评论列表居然是可以用的，哈哈',
                'isLike': false,
                'likeNum': 0,
                'isReply': false,
                'children': [{
                    'id': 8,
                    'parent_id': 3,
                    'user': 'jinqshen',
                    'content': '@Amy 可以用的哦，但是数据是存在浏览器本地的哈，刷新页面就没了，用的redux',
                    'isLike': false,
                    'likeNum': 0,
                    'isReply': false,
                    'children': [{
                        'id': 9,
                        'parent_id': 8,
                        'user': 'Amy',
                        'content': '@jinqshen 嗯嗯，redux在纯前端项目中真能给用户体验感，不错不错',
                        'isLike': false,
                        'likeNum': 0,
                        'isReply': false,
                        'children': []
                    }]
                }]
            }
        ]         
    },{
        index: 1,
        title: 'Git学习笔记',
        author: 'jinqshen',
        classify: [{
            color: 'magenta',
            text: 'Git'
        },{
            color: 'green',
            text: '工具'
        }],
        abstract: '最好用的版本管理工具',
        createTime: '2019年9月27日',
        content: 'git.md',
        comments: []
    },{
        index: 2,
        title: 'Git命令总结',
        author: 'jinqshen',
        classify: [{
            color: 'magenta',
            text: 'Git'
        },{
            color: 'green',
            text: '工具'
        }],
        abstract: '总结了一些git常用的命令',
        createTime: '2019年10月2日',
        content: 'git命令总结.md',
        comments: []
    },{
        index: 3,
        title: 'docker常用命令',
        author: 'jinqshen',
        classify: [{
            color: 'blue',
            text: 'docker'
        },{
            color: 'cyan',
            text: '容器'
        },{
            color: 'green',
            text: '集群相关'
        }],
        abstract: '高效率的docker容器',
        createTime: '2020年4月27日',
        content: 'docker常用命令.md',
        comments: []
    },{
        index: 4,
        title: 'Nginx静态服务器',
        author: 'jinqshen',
        classify: [{
            color: 'green',
            text: '静态服务器'
        },{
            color: 'blue',
            text: '负载均衡'
        }],
        abstract: '超强性能的静态服务器',
        createTime: '2020年2月20日',
        content: 'nginx.md',
        comments: []
    },{
        index: 5,
        title: '正则表达式总结',
        author: 'jinqshen',
        classify: [{
            color: 'cyan',
            text: '正则表达式'
        },{
            color: 'blue',
            text: '工具'
        }],
        abstract: '学好正则表达式，字符提取不用愁',
        createTime: '2020年3月16日',
        content: '正则表达式总结.md',
        comments: []
    },{
        index: 6,
        title: '元字符',
        author: 'jinqshen',
        classify: [{
            color: 'cyan',
            text: '正则表达式'
        },{
            color: 'blue',
            text: '工具'
        }],
        abstract: '正则表达式中的元字符',
        createTime: '2020年3月18日',
        content: '元字符.md',
        comments: []
    }
    
]

const articles = (state = initdata, action) => {
    switch(action.type) {
        case 'ADD_ARTICLE':
            return [
                ...state,
                {
                    index: action.index,
                    title: action.article.title,
                    author: action.article.author,
                    classify: action.article.classify,
                    abstract: action.article.abstract,
                    createTime: action.article.createTime,
                    content: action.article.content,
                    comments: []
                }
            ];
        case 'GET_ARTICLES':
            return state.map(article => {
                return {
                    index: article.index,
                    title: article.title,
                    author: article.author,
                    classify: article.classify,
                    abstract: article.abstract,
                    createTime: article.createTime,
                    comments: article.comments
                };
            });
        case 'GET_ARTICLE':
            const articleinfo = state.map(article => {
                if(article.index === action.index) {
                    return article;
                }
            });
            return articleinfo.length === 1 ? articleinfo[0] : {};
        case 'ADD_COMMENT':
            const articles = [...state];
            articles.map(article => {
                if(article.index === action.index) {
                    if(action.parent_id === null) {
                        article.comments.push({
                            'id': action.id,
                            'parent_id': action.parent_id,
                            'user': 'jinqshen',
                            'content': action.content,
                            'isLike': false,
                            'likeNum': 0,
                            'children': []
                        })
                    }else {
                        searchComment(article.comments, action.id, action.parent_id, action.content);
                    }
                };
                return article;
            });
            return articles;
        case 'CHANGE_REPLY_COMMENT_STATUS':
            const articles_p = [...state];
            articles_p.map(article => {
                if(article.index === action.index) {
                    changeReplyCommentStatus(article.comments, action.id);
                };
                return article;
            });
            return articles_p;
        default:
            return state;
    }
}

const changeReplyCommentStatus = (commnents, id) => {
    commnents.map(commnent => {
        if(commnent.id !== id) {
            commnent.isReply = false;
        }else {
            commnent.isReply = !commnent.isReply;
        }
        changeReplyCommentStatus(commnent.children, id);
    });
}

const searchComment = (comments, id, parent_id, content) => {
    comments.map(comment => {
        if(comment.id === parent_id) {
            const commentInfo = {
                'id': id,
                'parent_id': parent_id,
                'user': 'jinqshen',
                'content': content,
                'isLike': false,
                'likeNum': 0,
                'children': []
            };
            comment.children.push(commentInfo);
        }else {
            searchComment(comment.children, id, parent_id, content);
        }
    });
}

export default articles;
