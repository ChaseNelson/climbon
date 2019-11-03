import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import GymCard from './GymCard';
import theme from '../theme';
import geolocator from '../geolocator';
import firebase from '../firebase';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomLoc: [],
    };
  }

  componentDidUpdate = prevProps => {
    const { locations } = this.props;
    if (prevProps.locations == null && typeof locations == 'object') {
      this.generateLocations();
    }
  };

  diplayLocation = () => {
    const { latitude, isLocationLoading, longitude } = this.props;
    if (isLocationLoading) return 'loading...';
    return `${latitude}, ${longitude}`;
  };

  generateLocations = () => {
    const { locations } = this.props;
    const randomLoc = [];
    for (let i = 0; i < 6; i++) {
      const s = Object.keys(locations)[Math.floor(Math.random() * 50)];
      const l = locations[s][Math.floor(Math.random() * locations[s].length)];

      randomLoc.push({
        name: l.name,
        state: s,
        type: l.type,
        city: l.location,
      });
    }
    this.setState({ randomLoc });
  };

  displaySpots = () => {
    const { randomLoc } = this.state;
    return randomLoc.map(e => (
      <Grid item>
        <GymCard name={e.name} state={e.state} city={e.city} type={e.type} />
      </Grid>
    ));
  };

  render() {
    const { classes, locations } = this.props;
    return (
      <>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h4">Popular Climbing Spots</Typography>
          </Grid>
          {this.displaySpots()}
        </Grid>
      </>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object,
  // isLocationLoading: PropTypes.bool.isRequired,
  // latitude: PropTypes.number.isRequired,
  // longitude: PropTypes.number.isRequired,
  // nearby: PropTypes.array,
};

export default withStyles(theme)(Home);
