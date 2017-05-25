import React, { Component } from 'react';
import './App.css';

class Gallery extends Component {

  playAudio(previewURL){
    let audio = new Audio(previewURL);
    audio.play();
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
