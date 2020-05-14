import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';

class Paper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }
    
    componentWillMount = () => {
    }

    componentDidMount = () => {
    }

    render() {
        return (
            <>
                <ReactMarkdown source={require('../public/md/' + this.props.content).default} escapeHtml={false} renderers={{code: CodeBlock}} ></ReactMarkdown>
            </>
        )
    }
}

export default withRouter(Paper);