/* TODO: change to presentational SFC */

import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import PropTypes from 'prop-types';

const Jumbo = ({patientName, loading, currentTime}) => 
//   componentWillReceiveProps(nextProps) {
//     // Check to see if the requestRefresh prop has changed
//     console.log("Jumbo - Checking! " + nextProps.requestRefresh + "|" + this.props.requestRefresh)
//     if (nextProps.requestRefresh !== this.props.requestRefresh & nextProps.requestRefresh) {
//       console.log("Loading - Jumbo")
//       this.setState({loading: true}, this.fetchPatient);
//     }
//   }

<div>
  <Jumbotron>
    <h1 className="App-title display-3">Welcome to mPOWEr Lite!</h1>
    <p>The current time is: {currentTime}</p>
    <p className='lead'>Smart Client Demo Patient: { loading ? "Loading" : patientName }</p>
  </Jumbotron>
</div>

export default Jumbo;