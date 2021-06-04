import React, { Component } from 'react';
import Rut from './Rut';
import Confirm from './Confirm';
import Success from './Success';
import Reserva from './Reserva';
import firebase from '../firebase/Conexion.js'

export class Agenda extends Component {
  state = {
    step: 1,
    rut: '',
    fecha:'',
    hora: '',
    nombre:'',
    correo:'',
  };
  
  peticionPost=()=>{
    firebase.child("reserva").push(this.state,
      error=>{
        if(error)console.log(error)
      });
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };
  
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };
  
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };
  
  render() {
    const { step } = this.state;
    const { rut, fecha, hora, nombre, correo } = this.state;
    const values = { rut,fecha, hora, nombre, correo };
    switch (step) {
      case 1:
        return (
          <Rut
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Reserva
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
        />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
            peticionPost={this.peticionPost}
          />
        );
      case 4:
        return <Success />;
        
      default:
      return 'Paso no encontrado';
    }
  }
}

export default Agenda;
