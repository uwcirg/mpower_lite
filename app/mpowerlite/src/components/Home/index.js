import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import Patients from '../Patients';
import Users from '../Users';
import Jumbo from '../Jumbo';

const Home = ({ jumboRefresh, patientRefresh, userRefresh, buttonBind, refreshing, refreshU, refreshP }) =>
  <div>
    <Jumbo onComponentRefresh={jumboRefresh} requestRefresh={refreshing} />

    <Button block color='info' size='large' onClick={buttonBind}>
      <i className='fa fa-refresh' />
      &nbsp;Load
    </Button>

    <br />

    <Row>
      <Col sm='6'><Users requestRefresh={refreshU} onComponentRefresh={userRefresh} /></Col>
      <Col sm='6'><Patients requestRefresh={refreshP} onComponentRefresh={patientRefresh} /></Col>
    </Row>
  </div>;

export default Home;
