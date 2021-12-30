import React from 'react';
import styled from 'styled-components';

const Navbar = styled.nav`
  background-color: ${({theme}) => theme.colors.bodyWindow};
  height: 8rem;
  display: flex;
  align-items: center;
  padding: 0 2rem;
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

const NavBar = () => {
  
  return (
    <Navbar>
      <Hamburger src="/src/components/assets/hamburger.svg" />
      <ReplitLogo src="/src/components/assets/replitLogo.png" />
      <ProfileImg src="/src/components/assets/astronaut.png" />
      <FilePath>brettsmith212 / replit-clone</FilePath>
      <LanguageIcon src="/src/components/assets/reactImg.png" />
      <HistoryIcon src="/src/components/assets/historyIcon.svg" />
    </Navbar>
  )
}

export default NavBar