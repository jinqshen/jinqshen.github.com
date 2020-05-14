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
        content: 'ReactLearn.md'
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
        content: 'git.md'
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
        content: 'git命令总结.md'
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
        content: 'docker常用命令.md'
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
        content: 'nginx.md'
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
        content: '正则表达式总结.md'
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
        content: '元字符.md'
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
                    content: action.article.content
                }
            ];
        case 'GET_ARTICLES':
            return state.map(article => {
                delete article.content;
                return article;
            });
        case 'GET_ARTICLE':
            const articleinfo = state.map(article => {
                if(article.index === action.index) {
                    return article;
                }
            });
            return articleinfo.length === 1 ? articleinfo[0] : {};
        default:
            return state;
    }
}

export default articles;
