import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
    PetsAllowed: true,
    Lift: false,
    Garden: false,
    AirConditioning: false,
    SwimmingPool: false,
    Terrace: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { PetsAllowed, Lift, Garden, AirConditioning, SwimmingPool, Terrace} = state;
  const error = [PetsAllowed, Lift, Garden, AirConditioning, SwimmingPool, Terrace].filter((v) => v).length !== 2;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">More Filters</FormLabel>
        <FormGroup row>
          <FormControlLabel
            control={<Checkbox checked={PetsAllowed} onChange={handleChange} color="primary" name="PetsAllowed" />}
            label="Pets Allowed"
          />
          <FormControlLabel
            control={<Checkbox checked={Lift} onChange={handleChange} color="primary" name="Lift" />}
            label="Lift"
          />
          <FormControlLabel
            control={<Checkbox checked={Garden} onChange={handleChange} color="primary" name="Garden" />}
            label="Garden"
          />
        </FormGroup>
        <FormGroup row>
          <FormControlLabel
            control={<Checkbox checked={AirConditioning} onChange={handleChange} color="primary" name="AirConditioning" />}
            label="Air Conditioning"
          />
          <FormControlLabel
            control={<Checkbox checked={SwimmingPool} onChange={handleChange} color="primary" name="SwimmingPool" />}
            label="Swimming Pool"
          />
          <FormControlLabel
            control={<Checkbox checked={Terrace} onChange={handleChange} color="primary" name="Terrace" />}
            label="Terrace"
          />
        </FormGroup>
      </FormControl>
      
    </div>
  );
}
