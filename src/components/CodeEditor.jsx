import React from 'react';
import styled from 'styled-components';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material-palenight.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled as ControlledEditor } from 'react-codemirror2';

const CodeEditorContainer = styled.section`
  padding: 1rem;
  grid-column: 3 / 4;
  grid-row: 2 / 3;
  background-color: ${({ theme }) => theme.colors.bodyWindow};
  height: 100%;
  width: 100%;
  overflow: auto;
  min-width: 10rem;
  resize: horizontal;

  .CodeMirror {
    font-size: ${({ theme }) => theme.fontSize.h4};
  }
`

const CodeEditor = (props) => {
  const {
    language,
    value,
    onChange
  } = props

  function handleChange(editor, data, value) {
    onChange(value)
  }

  return (
    <CodeEditorContainer>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: 'material-palenight',
          lineNumbers: true,
        }}
      />
    </CodeEditorContainer>
  )
}

export default CodeEditor;