import { createStyles } from '@material-ui/styles';

export default createStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
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
});
