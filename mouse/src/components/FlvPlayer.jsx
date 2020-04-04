import React from 'react';
import flvjs from 'flv.js';

export default class FlvPlayer extends React.Component {

    constructor() {
        super();
        this.state = {

        }
    }

    componentDidMount() {
        this.player = flvjs.createPlayer()
    }
}