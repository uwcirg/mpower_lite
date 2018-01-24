import React from 'react';
import PropTypes from 'prop-types';
/* TODO: prop types */
import { Container, Row, Col, Button } from 'reactstrap';

import Patients from '../Patients';
import Users from '../Users';
import Jumbo from '../Jumbo';

// const Home = ({ jumboRefresh, patientRefresh, userRefresh, buttonBind, refreshing, refreshU, refreshP }) =>
const Home = ({ patient_name, loading, currentTime, updateTime }) =>
  <div>
    <Jumbo patient_name={patient_name} loading={loading} currentTime={currentTime} />

    <Button block color='info' size='large' onClick={updateTime}>
      <i className='fa fa-refresh' />
      &nbsp;Load
    </Button>

    <br />

    <Row>
      {/* <Col sm='6'><Users /></Col>
      <Col sm='6'><Patients /></Col> */}
    </Row>
  </div>;

export default Home;