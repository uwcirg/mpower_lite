import React, { Component } from 'react';
import logo from '.\\logo-for-web.png';
//import { ActivityIndicator, ListView, Text, View } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [], 
    }
  }

  componentDidMount() {
    fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson.movies)
        this.setState({
          data: responseJson.movies, 
        })
      })
      .catch((error) => {
        console.error(error);
    });
  }


  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" />
            <h1 className="App-title">Hello, Bill!</h1>
          </header>
        </div>


        <div className = "App-body"> {
          this.state.data.map((dynamicData, key) => 
            <div> 
              {dynamicData.title} 
            </div>
          ) }
        </div>
      </div>
    )
  }
}

export default App;

