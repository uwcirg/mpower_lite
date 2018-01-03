import React, {Component} from 'react';
//import logo from '.\\logo-for-web.png';
//import { ActivityIndicator, ListView, Text, View } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      patients: [],
      users: []
    }
  }

  componentDidMount() {
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
