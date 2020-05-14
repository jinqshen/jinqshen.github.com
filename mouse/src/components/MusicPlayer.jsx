import React from 'react';
import 'aplayer/dist/APlayer.min.css';
import APlayer from 'aplayer';
import conf from '../public/media/music/conf.json';


export default class MusicPlayer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hostname: 'http://localhost:5000'
        }
    }

    componentDidMount = () => {
        const musicList = conf.map(music => {
            return {
                name: music.name,
                artist: music.author,
                url: require('../public/media/music/' + music.filename),
                lrc: require('../public/media/music/lrc/' + music.lrc),
                cover:require('../public/media/music/cover/' + music.cover)
            }
        })
        new APlayer({
            container: document.getElementById('aplayer'),
            lrcType: 3,
            fixed: true,
            audio: musicList
        })
        /* var self = this;
        axios.get(self.state.hostname + '/getMusicRes')
        .then(response => {
            const audioList = [];
            response.data.forEach(item => {
                const info = {
                    name: item.name,
                    artist: item.artist,
                    url: self.state.hostname + item.path + 'music/' + item.musicfullname,
                    lrc: self.state.hostname + item.path + 'lyric/' + item.lrcfullname,
                    cover: self.state.hostname + item.path + item.cover
                };
                audioList.push(info);
            });
            self.options = {
                container: document.getElementById('aplayer'),
                lrcType: 3,
                fixed: true,
                audio: audioList
            };
            
            self.player = new APlayer(self.options);
        }); */
    }
    
    /*componentWillUnmount() {
        if(this.player) {
            try {
                this.player.destroy();
            }catch(err) {
                console.log(err);
            }
        }
    }*/


    render() {
        return (
            <div style={{width:600}}>
                <div id='aplayer'></div>
            </div>
        )
    }


}