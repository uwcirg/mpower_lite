/* TODO: change to presentational SFC */

import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import PropTypes from 'prop-types';

const Jumbo = ({patient_name, loading, currentTime}) => 
//   componentWillReceiveProps(nextProps) {
//     // Check to see if the requestRefresh prop has changed
//     console.log("Jumbo - Checking! " + nextProps.requestRefresh + "|" + this.props.requestRefresh)
//     if (nextProps.requestRefresh !== this.props.requestRefresh & nextProps.requestRefresh) {
//       console.log("Loading - Jumbo")
//       this.setState({loading: true}, this.fetchPatient);
//     }
//   }

//   fetchPatient() {
//     this.state.smart.patient.read().then((p) => {
//         var name = p.name[0];
//         var formatted = name.given.join(" ") + " " + name.family.join(" ");
//         this.setState({patient: formatted + Math.random(), loading: false},     this.props.onComponentRefresh
//  )
//     });
//   }

//   getSmartClient() {
//     return window.FHIR.client({
//       serviceUrl: "https://sb-fhir-dstu2.smarthealthit.org/api/smartdstu2/open",
//       patientId: "smart-1032702",
//       auth: {
//         type: 'none'
//       }
//     });
//   }
<div>
  <Jumbotron>
    <h1 className="App-title display-3">Welcome to mPOWEr Lite!</h1>
    <p>The current time is: {currentTime}</p>
    <p className='lead'>Smart Client Demo Patient: { loading ? "Loading" : patient_name }</p>
  </Jumbotron>
</div>

export default Jumbo;