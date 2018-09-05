import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state={
      tanya:'',
      jawab:'',
      kumpulanJokes:[]
    }
  }
  clickGet=()=>{
    var url = 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke'
    axios.get(url)
    .then ((x)=>{
      this.setState({
        tanya:x.data.setup,
        jawab: x.data.punchline
      })
    })
  }
  render() {
    
    return (
      <div>
        <h2>{this.state.tanya}</h2>
        <h2>{this.state.jawab}</h2>
        <button onClick={()=>{this.clickGet()}}>Reload</button>
      </div>
    );
  }
}

export default App;
