import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import photo from '../photo.png';
import theme from '../theme';

class About extends Component {
  render() {
    const { mode, src, height, width, style, ...props } = this.props;
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
        <div {...props} style={{ ...defaults, ...style, ...important }} />
        <Box>
          The developers, Chase and Krista, got into rock climbing their
          freshman year at Purdue University and since then their love for the
          outdoors has kept gorwing. Now they also love hiking, camping,
          geocaching, anything to do with the outside and nature! This app will
          allow you to find nearby crags and gyms to go rock climbing, and rate
          the routes you completed for other peoples reference and for your own
          accomplishment!
        </Box>
      </>
    );
  }
}

export default withStyles(theme)(About);
