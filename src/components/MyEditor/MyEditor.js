import React from 'react';
import {Editor, EditorState} from 'draft-js';
import './MyEditor.scss'

class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
  }
  render() {
    return (
      <form className='article-form'>
        <label className="article-title">Judul Artikel</label>
        <Editor id="article-title" editorState={this.state.editorState} onChange={this.onChange} />
      </form>
    );
  }
}

export default MyEditor