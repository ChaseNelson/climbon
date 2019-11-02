import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import 'typeface-lobster';
import 'typeface-pacifico';
import 'typeface-roboto';

class Header extends Component {
  render() {
    return (
      <>
        <AppBar position="static">
          <Toolbar>
            <Button component={Link} to="/">
              Climb On
            </Button>
            <Button component={Link} to="/About">
              About
            </Button>
            <Button component={Link} to="/Weather">
              Weather
            </Button>
            <Button component={Link} to="/Browse">
              Browse
            </Button>
          </Toolbar>
        </AppBar>
      </>
    );
  }
}

export default Header;
