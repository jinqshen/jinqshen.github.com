import { connect } from 'react-redux';
import { getArticle, getArticles, addArticle } from '../actions/article';
import Article from '../../components/Article';

const mapStateToProps = (state, ownProps) => {
    const id = +ownProps.match.params.id;
    return {
        article: state.articles.filter(article => article.index === id)[0]
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

const ArticlePaper = connect(
    mapStateToProps,
    mapDispatchToProps
)(Article);

export default ArticlePaper;
