import React from 'react';
import { Jumbotron } from 'reactstrap';

export default class extends React.Component {
  render() {
    return <div>
      <Jumbotron>
        <h1 className="App-title display-3">Welcome to mPOWEr Lite!</h1>
        <p className='lead'>Smart Client Demo: {/* this.state.patient_name*/}</p>
      </Jumbotron>
    </div>
  }
}
