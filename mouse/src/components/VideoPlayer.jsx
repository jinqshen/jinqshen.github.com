import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.min.css';

export default class VideoPlayer extends React.Component {

    constructor() {
        super();
        this.state = {
            videoUrl: 'https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4',
            videoUrla: 'http://192.168.101.110:5000/static/movie/肥皂菌、小时姑娘、方颂评、易言 - 新·九九八十一 + 爱殇 + 蒹葭白露 + 天地有道 (Live).mkv'
        }
    }

    componentDidMount() {
        this.props = {
            autoplay: false,
            controls: true,
            sources: [{
                src: this.state.videoUrla,
                type: 'video/mp4'
            }]
        };
        this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
            console.log('onPlayerReady', this);
        });
        //this.player.play();
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