import React from 'react';
const ReactMarkdown = require('react-markdown');

export default function Markdown(props) {
  return (
    <ReactMarkdown
      source={props.source}      
    />
  )
}

