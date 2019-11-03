import React, { Component } from 'react';
import DarkSkyApi from 'dark-sky-api';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class WeatherBox extends Component {
  constructor(props) {
    super(props);
    this.state = { result: null };
    this.getWeather();
  }

  getWeather = () => {
    DarkSkyApi.apiKey = 'ca272be3338408c1f75d16676791c2f4';
    DarkSkyApi.proxy = true;

    DarkSkyApi.loadCurrent().then(result => {
      console.log('darkskyapi', result);
      this.setState({ result });
    });
  };

  displayWeather = () => {
    const { result } = this.state;
    if (result == null) return <div />;
    return (
      <div>
        <Grid container direction="column">
          <Grid item>
            <Typography>Today</Typography>
          </Grid>
          <Grid item>
            <Typography>Current temperature: {result.temperature} F</Typography>
          </Grid>
          <Grid item>
            <Typography>
              Nearest storm: {result.nearestStormDistance} miles away
            </Typography>
          </Grid>
          <Grid item>
            <Typography>Visibility: {result.visibility} miles</Typography>
          </Grid>
        </Grid>
      </div>
    );
  };

  render() {
    return <>{this.displayWeather()}</>;
  }
}

export default WeatherBox;
