import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import theme from '../theme';

class RatingScale extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: '',
      open: false,
      options: [
        '',
        '5.1',
        '5.2',
        '5.3',
        '5.4',
        '5.5',
        '5.6',
        '5.7',
        '5.8',
        '5.9',
        '5.10',
        '5.11',
        '5.12',
        '5.13',
        '5.14',
      ],
    };
  }

  handleClick = e => {
    this.setState({ open: true });
  };

  handleClose = e => {
    this.setState({ rating: e.currentTarget.innerText || '', open: false });
  };

  render() {
    const ITEM_HEIGHT = 48;

    const { rating, options, open } = this.state;

    return (
      <div>
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Typography>Rating: {rating}</Typography>
        <Menu
          id="long-menu"
          keepMounted
          open={open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200,
            },
          }}
        >
          {options.map(option => (
            <MenuItem key={option} value={option} onClick={this.handleClose}>
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

export default withStyles(theme)(RatingScale);
