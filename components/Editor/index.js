import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';

import marked from 'marked';
import hljs from 'highlight.js';

import 'codemirror/mode/markdown/markdown';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material-darker.css';
import 'highlight.js/styles/magula.css';

import './style.css';

marked.setOptions({
  highlight: function (code, lang) {
    const language = hljs.getLanguage(lang) ? lang : 'plaintext';
    return hljs.highlight(language, code).value;
  }
});

export default () => {
  const [value, setValue] = useState('');

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'stretch',
      justifyContent: 'space-between',
      height: '100vh'
    }}>
      <div style={{ width: '50%', boxSizing: 'border-box' }}>
        <CodeMirror
          value={value}
          options={{
            mode: 'markdown',
            autofocus: true,
            theme: 'material-darker',
            lineNumbers: true,
            lineWrapping: true
          }}
          onBeforeChange={(editor, data, value) => setValue(value)}
        />
      </div>
      <div style={{ width: '50%', padding: '0 10px', boxSizing: 'border-box', overflow: 'auto' }}>
        <div dangerouslySetInnerHTML={{ __html: marked(value) }}/>
      </div>
    </div>

  );
};