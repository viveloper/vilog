import React from 'react';
import InputTitle from './InputTitle';
import MarkdownEditor from './MarkdownEditor';

const Write = props => {  
  return (
    <div>
      <InputTitle history={props.history} />
      <MarkdownEditor />
    </div>
  );
}

export default Write;