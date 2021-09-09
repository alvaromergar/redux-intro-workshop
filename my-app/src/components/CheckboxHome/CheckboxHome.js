import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(1),
  },

}));

export default function CheckboxesGroup() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    flat: true,
    house: false,
    duplex: false,
    penthouse: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { flat, house, duplex, penthouse} = state;
  const error = [flat, house, duplex, penthouse].filter((v) => v).length !== 2;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Type of home</FormLabel>
        <FormGroup row>
          <FormControlLabel
            control={<Checkbox checked={flat} onChange={handleChange} color="primary" name="flat" />}
            label="Flat"
          />
          <FormControlLabel
            control={<Checkbox checked={house} onChange={handleChange} color="primary" name="house" />}
            label="House"
          />
        </FormGroup>
        <FormGroup row>
          <FormControlLabel
            control={<Checkbox checked={duplex} onChange={handleChange} color="primary" name="duplex" />}
            label="Duplex"
          />
          <FormControlLabel
            control={<Checkbox checked={penthouse} onChange={handleChange} color="primary" name="penthouse" />}
            label="Penthouse"
          />
        </FormGroup>
      </FormControl>
      
    </div>
  );
}
