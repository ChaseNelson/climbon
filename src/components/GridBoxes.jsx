import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import theme from '../theme';
import WeatherBox from './WeatherBox';

class GridBoxes extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        spacing={3}
        direction="column"
        justify="flex-start"
        alignItems="flex-end"
      >
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            Weather
            <WeatherBox />
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Typography>Gear</Typography>
            <a href="https://www.blackdiamondequipment.com/en_US/homepage">
              Blackdiamond.com
            </a>
            <Typography> </Typography>
            <a href="https://www.metoliusclimbing.com/">Metolius.com</a>
            <Typography> </Typography>
            <a href="https://www.rei.com/">Rei.com</a>
            <Typography> </Typography>
            <a href="https://www.sportiva.com/">Lasportiva.com</a>
            <Typography> </Typography>
            <a href="https://www.petzl.com/US/en">Petzl.com</a>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(theme)(GridBoxes);
