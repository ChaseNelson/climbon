import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import theme from '../theme';
import PhotoBoxes from './PhotoBoxes';
import CommentBox from './CommentBox';

class GymCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Red River Gorge',
      subhead: 'Crag',
    };
  }

  render() {
    const { classes } = this.props;
    const { name, subhead } = this.state;
    return (
      <>
        <Card className={classes.card}>
          <CardHeader title={name} subheader={subhead} />
          <CardContent>
            <PhotoBoxes />
            <CommentBox />
          </CardContent>
        </Card>
      </>
    );
  }
}

export default withStyles(theme)(GymCard);
