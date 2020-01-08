import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import InputTitle from './InputTitle';
import MarkdownEditor from './MarkdownEditor';
import withAuth from '../../hoc/withAuth';

const Write = props => {  
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('');

  const user = useSelector(state => state.user)

  const handleTitleChange = e => {
    setTitle(e.target.value)
  }

  const handleEditorChange = ({ html, text }) => {
    setContent(text)
  }

  const handleSubmitClick = e => {
    console.log({
      title,
      content,
      author: user.nickname,
      image: 'https://source.unsplash.com/random',
      section: props.match.params.sectionName
    })
  }

  return (
    <div>
      <InputTitle history={props.history} onChange={handleTitleChange} onSubmitClick={handleSubmitClick} />
      <MarkdownEditor onChange={handleEditorChange} />
    </div>
  );
}

export default withAuth(Write);