import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import theme from '../theme';
import PhotoBoxes from './PhotoBoxes';
import CommentBox from './CommentBox';

class GymCard extends Component {
  constructor(props) {
    super(props);
  }

  getSubheader = () => {
    const { state, city, type } = this.props;
    if (type === 'crag') {
      return `${state} - Outdoor Crag`;
    }
    if (type === 'gym') {
      return `${city}, ${state} - Indoor Climbing Gym`;
    }
  };

  render() {
    const { classes, name, state, city, type } = this.props;
    return (
      <>
        <Card className={classes.card}>
          <CardHeader title={name} subheader={this.getSubheader()} />
          <CardContent>
            {type === 'crag' && (
              <PhotoBoxes name={name} state={state} city={city} />
            )}
            <CommentBox />
          </CardContent>
        </Card>
      </>
    );
  }
}

GymCard.propTypes = {
  classes: PropTypes.object,
  name: PropTypes.string,
  state: PropTypes.string,
  city: PropTypes.string,
  type: PropTypes.string,
};

export default withStyles(theme)(GymCard);
