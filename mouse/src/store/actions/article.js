let articleIndex = 0;

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
