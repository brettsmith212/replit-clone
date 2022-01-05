import React from 'react';
import styled from 'styled-components';

/********** Styling **********/
const Navbar = styled.nav`
  background-color: ${({ theme }) => theme.colors.bodyWindow};
  height: ${({ theme }) => theme.height.navbar};
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`
const Menu = styled.div`
  display: flex;
  align-items: center;
  width: 50rem;
`
const RunButtonDiv = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
`
const RunButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 1.5rem 2rem;
  border: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.runButtonColor};
  color: #51cf66;
  font-size: ${({ theme }) => theme.fontSize.h4};
  font-weight: bold;

  :hover {
    background-color: ${({ theme }) => theme.colors.runButtonHoverColor};
    color: ${({ theme }) => theme.colors.whiteFontColor};
  }
  ion-icon {
    font-size: 1.8rem;
    margin-right: 0.6rem;
  }
`
const StopButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 1.5rem 2rem;
  border: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.stopButtonColor};
  color: ${({ theme }) => theme.colors.grayFontColor};
  font-size: ${({ theme }) => theme.fontSize.h4};
  font-weight: bold;

  :hover {
    background-color: ${({ theme }) => theme.colors.stopButtonHoverColor};
    color: ${({ theme }) => theme.colors.grayFontColor};
  }
  ion-icon {
    font-size: 1.8rem;
    margin-right: 0.6rem;
  }
`

const LeftMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.h4};
    padding: 0.8rem;
    border-radius: 10px;
    border: none;
    background-color: ${({ theme }) => theme.colors.stopButtonColor};
    color: ${({ theme }) => theme.colors.whiteFontColor};
  }
  button:hover {
    border: 1px solid ${({ theme }) => theme.colors.grayFontColor};
  }
  img {
    width: 1.6rem;
    margin-right: 0.4rem;
  }
  ion-icon {
    font-size: 2rem;
    margin-left: 1rem;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 10px;
  }
  ion-icon:hover {
    background-color: ${({ theme }) => theme.colors.stopButtonColor};

  }
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
  font-size: ${({ theme }) => theme.fontSize.h4};
  color: ${({ theme }) => theme.colors.whiteFontColor}
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
const NavBar = (props) => {
  const { handleSubmit, isLoading } = props

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
      <RunButtonDiv>
        {isLoading ?
          <StopButton>
            <ion-icon name="stop"></ion-icon>
            Stop
          </StopButton>
          :
          <RunButton onClick={handleSubmit}>
            <ion-icon name="play"></ion-icon>
            Run
        </RunButton>
        }
      </RunButtonDiv>
      <LeftMenu>
        <button>
          <img src="/src/components/assets/inviteIcon.svg" />
          Invite
        </button>
        <ion-icon name="search-outline"></ion-icon>
      </LeftMenu>
    </Navbar>
  )
}

export default NavBar