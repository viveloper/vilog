import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import InputTitle from './InputTitle';
import MarkdownEditor from './MarkdownEditor';
import withAuth from '../../hoc/withAuth';
import { addPostThunk } from '../../store/actions';
import { uploadPostTiltleImage } from '../../api';

const Write = props => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('## Hello world!!');
  const [selectedFile, setSelectedFile] = useState();

  const dispatch = useDispatch();

  const handleTitleChange = e => {
    setTitle(e.target.value);
  };

  const handleEditorChange = text => {
    setContent(text);
  };

  const handleSubmitClick = e => {
    if (!title || !content) {
      alert('Must not be empty.');
      return;
    }

    const submitData = {
      title,
      content,
      image: '',
      section: props.match.params.sectionName
    };

    uploadPostTiltleImage(selectedFile)
      .then(data => {
        submitData.image = data.imageUrl;
        uploadPost(submitData);
      })
      .catch(err => {
        console.log(err.response);
        uploadPost(submitData);
      })
      .finally(() => {
        setSelectedFile(null);
      });
  };

  const uploadPost = submitData => {
    dispatch(addPostThunk({ ...submitData, history: props.history }));
  };

  const handleTitleImageSelect = files => {
    if (!files || files.length === 0) return;
    setSelectedFile(files[0]);
  };

  return (
    <div>
      <InputTitle
        history={props.history}
        onChange={handleTitleChange}
        onSubmitClick={handleSubmitClick}
        onTitleImageSelect={handleTitleImageSelect}
      />
      <MarkdownEditor content={content} onChange={handleEditorChange} />
    </div>
  );
};

export default withAuth(Write);
