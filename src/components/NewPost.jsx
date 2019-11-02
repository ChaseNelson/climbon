import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CragDropdown from './CragDropdown';
import NewComment from './NewComment';
import RatingScale from './RatingScale';

const useStyles = makeStyles({
  card: {
    maxWidth: 450,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <CragDropdown />
          <NewComment />
          <RatingScale />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Submit
        </Button>
      </CardActions>
    </Card>
  );
}
