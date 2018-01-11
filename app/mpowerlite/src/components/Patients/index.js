import React from 'react';
import { Column, Col, Card, CardBody, CardTitle, CardText, Table } from 'reactstrap';

export default class extends React.Component {
  render() {
    return (
      <Col sm='6'>
        <Card>
          <CardBody>
            <CardTitle>Patients</CardTitle>
            <CardText>List of patients recieved from mPOWEr API</CardText>
          </CardBody>
          <CardBody>
            <Table>
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
                {/*
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
                */}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
    )
  }
}
