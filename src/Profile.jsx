import React, { Component } from 'react';
import './App.css';

class Profile extends Component {

  render() {
    let artist = {name:'',followers:{total:''},images:[{url:''}],genres:[]};
    artist = this.props.artist !== null ? this.props.artist : artist;
    return(
      <div className="Profile">
        <img
          className="Profile-img"
          alt="profile-img"
          src={artist.images[0].url}/>
        <div className="Profile-info">
          <div className="Profile-name">{artist.name}</div>
          <div className="Profile-followers">{artist.followers.total} followers</div>
          <div className="Profile-genres">
            {
              artist.genres.map((genre,key) => {
                if(artist.genres.length > 1){
                  genre = (genre === artist.genres[artist.genres.length -1]) ? ` &${genre}` : ` ${genre},`;
                }
                else {
                  genre = `${genre}`;
                                }
                return(
                  <span key={key}>{genre}</span>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Profile
