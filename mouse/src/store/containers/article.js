import { connect } from 'react-redux';
import { addComment, changeReplyInputStatus } from '../actions/article';
import Article from '../../components/Article';

const mapStateToProps = (state, ownProps) => {
    const id = +ownProps.match.params.id;
    return {
        article: state.articles.filter(article => article.index === id)[0]
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const index = +ownProps.match.params.id;
    return {
        addComment: (parent_id, content) => {
            dispatch(addComment(index, parent_id, content));
            dispatch(changeReplyInputStatus(index, parent_id));
        },
        changeReplyInputStatus: id => {
            dispatch(changeReplyInputStatus(index, id));
        }
    }
}

const ArticlePaper = connect(
    mapStateToProps,
    mapDispatchToProps
)(Article);

export default ArticlePaper;
