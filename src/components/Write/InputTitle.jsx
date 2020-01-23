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
    backgroundColor: '#F5F5F5'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  button: {
    margin: theme.spacing(1)
  }
}));

function InputTitle(props) {
  const classes = useStyles();

  const handleClickBack = () => {
    props.history.goBack();
  };

  return (
    <Paper className={classes.root} elevation={0} square>
      <IconButton aria-label="move to back" onClick={handleClickBack}>
        <ArrowBackIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Enter Title"
        inputProps={{ 'aria-label': 'Enter Title' }}
        onChange={props.onChange}
      />
      <input
        accept="image/*"
        id="contained-button-file"
        type="file"
        style={{ display: 'none' }}
        onChange={e => props.onTitleImageSelect(e.target.files)}
      />
      <label htmlFor="contained-button-file">
        <Button
          variant="contained"
          color="primary"
          component="span"
          className={classes.button}
          startIcon={<ImageIcon />}
        >
          Title Image
        </Button>
      </label>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<CreateIcon />}
        onClick={props.onSubmitClick}
      >
        Write
      </Button>
    </Paper>
  );
}

export default InputTitle;
