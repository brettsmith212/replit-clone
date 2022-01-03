import React from 'react'
import styled from 'styled-components'

const SideBarContainer = styled.section`
  padding: 1rem;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  background-color: ${({theme}) => theme.colors.bodyWindow};
  height: 100%;
  width: 100%;
  overflow: auto;
  min-width: 10rem;
  resize: horizontal;
`

const SideBar = () => {

  return (
    <>
      <SideBarContainer>SideBar</SideBarContainer>
    </>
  )
}

export default SideBar;