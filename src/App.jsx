import React,{Component} from 'react';
import './App.css';
import {FormControl,FormGroup,InputGroup,Glyphicon} from 'react-bootstrap';
import Profile from './Profile';
import Gallery from './Gallery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query:'',
      artist: null,
      tracks: []
    };
  }

  submit(){
    const BASE_URL = 'https://api.spotify.com/v1/search?'
    let FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
    console.log('FETCH_URL',FETCH_URL);
    fetch(FETCH_URL,{
      method:'GET'
    })
    .then(response => response.json())
    .then(json => {
      console.log('json',json);
      const artist = json.artists.items[0]
      console.log('artist',artist);
      this.setState({artist})
      const ALBUM_URL = 'https://api.spotify.com/v1/artists/'
      FETCH_URL = `${ALBUM_URL}${artist.id}/top-tracks?country=US&`;
      fetch(FETCH_URL,{
        method:'GET'
      })
      .then(response => response.json())
      .then(json => {
        console.log('Artist Top tracks',json);
        const { tracks } = json;
        this.setState({tracks})


      })

    });

  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Masti Muzik</div>
        <FormGroup>
          <InputGroup>
            <FormControl type="text" placeholder="Search an Artist..."
              value={this.state.query}
              onChange={(event) => this.setState({query:event.target.value})}
              onKeyPress={(event) => {
                if(event.key === 'Enter'){
                  this.submit()
                }
              }}/>
            <InputGroup.Addon>
              <Glyphicon glyph="search"
                onClick={()=>this.submit()}
              />
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        {
          this.state.artist !== null
          ?
            <div>
              <Profile artist={this.state.artist}/>
              <Gallery tracks={this.state.tracks} />
            </div>
          :
          <div></div>
        }
      </div>
        );
        }

  }
export default App;
