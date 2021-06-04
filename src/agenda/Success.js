import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <center>
            <h1>¡Tu información ha sido enviada a la base de datos!</h1>
            <Button
              color="secondary"
              variant="contained"
              href="/Agenda"
            >Volver a Agendar</Button>
          </center>
          <br />
        <br />
        <br />
        <br />  
        </div>
    );
  }
}

export default Success;
