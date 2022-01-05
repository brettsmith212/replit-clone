import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import SideBar from './SideBar' 
import CodeEditor from './CodeEditor' 
import OutputPanel from './OutputPanel' 

const BodyContainer = styled.main`
  height: calc(100vh - ${({theme}) => theme.height.navbar});
  display: grid;
  grid-template-columns: 1rem 1fr 2fr 1fr 1rem;
  grid-template-rows: 1rem 1fr 1rem;
  grid-column-gap: 1rem;
`

const Body = (props) => {
  const { code, setCode, output, error } = props;
  const language = "javascript";

  return (
    <BodyContainer code={code}>
      <SideBar />
      <CodeEditor 
        language={language} 
        value={code} 
        onChange={setCode}
      />
      <OutputPanel output={output} error={error} />
    </BodyContainer>
  )
}

export default Body;