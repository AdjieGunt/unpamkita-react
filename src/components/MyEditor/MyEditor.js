import React from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';
import './MyEditor.scss'
// import * as FontAwesome from 'react-icons/fa'

class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      titleState : EditorState.createEmpty(),
      contentState : EditorState.createEmpty(),
    };
    this.onTitleChange = (titleState) => this.setState({titleState});
    this.onContentChange = (contentState) => this.setState({contentState});
    
  }
  _onBoldClick() {
    this.onContentChange(RichUtils.toggleInlineStyle(this.state.contentState, 'BOLD'));
  }

  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onContentChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  render() {
    return (
      <div className=' article-form panel'>
        <div className='colums editor-tools'>
          <div className='is-12'>
                <ul className='field has-addons'>
                  <li className="control" onClick={this._onBoldClick.bind(this)}> 
                      <a className="button">
                        <span className="icon is-small">
                          B
                        </span>
                      </a>
                  </li>
                  <li className="control"> 
                      <a className="button">
                        <span className="icon is-small">
                          I
                        </span>
                      </a>
                  </li>
                  <li className="control"> 
                      <a className="button">
                        <span className="icon is-small">
                        U
                        </span>
                      </a>
                  </li>
                </ul>
            </div>
          
        </div>
        <div className='columns'>
          <div className='column is-8 '>
            <label className="article-title">Judul Artikel</label>
            <div style={this.styles.title}> 
              <Editor editorState={this.state.titleState} onChange={this.onTitleChange} />
            </div>
            <div style={this.styles.content} onClick={this.focus}> 
              <Editor editorState={this.state.contentState} handleKeyCommand={this.handleKeyCommand} onChange={this.onContentChange} />
            </div>
          </div>
          <div className='is-5'>
            <div className='panel'>
              <p className="panel-heading">
                Kategori
              </p>
              <div className='panel-block'>
                <div className="field">
                  <div className="control">
                    <div className="select">
                      <select>
                        <option>Select dropdown</option>
                        <option>With options</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel-block">
                <button className="button is-info is-outlined is-fullwidth">
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  styles = {
    title : {
      fontSize : '1rem',
      fontWeight: 'bold',
      borderBottom: '1px solid #999',
      padding: '5px'
    },
    content : {
      marginTop : '10px',
      padding: '5px'
    }
  }
}

export default MyEditor