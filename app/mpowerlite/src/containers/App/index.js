import React, {Component} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import {Container} from 'reactstrap';

import './App.css';

import NavBar from '../../components/NavBar';
import UpdateHome from '../../containers/UpdateHome';
import Patients from '../../components/Patients';
import Users from '../../components/Users';
import Patient from '../../components/Patient';

const App = props => {
 
  return ( <div id='viewport'>
    <Router>
      <div>
        <NavBar collapsed={false} />
        <Container fluid={true}>
          <Switch>
            <Route exact path='/' render={() => <UpdateHome timezone='cet' /> } />
            <Route exact path='/time/:timezone'component={UpdateHome} />
            <Route path='/users' render={() => <Users />} />
            <Route path='/patients' render={() => <Patients />} />
            <Route path='/patient/:mrn' component={Patient} />
          </Switch>
        </Container>
      </div>
    </Router>
  </div>
  )
}

export default App;
