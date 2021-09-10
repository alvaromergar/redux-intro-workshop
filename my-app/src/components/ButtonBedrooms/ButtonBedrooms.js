import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "./style.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function OutlinedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p className="space">Bedrooms:</p>
      <Button className="designButton" variant="outlined">0</Button>
      <Button className="designButton" variant="contained" color="primary">
        1
      </Button>
      <Button className="designButton" variant="outlined" color="primary">
        2
      </Button>
      <Button className="designButton" variant="outlined" color="primary">
        3
      </Button>
      <Button variant="outlined" color="primary">
        More...
      </Button>
    </div>
  );
}