import React, { Component } from 'react';
//import logo from '.\\logo-for-web.png';
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
    fetch('https://mpower-api-docker.cirg.washington.edu/api/v1.0/patients')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.patients)
        this.setState({
          data: responseJson.patients,
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
            <h1 className="App-title">Welcome to mPOWEr Lite!</h1>
          </header>
        </div>


        <div className = "App-body"> {
          this.state.data.map((dynamicData) =>
            <div>
              {dynamicData.MRN}
            </div>
          ) }
        </div>
      </div>
    )
  }
}

export default App;
