import React from 'react';
import game from '../public/css/Game.module.scss';

const requireContext = require.context("../public/img/game/", true, /^\.\/.*\.jpg$/);
const images = requireContext.keys().map(requireContext);

export default class Game extends React.Component {

    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div>
                { images.map(image => <img key={image} className={game['hero-img']} src={image} alt=""></img>) }
            </div>
        )
    }
}