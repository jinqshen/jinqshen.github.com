import React from 'react';
import NProgress from 'nprogress';
import game from '../public/less/Game.module.less';

const requireContext = require.context("../public/img/game/", true, /^\.\/.*\.jpg$/);
const images = requireContext.keys().map(requireContext);

export default class Game extends React.Component {

    constructor() {
        super();
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
                { images.map(image => <img key={image} className={game['hero-img']} src={image} alt=""></img>) }
            </div>
        )
    }
}