import { connect } from 'react-redux';
import { getArticle, getArticles, addArticle, addComment } from '../actions/article';
import ArticleList from '../../components/ArticleList';

const mapStateToProps = state => {
    return {
        articles: state.articles
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addArticle: article => {
            dispatch(addArticle(article));
        },
        getArticles: () => {
            dispatch(getArticles());
        },
        getArticle: index => {
            dispatch(getArticle(index));
        },
        addComment: (index, parent_id, content) => {
            dispatch(addComment(index, parent_id, content));
        }
    }
}

const ArticleListAll = connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticleList);

export default ArticleListAll;
