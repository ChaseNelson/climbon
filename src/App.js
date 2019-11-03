import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import geolocator from './geolocator';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Browse from './components/Browse';
import Weather from './components/Weather';
import './App.css';
import firebase from './firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      loading: true,
      longitude: 0,
      locations: null,
    };
  }

  componentDidMount = () => {
    this.getCurrentLocation();
    this.getAllLocations();
  };

  getAllLocations = () => {
    firebase
      .database()
      .ref('/locations')
      .on('value', snapshot => {
        const types = snapshot.val();
        this.setState({ locations: { ...types } });
      });
  };

  getCurrentLocation = () => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumWait: 10000, // max wait time for desired accuracy
      maximumAge: 0, // disable cache
      desiredAccuracy: 30, // meters
      fallbackToIP: true, // fallback to IP if Geolocation fails or rejected
      addressLookup: false, // requires Google API key if true
      timezone: false, // requires Google API key if true
      map: '', // interactive map element id (or options object)
      staticMap: true, // get a static map image URL (boolean or options object)
    };

    geolocator.locate(options, (err, location) => {
      if (err) return console.log(err);
      this.setState({
        latitude: location.coords.latitude,
        loading: false,
        longitude: location.coords.longitude,
      });
      return 1;
    });
  };

  render() {
    const { latitude, loading, longitude, locations } = this.state;
    return (
      <>
        <CssBaseline />
        <div>
          <Header />
          <main>
            <div />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Home
                    latitude={latitude}
                    longitude={longitude}
                    isLocationLoading={loading}
                    locations={locations}
                  />
                )}
              />
              <Route exact path="/About" component={About} />
              <Route exact path="/Weather" component={Weather} />
              <Route exact path="/Browse" component={Browse} />
            </Switch>
          </main>
        </div>
      </>
    );
  }
}

export default App;
