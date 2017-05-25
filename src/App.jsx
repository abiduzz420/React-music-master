import React,{Component} from 'react';
import './App.css';
import {FormControl,FormGroup,InputGroup,Glyphicon} from 'react-bootstrap';
import Profile from './Profile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query:'',
      artist: null
    };
  }

  submit(){
    const BASE_URL = 'https://api.spotify.com/v1/search?'
    const FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
    fetch(FETCH_URL,{
      method:'GET'
    })
    .then(response => response.json())
    .then(json => {
      const artist = json.artists.items[0]
      this.setState({artist})
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
        <Profile artist={this.state.artist}/>
        <div className="Gallery">Gallery</div>
      </div>
                );
              }

  }
export default App;
