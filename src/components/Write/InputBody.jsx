import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import ImageIcon from '@material-ui/icons/Image';
import CreateIcon from '@material-ui/icons/Create';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    display: 'flex',
    color: theme.palette.text.secondary,
    backgroundColor: '#273043',
    height: '80vh'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function InputBody() {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={0} square>
      <InputBase
        className={classes.input}
        placeholder="Enter your story"
        inputProps={{ 'aria-label': 'Enter your story' }}
        multiline
      />
    </Paper>
  );
}

export default InputBody;