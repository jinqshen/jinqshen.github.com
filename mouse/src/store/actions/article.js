let articleIndex = 0;
let commentId = 10;

/**
 * 增加文章动作
 * @param {Object} article 
 */
export const addArticle = article => {
    return {
        type: 'ADD_ARTICLE',
        index: articleIndex++,
        article
    }
}

/**
 * 获取当前文章列表动作
 */
export const getArticles = () => {
    return {
        type: 'GET_ARTICLES'
    }
}

/**
 * 获取指定文章信息的动作
 * @param {Number} index 
 */
export const getArticle = index => {
    return {
        type: 'GET_ARTICLE',
        index
    }
}

/**
 * 新增评论动作
 * @param {Number} index 
 * @param {Number} parent_id 
 * @param {String} content
 */
export const addComment = (index, parent_id, content) => {
    return {
        type: 'ADD_COMMENT',
        index,
        id: commentId++,
        parent_id,
        content
    }
}

export const changeReplyInputStatus = (index, id) => {
    return {
        type: 'CHANGE_REPLY_COMMENT_STATUS',
        index,
        id
    }
}