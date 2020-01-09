import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

export default function UploadButtons() {
  const classes = useStyles();

  const [selectedFiles, setSelectedFiles] = React.useState([]);


  const handleFileChange = e => {
    setSelectedFiles(e.target.files)
  }

  const handleSubmit = e => {
    e.preventDefault();

    const formData = new FormData();
    for(let i=0; i<selectedFiles.length; i++) {
      formData.append(`file${i}`, selectedFiles[i]);
    }

    axios.post("http://localhost:5000/api/upload", formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then(res => {
      console.log('success')
    }).catch(err => {
      console.log('failure')
    })
  }

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit}>
        <input
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
          onChange={handleFileChange}
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" color="primary" component="span">
            Select File
          </Button>
        </label>
        <Button type="submit">Upload</Button>
      </form>
    </div>
  );
}