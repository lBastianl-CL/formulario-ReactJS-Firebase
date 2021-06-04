import React, { Component } from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  
  
  render() {
    const {
      values: { rut, fecha, hora, nombre, correo  }, peticionPost
    } = this.props;
    return (    
      <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <center><Typography component={'span'} variant={'h4'}>Confirmación de datos</Typography></center>
        <br/>    
        <Grid container justify = "center">
        <form className="formulario" onSubmit={this.enviarEmail}>
            <List>
              <ListItem>
                <ListItemText primary="Rut" secondary={rut} />
              </ListItem>
              <ListItem>
                <ListItemText  primary="Fecha" secondary={fecha} />
              </ListItem>
              <ListItem>
                <ListItemText  primary="Hora" secondary={hora} />
              </ListItem>
              <ListItem>
                <ListItemText  primary="Nombre" secondary={nombre} />
              </ListItem>
              <ListItem>
                <ListItemText  primary="Correo" secondary={correo} />
              </ListItem>
            </List>
            <br />
            </form>
            
            </Grid>
            <br />
            <br />
            <br />
            <br />
            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Volver</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={()=>{ peticionPost(); this.props.nextStep();}}
            >Confirmar & Continuar</Button>
        </div>  
    );
  }
}

export default Confirm;
