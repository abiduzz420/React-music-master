import React,{Component} from 'react';

class App extends Component {

  render() {
    return (
      <div>
        <div className="App-title">Masti Muzik</div>
        <div>
          <input placeholder="Search Artist...."></input>
          <button>Search</button>
        </div>
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
