import React from 'react';
import styled from 'styled-components';

/********** Styling **********/
// Streamline HQ Icons Used
const Navbar = styled.nav`
  background-color: ${({theme}) => theme.colors.bodyWindow};
  height: 6rem;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`
const Menu = styled.div`
  border: 1px solid red;
  display: flex;
  align-items: center;
  width: 50rem;
`
const RunButtonDiv = styled.div`
  border: 1px solid red;
  margin: 0 auto;
  display: flex;
  align-items: center;
  
  button {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 1.5rem 2rem;
    border: none;
    border-radius: 10px;
    background-color: ${({theme}) => theme.colors.runButtonColor};
    color: #51cf66;
    font-size: ${({theme}) => theme.fontSize.h4};
    font-weight: bold;
  }
  button:hover {
    background-color: ${({theme}) => theme.colors.runButtonHoverColor};
    color: ${({theme}) => theme.colors.whiteFontColor};
  }
  ion-icon {
    font-size: 1.8rem;
    margin-right: 0.6rem;
  }
`
const LeftMenu = styled.div`
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const Hamburger = styled.img`
  width: 2rem;
  margin-right: 1rem;
`
const ReplitLogo = styled.img`
  width: 4rem;
  border-radius: 50%;
  margin-right: 1rem;
`
const ProfileImg = styled.img`
  width: 4.5rem;
  border-radius: 50%;
  margin-right: 1rem;
`
const FilePath = styled.h4`
  font-size: ${({theme}) => theme.fontSize.h4};
  color: ${({theme}) => theme.colors.whiteFontColor}
`
const LanguageIcon = styled.img`
  width: 3rem;
  margin-left: 1rem;
`
const HistoryIcon = styled.img`
  width: 2rem;
  margin-left: 1rem;
`

/********** NavBar Component **********/
const NavBar = () => {
  
  return (
    <Navbar>
      <Menu>
        <Hamburger src="/src/components/assets/hamburger.svg" />
        <ReplitLogo src="/src/components/assets/replitLogo.png" />
        <ProfileImg src="/src/components/assets/astronaut.png" />
        <FilePath>brettsmith212 / replit-clone</FilePath>
        <LanguageIcon src="/src/components/assets/reactImg.png" />
        <HistoryIcon src="/src/components/assets/historyIcon.svg" />
      </Menu>
      <RunButtonDiv><button><ion-icon name="play"></ion-icon>Run</button></RunButtonDiv>
      <LeftMenu>Left Menu</LeftMenu>
    </Navbar>
  )
}

export default NavBar