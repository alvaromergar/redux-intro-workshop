import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

import { connect } from "./react-redux";

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
    CoodCondition: true,
    NewHomes: false,
    NeedsRenovation: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { CoodCondition, NewHomes, NeedsRenovation} = state;
  const error = [CoodCondition, NewHomes, NeedsRenovation].filter((v) => v).length !== 2;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Condition</FormLabel>
        <FormGroup row>
          <FormControlLabel
            control={<Checkbox checked={CoodCondition} onChange={handleChange} color="primary" name="CoodCondition" />}
            label="Cood Condition"
          />
          <FormControlLabel
            control={<Checkbox checked={NewHomes} onChange={handleChange} color="primary" name="NewHomes" />}
            label="New Homes"
          />
        </FormGroup>
        <FormGroup row>
          <FormControlLabel
            control={<Checkbox checked={NeedsRenovation} onChange={handleChange} color="primary" name="NeedsRenovation" />}
            label="Needs Renovation"
          />
        </FormGroup>
      </FormControl>
      
    </div>
  );
}
