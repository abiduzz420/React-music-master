import React, { Component } from 'react';
import './App.css';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      audio:null,
      playingURL :''
    };
  }

  playAudio(previewURL){
    let audio = new Audio(previewURL);
    if(!this.state.playing){
      audio.play();
      this.setState({
        playing: true,
        playingURL : previewURL,
        audio
      });
    }
    else{
        if(previewURL === this.state.playingURL){
          this.state.audio.pause();
          this.setState({
            playing: false,
            playingURL: '',
            audio
          });
        }
          else{
            this.state.audio.pause();
            audio.play();
            this.setState({
              playingURL:previewURL,
              playing:true,
              audio
            });
          }
        }
      }
  render() {
    const { tracks } = this.props;
    return(
      <div className = "Gallery">
        {
          tracks.map((track,key) => {
            const trackImg = track.album.images[0].url
            if(track.preview_url){
              return(
                <div
                  className="Track"
                  key={key}
                  onClick={() => this.playAudio(track.preview_url)}>
                  <img
                    src = {trackImg}
                    alt="track"
                    className="Track-image"/>
                  <div className="Track-icon">
                    <div className="Track-icon-inner">
                      {
                        this.state.playingURL ===  track.preview_url ?
                          <span>| |</span>
                        : <span>&#9654;</span>
                      }
                    </div>
                  </div>
                  <p className="Track-text">
                    {track.name}
                  </p>
                </div>
              )
            }
            else{
              return(
                <div></div>
              )
            }
          })
        }
      </div>
    )
  }
}

export default Gallery
