import React, { Component } from 'react';
import './App.css';

class Gallery extends Component {
  render() {
    const { tracks } = this.props;
    return(
      <div className = "Gallery">
        {
          tracks.map((track,key) => {
            const trackImg = track.album.images[0].url
            return(
              <div
                className="Track"
                key={key}>
                <img
                  src = {trackImg}
                  alt="track"
                  className="Track-image"/>
                <p className="Track-text">
                  {track.name}
                </p>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Gallery
