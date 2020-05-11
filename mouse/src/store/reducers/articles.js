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

const initdata = {
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
    abstract: '摘要',
    createTime: '2020年4月27日',
    content: 'test content'
}

const articles = (state = [initdata], action) => {
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
