/* TODO: change to presentational SFC */

import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import PropTypes from 'prop-types';

const Jumbo = ({patientName, loading, currentTime, updatePatient, updateTime}) => 
<div>
  <Jumbotron>
    <h1 className="App-title display-3">Welcome to mPOWEr Lite!</h1>
    <p>The current time is: {currentTime}</p>
    <p className='lead'>Smart Client Demo Patient: { loading ? "Loading" : patientName }</p>

    <Button block color='info' size='large' onClick={() => { updatePatient(); updateTime(); } }>
      <i className='fa fa-refresh' />
      &nbsp;Load
    </Button>

  </Jumbotron>
</div>

export default Jumbo;