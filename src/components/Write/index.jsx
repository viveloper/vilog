import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputTitle from './InputTitle';
import InputBody from './InputBody';
import Preview from './Preview';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Write = props => {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <InputTitle />
        </Grid>
        <Grid item xs={6}>
          <InputBody />
        </Grid>
        <Grid item xs={6}>
          <Preview />
        </Grid>
      </Grid>
    </div>
  );
}

export default Write;