import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

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
  searchFormContainer: {
    '& > *': {
      margin: theme.spacing(1),
    },
    display: 'flex',
    justifyContent: 'center'
  },
  writeButtonContainer: {
    '& > *': {
      margin: theme.spacing(1),
    },
    display: 'flex',
    justifyContent: 'center'
  },
  writeButton: {
    fontSize: '1.2rem'
  }
}));

function Title(props) {
  const classes = useStyles();

  const handleClickWrite = () => {
    props.history.push(`/section/${props.title}/write`);
  }

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
            <form className={classes.searchFormContainer} noValidate autoComplete="off">
              <TextField id="outlined-basic" label="Search" variant="outlined" fullWidth />
            </form>
            <div className={classes.writeButtonContainer}>
              <Button className={classes.writeButton} variant="contained" fullWidth onClick={handleClickWrite}>Write</Button>
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Title