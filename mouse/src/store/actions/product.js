/**
 * 根据条件搜索商品列表动作
 */
export const getProductsByQuery = query => {
    return {
        type: 'GET_PRODUCTS_BY_QUERY',
        query
    }
}

/**
 * 获取指定商品信息的动作
 * @param {Number} id 
 */
export const getProduct = id => {
    return {
        type: 'GET_PRODUCT',
        id
    }
}

/**
 * 关注商品动作
 * @param {Number} id 商品id
 */
export const followProduct = id => {
    return {
        type: 'FOLLOW_PRODUCT',
        id
    }
}

/**
 * 商品加入购物车动作
 * @param {Number} id 商品id
 */
export const putProduct = id => {
    return {
        type: 'PUT_PRODUCT',
        id
    }
}
