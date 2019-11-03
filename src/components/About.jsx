import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import photo from '../photo.png';
import theme from '../theme';

class About extends Component {
  render() {
    const { mode, height, width, style } = this.props;
    const modes = {
      fill: 'cover',
      fit: 'contain',
    };
    const size = modes[mode] || 'contain';

    const defaults = {
      height: height || 300,
      width: width || 300,
    };

    const important = {
      backgroundImage: `url("${photo}")`,
      backgroundSize: size,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
    };

    return (
      <>
        <div style={{ ...defaults, ...style, ...important }} />
        <Box textAlign="left">
          The developers, Chase and Krista, got into rock climbing their
          freshman year at Purdue University and since then their love for the
          outdoors has kept <br />
          growing. Now they also love hiking, camping, geocaching, anything to
          do with the outside and nature! This app will allow you to find nearby
          crags <br />
          and gyms to go rock climbing, and rate the routes you completed for
          other peoples reference and for your own accomplishment! Our favorite
          crags are <br />
          Mascatatuck and the Red River Gorge!
        </Box>
      </>
    );
  }
}

export default withStyles(theme)(About);
