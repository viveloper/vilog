import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  sectionTitle: {
    textTransform: 'capitalize'
  },
  searchForm: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50%',
      minWidth: '200px',
    },
    display: 'flex',
    justifyContent: 'center'
  },
}));

function Title(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography className={classes.sectionTitle} component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            {props.title}
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            {props.description}
          </Typography>
          <div className={classes.heroButtons}>
            <form className={classes.searchForm} noValidate autoComplete="off">
              <TextField id="outlined-basic" label="Search" variant="outlined" />
            </form>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Title