import React, {Component} from 'react';
//import logo from '.\\logo-for-web.png';
//import { ActivityIndicator, ListView, Text, View } from 'react';
import './App.css';
// import FHIR from './fhir-client-native'; // UNSUPPORTED


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

    fetch('https://mpower-api-docker.cirg.washington.edu/api/v1.0/patients').then((response) => response.json()).then((responseJson) => {
      console.log(responseJson.patients)
      this.setState({patients: responseJson.patients})
    }).catch((error) => {
      console.error(error);
    });

    fetch('https://mpower-api-docker.cirg.washington.edu/api/v1.0/users').then((response) => response.json()).then((responseJson) => {
      console.log(responseJson.users)
      this.setState({users: responseJson.users})
    }).catch((error) => {
      console.error(error);
    });
  }



  render() {
    return (<div>

    <div className='jumbotron'>
      <div className='container'>
        <h1 className="App-title">Welcome to mPOWEr Lite!</h1>
        <p>Smart Client Demo: {this.state.patient_name}</p>
      </div>
    </div>
    <div className="container">
      <div className='row'>
        <div className='col-md-6'>
          <div className='panel panel-primary'>
            <div className="panel-heading">List of Users</div>
            <div className="panel-body">
              <p>List of users recieved from mPOWEr API</p>
            </div>
            <div className='table-responsive'>
              <table className="table table-condensed ">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.users.map((user) =>
                      <tr>
                        <th scope="row">{user.id}</th>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.email}</td>
                      </tr>
                    )
                  }
                </tbody>

              </table>
            </div>
          </div>
        </div>

        <div className='col-md-6'>
          <div className='panel panel-primary'>
            <div className="panel-heading">List of Patients</div>
            <div className="panel-body">
              <p>List of patients recieved from mPOWEr API</p>
            </div>
            <div className='table-responsive'>
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>MRN</th>
                    <th>Date of Birth</th>
                    <th>Sex</th>
                    <th>Consent Status</th>
                    <th>Clinical Service</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.patients.map((patient) =>
                      <tr>
                        <th scope="row">{patient.id}</th>
                        <td>{patient.MRN}</td>
                        <td>{patient.birthdate}</td>
                        <td>{patient.gender}</td>
                        <td>{patient.consent_status}</td>
                        <td>{patient.clinical_service}</td>
                      </tr>
                    )
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>
    </div>
    )
  }
}

export default App;
