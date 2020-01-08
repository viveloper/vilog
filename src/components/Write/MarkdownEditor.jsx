'use strict';
import React from 'react'
import MdEditor from 'react-markdown-editor-lite'
import MarkdownIt from 'markdown-it'

// const MOCK_DATA = "Hello.\n\n * This is markdown.\n * It is fun\n * Love it or leave it."
const MOCK_DATA = ''
export default class Demo extends React.Component {
  mdParser = null
  constructor(props) {
    super(props)
    this.mdParser = new MarkdownIt(/* Markdown-it options */)
  }
  
  render() {
    return (
      <div style={{ height: '85vh' }}>
        <MdEditor
          value={MOCK_DATA}
          renderHTML={(text) => this.mdParser.render(text)}
          onChange={this.props.onChange}          
        />
      </div>
    )
  }
}