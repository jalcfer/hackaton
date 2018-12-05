import React, { Component } from "react";
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../Actions";
import {auth} from "../Config/firebase"

class Login extends Component {
  state = {
    addFormVisible: false,
    addFormValue: ""
  };

  componentWillMount() {
    auth.onAuthStateChanged((user)=>{
      if(user){
        this.props.history.push('/')
      }
    })

  }

  renderNavBar = () => {
  }

  renderSlider = () => {

  }

  renderRetos = () => {

  }

  renderFooter = () => {

  }

  render() {
    return (
      <Container className="Login">
        <h2>Bienvenido</h2>
        <Form className="form">
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="myemail@email.com"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="********"
              />
            </FormGroup>
          </Col>
          <Button>Ingresar</Button>
        </Form>
      </Container>
    )
  }
}

const mapStateToProps = ({ retos }) => {
  return {
    retos
  };
};

export default connect(mapStateToProps, actions)(Login);