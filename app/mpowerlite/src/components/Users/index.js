import React from 'react';
import { Column, Col, Card, CardBody, CardTitle, CardText, Table } from 'reactstrap';

export default class extends React.Component {
  render() {
    return (
      <Col sm='6'>
        <Card>
          <CardBody>
            <CardTitle>Users</CardTitle>
            <CardText>List of users recieved from mPOWEr API</CardText>
          </CardBody>
          <CardBody>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {/*
                  this.state.users.map((user) =>
                    <tr>
                      <th scope="row">{user.id}</th>
                      <td>{user.first_name}</td>
                      <td>{user.last_name}</td>
                      <td>{user.email}</td>
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
