import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import InputTitle from './InputTitle';
import MarkdownEditor from './MarkdownEditor';
import withAuth from '../../hoc/withAuth';
import {addPostThunk} from '../../store/actions';

const Write = props => {  
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  const handleTitleChange = e => {
    setTitle(e.target.value)
  }

  const handleEditorChange = ({ html, text }) => {
    setContent(text)
  }

  const handleSubmitClick = e => {
    const submitData = {
      title,
      content,
      image: 'https://source.unsplash.com/random',
      section: props.match.params.sectionName
    };
    dispatch(addPostThunk({...submitData, history: props.history}));
  }

  return (
    <div>
      <InputTitle history={props.history} onChange={handleTitleChange} onSubmitClick={handleSubmitClick} />
      <MarkdownEditor onChange={handleEditorChange} />
    </div>
  );
}

export default withAuth(Write);