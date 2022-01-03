import React from 'react';
import styled from 'styled-components'
import SideBar from './SideBar' 
import CodeEditor from './CodeEditor' 
import OutputPanel from './OutputPanel' 

const BodyContainer = styled.main`
  height: calc(100vh - ${({theme}) => theme.height.navbar});
  display: grid;
  grid-template-columns: 1rem 1fr 1fr 1fr 1rem;
  grid-template-rows: 1rem 1fr 1rem;
  grid-column-gap: 1rem;
`

const Body = () => {
  return (
    <BodyContainer>
      <SideBar />
      <CodeEditor />
      <OutputPanel />
    </BodyContainer>
  )
}

export default Body;