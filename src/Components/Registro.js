import React, { Component } from "react";
import {
  Container, Col, Form,Row,
  FormGroup, Label, Input,
  Button, Nav, NavItem, NavLink,
  TabContent, TabPane, ButtonGroup
} from 'reactstrap';

import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../Actions";
import '../Styles/Style.css'
import { auth } from "../Config/firebase"
import classnames from 'classnames'

class Registro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
      email:'',
      foto:'https://firebasestorage.googleapis.com/v0/b/hackaton-7c1d5.appspot.com/o/profile.png?alt=media&token=a3c4a89c-4295-4d09-953c-584cb7c6db59',
      identificacion:'',
      nombre:'',
      nombreContacto:'',
      password:'',
      confirmPassword:'',
      telefonoContacto:'',
      tipoDeIdentificacion:null,
      tipoDeUsuario:null,
      esDemandante:false,
      esOfertante:false,
    };
  }

  componentWillMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        if(this.props.userType=='demandante')
          this.props.history.push('/propongoretos')
        else if(this.props.userType=='ofertante')
          this.props.history.push('/aceptoretos')
      }
    })
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  handleRegistrar(e){
    e.preventDefault()
    console.log('state::',this.state)
    const {activeTab,esDemandante,esOfertante} = this.state
    if (activeTab==1){
      const {email,identificacion,nombre,password,telefonoContacto,foto} = this.state
      const tipoDeIdentificacion = 'CC'
      const tipoDeUsuario = 'Natural'
      if (esDemandante) {
        this.props.createDemandante(email,identificacion,nombre,password,telefonoContacto,foto,tipoDeIdentificacion,tipoDeUsuario)
      }else if(esOfertante){
        this.props.createOfertante(email,identificacion,nombre,password,telefonoContacto,foto,tipoDeIdentificacion,tipoDeUsuario)
      }
    }else if(activeTab==2){
      const {email,identificacion,nombre,password,nombreContacto,telefonoContacto,foto} = this.state
      const tipoDeIdentificacion = 'CC'
      const tipoDeUsuario='Juridico'
      if (esDemandante) {
        this.props.createDemandante(email,identificacion,nombre,nombreContacto,password,telefonoContacto,foto,tipoDeIdentificacion,tipoDeUsuario)
      }else if(esOfertante){
        this.props.createOfertante(email,identificacion,nombre,nombreContacto,password,telefonoContacto,foto,tipoDeIdentificacion,tipoDeUsuario)
      }
    }
  }

  handleEmail(event){this.setState({email: event.target.value})}
  handleIdentificacion(event){this.setState({identificacion:event.target.value})}
  handleNombre(event){this.setState({nombre: event.target.value})}
  handleNombreContacto(event){this.setState({nombreContacto: event.target.value})}
  handlePassword(event){this.setState({password: event.target.value})}
  handleConfirmPassword(event){this.setState({confirmPassword: event.target.value})}
  handleTelefonoContacto(event){this.setState({telefonoContacto: event.target.value})}
  handleEsDemandante(event){this.setState({esDemandante: true,esOfertante:false})}
  handleEsOfertante(event){this.setState({esDemandante: false,esOfertante:true})}

  render() {
    return (

      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Persona Natural
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Empresa
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Container className="Login">
              <h2>Bienvenido</h2>
              <Form className="form">
                <Col>
                  <FormGroup>
                    <Label>Cédula de Ciudadanía</Label>
                    <Input type="text" name="cc" id="cc" 
                      placeholder="escriba su número de cédula" value={this.state.identificacion}
                      onChange={this.handleIdentificacion.bind(this)}/>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label>Nombre</Label>
                    <Input 
                      type="text" 
                      name="nombre" 
                      id="nombre" 
                      placeholder="escriba su nombre" 
                      value={this.state.nombre}
                      onChange={this.handleNombre.bind(this)}/>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label>Email</Label>
                    <Input type="email" name="email" id="email" 
                      placeholder="myemail@email.com" value={this.state.email}
                      onChange={this.handleEmail.bind(this)}/>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" 
                    placeholder="********" 
                    value={this.state.password}
                    onChange={this.handlePassword.bind(this)}/>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="password">Confirmar Password</Label>
                    <Input type="password" name="confirm-password" id="confirm-password" placeholder="********" 
                      value={this.state.confirmPassword}
                      onChange={this.handleConfirmPassword.bind(this)}/>
                  </FormGroup>
                </Col>
                <Col>
                  <ButtonGroup>
                    <Button onClick={this.handleEsOfertante.bind(this)}>Propongo Retos</Button>
                    <Button onClick={this.handleEsDemandante.bind(this)}>Acepto Retos</Button>
                  </ButtonGroup>
                </Col>
                <Col><p></p></Col>
                <Col sm="12">
                  <Button onClick={this.handleRegistrar.bind(this)}>Registrar</Button>
                </Col>
              </Form>
            </Container>
          </TabPane>
          <TabPane tabId="2">
          <Container className="Login">
              <h2>Bienvenido</h2>
              <Form className="form">
                <Col>
                  <FormGroup>
                    <Label>Nit</Label>
                    <Input type="text" name="nit" id="nit" 
                      placeholder="Nit de su empresa" value={this.state.identificacion}
                      onChange={this.handleIdentificacion.bind(this)}/>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label>Nombre</Label>
                    <Input type="text" name="empresa-nombre" id="empresa-nombre" 
                      placeholder="nombre de su empresa" value={this.state.nombre}
                      onChange={this.handleNombre.bind(this)}/>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label>Email</Label>
                    <Input type="email" name="empresa-email" id="empresa-email" 
                      placeholder="email de su empresa" value={this.state.email}
                      onChange={this.handleEmail.bind(this)}/>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label>Nombre del contacto</Label>
                    <Input type="text" name="empresa-contacto" id="empresa-contacto" 
                    placeholder="Contacto en la empresa" value={this.state.nombreContacto}
                    onChange={this.handleNombreContacto.bind(this)}/>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label>Teléfono</Label>
                    <Input type="text" name="empresa-contacto-telefono" id="empresa-contacto-telefono" 
                      placeholder="Teléfono del contacto" value={this.state.telefonoContacto}
                      onChange={this.handleTelefonoContacto.bind(this)}/>
                  </FormGroup>
                </Col>
                
                <Col>
                  <FormGroup>
                    <Label for="empresa-password">Password</Label>
                    <Input type="password" name="empresa-password" id="empresa-password" placeholder="********" 
                      value={this.state.password}
                      onChange={this.handlePassword.bind(this)}/>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="empresa-confirm-password">Confirmar Password</Label>
                    <Input type="password" name="empresa-confirm-password" id="empresa-confirm-password" placeholder="********" 
                      value={this.state.confirmPassword}
                      onChange={this.handleConfirmPassword}/>
                  </FormGroup>
                </Col>
                <Col>
                  <ButtonGroup>
                    <Button onClick={this.handleEsDemandante}>Propongo Retos</Button>
                    <Button onClick={this.handleEsOfertante}>Acepto Retos</Button>
                  </ButtonGroup>
                </Col>
                <Col><p></p></Col>
                <Col sm="12">
                  <Button onClick={this.handleRegistrar.bind(this)}>Registrar</Button>
                </Col>
              </Form>
            </Container>
          </TabPane>
        </TabContent>
      </div>

    )
  }
}

const mapStateToProps = ({ retos,userType }) => {
  return {
    retos,
    userType,
  };
};

export default connect(mapStateToProps, actions)(Registro);