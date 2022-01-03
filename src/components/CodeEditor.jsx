import React from 'react';
import styled from 'styled-components';

const CodeEditorContainer = styled.section`
  padding: 1rem;
  grid-column: 3 / 4;
  grid-row: 2 / 3;
  background-color: ${({theme}) => theme.colors.bodyWindow};
  height: 100%;
  width: 100%;
  overflow: auto;
  min-width: 10rem;
  resize: horizontal;
`

const CodeEditor = () => {
  return (
    <CodeEditorContainer>CodeEditor</CodeEditorContainer>
  )
}

export default CodeEditor;