import React from 'react';
import story from '../public/less/Story.module.less';

export default class Story extends React.Component {


    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <p className={story.pink}>less?</p>
            </div>
        )
    }
}