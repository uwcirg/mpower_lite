import React, {Component} from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import './App.css';

import NavBar from '../components/NavBar';
import Patients from '../components/Patients';
import Users from '../components/Users';
import Jumbo from '../components/Jumbo';

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
    // var api_path = "https://mpower-api-docker.cirg.washington.edu";

    // console.log("##");
    // console.log(this.state.fhir);
    // console.log("##");
    // // console.log(this.state.smart.patient.api.search({type: 'Condition'}));
    // console.log("##");



    //

    //
    // fetch(api_path+'/api/v1.0/users').then((response) => response.json()).then((responseJson) => {
    //   console.log(responseJson.users)
    //   this.setState({users: responseJson.users})
    // }).catch((error) => {
    //   console.error(error);
    // });
  }

  render() {
    const {refreshing, refreshU, refreshP} = this.state;

    return ( <div id='viewport'>
      <NavBar />
      <Container fluid={true}>
        <Jumbo onComponentRefresh={this.onComponentRefresh.bind(this)} requestRefresh={refreshing} />

        <Button block color='info' size='large' onClick={this.refreshAll.bind(this)}>
          <i className='fa fa-refresh' />
          &nbsp;Load
        </Button>

        <br />

        <Row>
          <Users requestRefresh={refreshU} onComponentRefresh={this.onUserRefresh.bind(this)} />
          <Patients requestRefresh={refreshP} onComponentRefresh={this.onPatientRefresh.bind(this)} />
        </Row>
      </Container>
    </div>
    )
  }
}

export default App;
