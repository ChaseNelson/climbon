import { createStyles } from '@material-ui/core/styles';

export default createStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Verdana',
    fontSize: 48,
    textTransform: 'lowercase',
  },
  card: {
    maxWidth: 345,
  },
  gridListRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    width: 500,
    height: 450,
  },
  paper: {
    height: 150,
    width: 300,
    textAlign: 'center',
    fontFamily: 'Verdana',
    textTransform: 'lowercase',
    fontSize: 18,
  },
});
