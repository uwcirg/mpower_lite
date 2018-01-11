import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

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
      patient_name: ""
    };
  }


  componentDidMount() {
    // var api_path = "https://mpower-api-docker.cirg.washington.edu";
    var api_path = "localhost:8080";

    console.log("##");
    console.log(this.state.fhir);
    console.log("##");
    // console.log(this.state.smart.patient.api.search({type: 'Condition'}));
    console.log("##");

    var smart = window.FHIR.client({
      serviceUrl: "https://sb-fhir-dstu2.smarthealthit.org/api/smartdstu2/open",
      patientId: "smart-1032702",
      auth: {
        type: 'none'
      }
    });

    smart.patient.read().then((p) => {
        var name = p.name[0];
        var formatted = name.given.join(" ") + " " + name.family.join(" ");
        console.log(formatted);
        console.log(this);
        this.setState({patient_name: formatted})
    });

    fetch(api_path+'/api/v1.0/patients').then((response) => response.json()).then((responseJson) => {
      console.log(responseJson.patients)
      this.setState({patients: responseJson.patients})
    }).catch((error) => {
      console.error(error);
    });

    fetch(api_path+'/api/v1.0/users').then((response) => response.json()).then((responseJson) => {
      console.log(responseJson.users)
      this.setState({users: responseJson.users})
    }).catch((error) => {
      console.error(error);
    });
  }

  render() {
    return ( <div id='viewport'>
      <NavBar />
      <Container fluid={true}>
        <Jumbo />
        <Row>
          <Users />
          <Patients />
        </Row>
      </Container>
    </div>
    )
  }
}

export default App;
