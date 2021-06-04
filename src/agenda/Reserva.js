import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export class Reserva extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();      
    };
  
    back = e => {
      e.preventDefault();
      this.props.prevStep();
    };
  
    render() {
      const { values, handleChange} = this.props;
      return (
        <div>
        <center><Typography component={'span'} variant={'h4'}>Agendar</Typography></center> 
        <form noValidate >
          <center>
            <TextField  label="Fecha" type="date" 
               name="fecha" defaultValue={values.fecha} 
               onChange={handleChange('fecha')} InputLabelProps={{shrink: true,}}/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            <TextField  label="Hora" type="time" 
                name="hora" defaultValue={values.hora} 
                onChange={handleChange('hora')} InputLabelProps={{shrink: true,}} inputProps={{step: 300}}/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            <TextField name="name" label="Ingrese Nombre:" 
              defaultValue={values.nombre} onChange={handleChange('nombre')}  InputLabelProps={{shrink: true}}/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            <TextField name="email" label="Correo:" defaultValue={values.correo} 
              onChange={handleChange('correo')}  InputLabelProps={{shrink: true,}}/>
          </center>
        </form>
        <Button
          color="secondary"
          variant="contained"
          onClick={this.back}
          >Volver</Button>
        <Button
          color="primary"
          variant="contained"
          onClick={this.continue}
          >Continuar</Button>
        </div>
      );
    }
  }
  
export default Reserva;