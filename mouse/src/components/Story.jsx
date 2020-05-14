import React from 'react';
import NProgress from 'nprogress';
import story from '../public/less/Story.module.less';

export default class Story extends React.Component {


    constructor(props) {
        super(props);
        this.state = {

        };
        NProgress.start();
    }

    componentWillMount = () => {
        NProgress.set(0.5);
    }

    componentDidMount = () => {
        NProgress.done(true);
    }

    render() {
        return (
            <div>
                <p className={story.pink}>less?</p>
            </div>
        )
    }
}