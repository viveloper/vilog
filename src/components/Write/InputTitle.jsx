import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ImageIcon from '@material-ui/icons/Image';
import CreateIcon from '@material-ui/icons/Create';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    display: 'flex',
    color: theme.palette.text.secondary,
    backgroundColor: '#95A3B3'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },    
  button: {
    margin: theme.spacing(1),
  },
}));

function InputTitle(props) {
  const classes = useStyles();

  const handleClickBack = () => {
    props.history.goBack()
  }

  const handleClickWrite = () => {
    console.log('Write')
  }

  return (
    <Paper className={classes.root} elevation={0} square>
      <IconButton aria-label="move to back" onClick={handleClickBack}>
        <ArrowBackIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Enter Title"
        inputProps={{ 'aria-label': 'Enter Title' }}
      />
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<ImageIcon />}
      >
        Upload
      </Button>
      <Button
        variant="contained"
        color="default"        
        className={classes.button}
        startIcon={<CreateIcon />}
        onClick={handleClickWrite}
      >
        Write
      </Button>
    </Paper>
  );
}

export default InputTitle;