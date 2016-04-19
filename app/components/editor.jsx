import React from 'react'
import AceEditor from 'react-ace'

import 'brace/mode/javascript'
import 'brace/theme/twilight'

export default class Editor extends React.Component {
  onChange (newValue) {
    console.log('change', newValue)
  }
  render () {
    return (
      <div className='editor'>
        <AceEditor
          // mode='javascript'
          theme='twilight'
          onchange={this.onChange.bind(this)}
          name='ace-editor'
          editorProps={{$blockScrolling: true}}
          height='100%'
          width='100%'
        />
      </div>
        )
  }
}
