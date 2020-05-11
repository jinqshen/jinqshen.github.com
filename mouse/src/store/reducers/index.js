import { combineReducers } from 'redux';
import articles from './articles';
import products from './product';

const mouseApp = combineReducers({
    articles,
    products
});

export default mouseApp;
