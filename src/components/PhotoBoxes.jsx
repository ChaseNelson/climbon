import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import GridList from '@material-ui/core/GridList';
//import GridListTile from '@material-ui/core/GridListTile';
import theme from '../theme';

  {render() {
    const { classes } = this.props;
    const { tileData } = this.state;
    return (
      <React.Fragment className={classes.GridListRoot}>
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
          {tileData.map(tile => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img src={tile.img} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </React.Fragment>
    );
  };
}

export default withStyles(theme)(PhotoBoxes);
