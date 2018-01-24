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
  // constructor() {
  //   super();
  //   this.state = {
  //     patients: [],
  //     users: [],
  //     fhir: window.fhir,
  //     patient_name: "",
  //     refreshing: false,
  //     refreshP: false,
  //     refreshU: false
  //   };
  // }


  // refresh() {
  //   this.setState({refreshing: true})
  // }

  // onComponentRefresh() {
  //   this.setState({refreshing: false})
  // }
  // pRefresh() {
  //   this.setState({refreshP: true})
  // }
  // onPatientRefresh() {
  //   this.setState({refreshP: false})
  // }
  // uRefresh() {
  //   this.setState({refreshU: true})
  // }
  // onUserRefresh() {
  //   this.setState({refreshU: false})
  // }

  // refreshAll() {
  //   this.refresh();
  //   this.pRefresh();
  // }

  // componentDidMount() {
  // }

  return ( <div id='viewport'>
    <Router>
      <div>
        <NavBar collapsed={false} />
        <Container fluid={true}>
          <Switch>
            <Route exact path='/' render={() => <UpdateHome /> } />
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
