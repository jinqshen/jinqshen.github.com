import React from 'react';
import videojs from 'video.js';
import NProgress from 'nprogress';
import 'video.js/dist/video-js.min.css';

export default class VideoPlayer extends React.Component {

    constructor() {
        super();
        this.state = {
            videoUrl: 'https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4'
        };
        NProgress.start();
    }

    componentWillMount = () => {
        NProgress.set(0.5);
    }

    componentDidMount = () => {
        this.props = {
            autoplay: false,
            controls: true,
            sources: [{
                src: this.state.videoUrl,
                type: 'video/mp4'
            }]
        };
        this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
            console.log('onPlayerReady', this);
        });
        //this.player.play();
        NProgress.done(true);
    }

    componentWillUnmount() {
        if (this.player) {
            this.player.dispose();
        }
    }

    render() {
        return (
            <div>
                <div data-vjs-player style={{width:800, height:600}}>
                    <video ref={ node => this.videoNode = node } className="video-js vjs-default-skin"></video>
                </div>
            </div>
        );
    }
}