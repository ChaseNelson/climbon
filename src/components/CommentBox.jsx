import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import LikeButton from './LikeButton';
import theme from '../theme';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'this is a sample comment.',
    };
  }

  render() {
    const { classes } = this.props;
    const { message } = this.state;
    return (
      <>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="body2">{message}</Typography>
          </CardContent>
          <CardActions disableSpacing>
            <LikeButton />
          </CardActions>
        </Card>
      </>
    );
  }
}

export default withStyles(theme)(CommentBox);
