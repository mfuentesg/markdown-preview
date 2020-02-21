import React from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';

import marked from 'marked';
import highlight from 'highlight.js';

import 'codemirror/mode/markdown/markdown';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material-darker.css';
import 'highlight.js/styles/magula.css';

import './style.css';

marked.setOptions({
  highlight: function (code, lang) {
    const language = highlight.getLanguage(lang) ? lang : 'plaintext';
    return highlight.highlight(language, code).value;
  }
});

export default ({ value, onChange }) => {
  return (
    <CodeMirror
      value={value}
      options={{
        mode: 'markdown',
        autofocus: true,
        theme: 'material-darker',
        lineNumbers: true,
        lineWrapping: true
      }}
      onBeforeChange={(editor, data, value) => onChange(value)}
    />
  );
};