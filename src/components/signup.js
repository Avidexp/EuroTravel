import {Button, Jumbotron, Form, Col, FormGroup, FormControl, Checkbox, ControlLabel} from 'react-bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';

export default class Signup extends React.Component{
    render(){
        return(
            <div>
                <Form horizontal>
            <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
                Email
            </Col>
            <Col sm={10}>
                <FormControl type="email" placeholder="Email" />
            </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
                Username
            </Col>
            <Col sm={10}>
                <FormControl type="email" placeholder="UserName" />
            </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={2}>
                Password
              </Col>
              <Col sm={10}>
                <FormControl type="password" placeholder="Password" />
              </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={2}>
                Confirm Password
              </Col>
              <Col sm={10}>
                <FormControl type="password" placeholder="Password" />
              </Col>
            </FormGroup>
        
        
            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button type="submit">
                  Sign in
                </Button>
              </Col>
            </FormGroup>
          </Form>
            </div>
        )
    }
}