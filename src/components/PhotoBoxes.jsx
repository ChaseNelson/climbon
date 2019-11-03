import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import PropTypes from 'prop-types';
import axios from 'axios';
import GoogleImages from 'google-images';
import theme from '../theme';

class PhotoBoxes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }

  getImages = () => {
    const { name, state } = this.props;
    console.log('fetching images');
    const client = new GoogleImages();
    const options = {
      size: 'medium',
      type: 'photo',
    };
    client
      .search(`${name} ${state}`, options)
      .then(images => {
        console.log(images);
        this.setState({ images });
      })
      .catch(err => {
        console.log('ERR!!!!!', err);
        this.setState({
          images: [
            {
              url: 'http://www.alpinist.com/media/web16f/ondra-dawn-wall-1.jpg',
              type: 'Adam Ondra',
            },
          ],
        });
      });
  };

  componentDidMount = () => {
    this.getImages();
  };

  displayImages = () => {
    const { images } = this.state;
    if (images.length === 0) return <div />;
    return images.slice(0, 3).map(element => (
      <GridListTile cols={2}>
        <img src={element.url} alt={element.type} />
      </GridListTile>
    ));
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment className={classes.GridListRoot}>
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
          {this.displayImages()}
        </GridList>
      </React.Fragment>
    );
  }
}

PhotoBoxes.propTypes = {
  classes: PropTypes.object,
  name: PropTypes.string,
  state: PropTypes.string,
  city: PropTypes.string,
};

export default withStyles(theme)(PhotoBoxes);
