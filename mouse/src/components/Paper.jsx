import React from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';
import ReactLearn from '../public/md/ReactLearn.md';

export default class Paper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <>
                <ReactMarkdown source={this.props.content || ReactLearn} escapeHtml={false} renderers={{code: CodeBlock}} ></ReactMarkdown>
            </>
        )
    }
}