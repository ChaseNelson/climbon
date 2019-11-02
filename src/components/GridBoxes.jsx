import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/styles';
import theme from '../theme';

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
          <Paper className={classes.paper}>Weather</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>Radar</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>Gear</Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(theme)(GridBoxes);
