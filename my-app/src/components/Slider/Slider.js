import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import "./style.scss";

const useStyles = makeStyles({
  root: {
    width: 300
  }
});

function valuetext(value) {
  return `${value}€`;
}

export default function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([10000, 300000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" className="spacing" gutterBottom>
        Price Range
      </Typography>
      <Slider
        value={value}
        min={0}
        max={500000}
        onChange={handleChange}
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        className={classes.slider}
      />
    </div>
  );
}
