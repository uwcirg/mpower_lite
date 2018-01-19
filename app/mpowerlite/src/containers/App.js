import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import {Container} from 'reactstrap';

import './App.css';

import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Patients from '../components/Patients';
import Users from '../components/Users';
import Patient from '../components/Patient';

class App extends Component {
  constructor() {
    super();
    this.state = {
      patients: [],
      users: [],
      fhir: window.fhir,
      patient_name: "",
      refreshing: false,
      refreshP: false,
      refreshU: false
    };
  }

  refresh() {
    this.setState({refreshing: true})
  }

  onComponentRefresh() {
    this.setState({refreshing: false})
  }
  pRefresh() {
    this.setState({refreshP: true})
  }
  onPatientRefresh() {
    this.setState({refreshP: false})
  }
  uRefresh() {
    this.setState({refreshU: true})
  }
  onUserRefresh() {
    this.setState({refreshU: false})
  }

  refreshAll() {
    this.refresh();
    this.pRefresh();
  }

  componentDidMount() {
  }

  render() {
    const {refreshing, refreshU, refreshP} = this.state;
    const homeProps = {
      jumboRefresh: this.onComponentRefresh.bind(this),
      patientRefresh: this.onPatientRefresh.bind(this),
      userRefresh: this.onUserRefresh.bind(this) ,
      buttonBind: this.refreshAll.bind(this),
      refreshing: refreshing,
      refreshU: refreshU,
      refreshP: refreshP
    }

    return ( <div id='viewport'>
      <Router>
        <div>
          <NavBar collapsed={false} />
          <Container fluid={true}>
            <Switch>
              <Route exact path='/' render={() => <Home {...homeProps}  /> } />
              <Route path='/users' render={() => <Users requestRefresh={refreshU} onComponentRefresh={homeProps.userRefresh} />} />
              <Route path='/patients' render={() => <Patients requestRefresh={refreshP} onComponentRefresh={homeProps.patientRefresh} />} />
              <Route path='/patient/:mrn' component={Patient} />
            </Switch>
          </Container>
        </div>
      </Router>
    </div>
    )
  }
}

export default App;
