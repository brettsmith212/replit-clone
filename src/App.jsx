import React from 'react';
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/Theme";
import GlobalStyles from "./components/styles/Global";
import NavBar from "./components/NavBar"
import Body from "./components/Body"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <NavBar />
        <Body />
      </>
    </ThemeProvider>
  );
}

export default App;