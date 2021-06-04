import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class Rut extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <br />
        <br />
        <form >
        <center><Typography component={'span'} variant={'h4'}>Ingrese Rut</Typography></center>
        <br />
        <br />
        <center>
        <TextField id="rut" 
          defaultValue={values.rut} 
          onChange={handleChange('rut')} 
          label="Rut:"  
          InputLabelProps={{shrink: true,}}/>
        </center>     
        </form>
        <br/>
        <br/>
        <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continuar</Button>
        </div>
    );
  }
}

export default Rut;
