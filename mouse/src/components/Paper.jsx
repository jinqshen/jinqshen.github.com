import React from 'react';
import ReactMarkdown from 'react-markdown';
import {HashRouter, Route, Link} from 'react-router-dom';
import CodeBlock from './CodeBlock';
import Game from './Game';

export default class Paper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <>
                <ReactMarkdown source={this.props.content} escapeHtml={false} renderers={{code: CodeBlock}} ></ReactMarkdown>
            </>
        )
    }
}