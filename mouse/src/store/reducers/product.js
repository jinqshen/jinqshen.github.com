/**
 * 商品管理reducer
 */

const initdata = [{
    productId: 0,
    productCover: require('../../public/img/shop/strawberry.jpeg'),
    productPrice: 30,
    abstract: '回忆像新鲜草莓，甜到忧伤',
    shop: 'Mouse水果自营旗舰店',
    isSelf: true,
    isFollow: false,
    isPut: false,
    isVisibility: true
}, {
    productId: 1,
    productCover: require('../../public/img/shop/orange.jpeg'),
    productPrice: 20,
    abstract: '橘子，橘子，甜得很，甜得很',
    shop: 'Mouse水果自营旗舰店',
    isSelf: true,
    isFollow: false,
    isPut: false,
    isVisibility: true
}, {
    productId: 2,
    productCover: require('../../public/img/shop/pineapple.jpeg'),
    productPrice: 25,
    abstract: '菠萝，菠萝，不好吃不要钱哈',
    shop: 'Cat水果自营旗舰店',
    isSelf: false,
    isFollow: false,
    isPut: false,
    isVisibility: true
}, {
    productId: 3,
    productCover: require('../../public/img/shop/apple.jpeg'),
    productPrice: 5,
    abstract: '一天一苹果，医生远离我',
    shop: 'Mouse水果自营旗舰店',
    isSelf: true,
    isFollow: false,
    isPut: false,
    isVisibility: true
}, {
    productId: 4,
    productCover: require('../../public/img/shop/lemon.jpeg'),
    productPrice: 10,
    abstract: '正宗柠檬哈，和蜂蜜更配哦',
    shop: 'Cat水果自营旗舰店',
    isSelf: false,
    isFollow: true,
    isPut: false,
    isVisibility: true
}];

const product = (state = initdata, action) => {
    switch(action.type) {
        case 'GET_PRODUCTS_BY_QUERY':
            let queryRegExp = new RegExp(action.query);
            return state.map((value) => (value.abstract.match(queryRegExp) || value.shop.match(queryRegExp)) ? {...value, isVisibility: true} : {...value, isVisibility: false});
        case 'FOLLOW_PRODUCT':
            return state.map(value => {
                return (value.productId === action.id) ? {...value, isFollow: !value.isFollow} : value
            });
        case 'PUT_PRODUCT':
            return state.map(value => {
                return (value.productId === action.id) ? {...value, isPut: !value.isPut} : value
            });
        default:
            return state;
    }
}

export default product;
