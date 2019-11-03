import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import theme from '../theme';
import WeatherBox from './WeatherBox';

class Weather extends Component {
  render() {
    return (
      <>
        <Typography>Weather</Typography>
        <WeatherBox />
      </>
    );
  }
}

export default withStyles(theme)(Weather);
