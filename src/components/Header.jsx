import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import 'typeface-lobster';
import 'typeface-pacifico';
import 'typeface-roboto';

class Header extends Component {
  render() {
    return (
      <>
        <AppBar position="absolute">
          <Toolbar variant="dense">
            <Typography>Climb On</Typography>
          </Toolbar>
        </AppBar>
      </>
    );
  }
}

export default Header;
