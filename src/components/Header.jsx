import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import 'typeface-lobster';
import 'typeface-pacifico';
import 'typeface-roboto';
import theme from '../theme';

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment className={classes.root}>
        <AppBar position="static" color="#ffffff">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Climb On
            </Typography>
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
      </React.Fragment>
    );
  }
}

export default withStyles(theme)(Header);
