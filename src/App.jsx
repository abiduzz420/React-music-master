import React,{Component} from 'react';
import './App.css';
import {FormControl,FormGroup,InputGroup,Glyphicon} from 'react-bootstrap';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-title">Masti Muzik</div>
        <FormGroup>
          <InputGroup>
            <FormControl type="text" placeholder="Search an Artist..."/>
            <InputGroup.Addon>
              <Glyphicon glyph="search"/>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        <div className="Profile">
          <div>Artist Image</div>
          <div>Artist Name</div>
        </div>
        <div className="Gallery">Gallery</div>
      </div>
    );
  }

}

export default App;
