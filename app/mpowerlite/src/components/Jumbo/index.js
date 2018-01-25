/* TODO: change to presentational SFC */

import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

// import  SubmitForm from '../../containers/SubmitForm';
import PatientForm from '../../components/PatientForm';

import PropTypes from 'prop-types';


const Jumbo = ({patientName, loading, currentTime, updatePatient, updateTime}) => 
  <div>
    <Jumbotron>
      <h1 className="App-title display-3">Welcome to mPOWEr Lite!</h1>
      <p> 
        The current time is: {currentTime} &nbsp;
        <Button size='sm' color='info' onClick={updateTime}>
          <i className='fa fa-refresh' />
          &nbsp;Reload Time
        </Button>
      </p>

      <p className='lead'>Smart Client Demo Patient: { loading ? "Loading" : patientName }</p>

      <PatientForm handleSubmit={updatePatient} /> 
    </Jumbotron>
  </div>

export default Jumbo;