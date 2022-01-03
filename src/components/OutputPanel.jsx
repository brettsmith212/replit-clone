import React from 'react';
import styled from 'styled-components';

const OutputPanelContainer = styled.section`
  padding: 1rem;
  grid-column: 4 / 5;
  grid-row: 2 / 3;
  background-color: ${({theme}) => theme.colors.bodyWindow};
  height: 100%;
  width: 100%;
  min-width: 10rem;
  overflow: auto;
  resize: horizontal;
`

const OutputPanel = () => {
  return (
    <OutputPanelContainer>Output Panel</OutputPanelContainer>
  )
}

export default OutputPanel;