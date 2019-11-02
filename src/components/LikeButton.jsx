import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import theme from '../theme';

class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      likedPressed: false,
    };
  }

  onLikeButtonPress = () => {
    const { likedPressed } = this.state;
    if (!likedPressed) {
      this.setState(state => ({ likes: state.likes + 1, likedPressed: true }));
    } else {
      this.setState(state => ({ likes: state.likes - 1, likedPressed: false }));
    }
  };

  render() {
    const { classes } = this.props;
    const { likes } = this.state;
    return (
      <>
        <Button onClick={this.onLikeButtonPress}>{likes} likes</Button>
      </>
    );
  }
}

export default withStyles(theme)(LikeButton);
