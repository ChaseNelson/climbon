import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import theme from '../theme';

class Browse extends Component {
  showAllAreas = () => {
    const { locations } = this.props;
    if (locations == null) return <div />;
    return Object.keys(locations).map(loc => (
      <Grid item xs={4}>
        <Typography variant="h5">{loc}:</Typography>
        {locations[loc].map(area => (
          <Typography variant="body2">• {area.name}</Typography>
        ))}
      </Grid>
    ));
  };

  render() {
    return (
      <>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h2">See All Climbing Areas</Typography>
          </Grid>
          {this.showAllAreas()}
        </Grid>
      </>
    );
  }
}

export default withStyles(theme)(Browse);
