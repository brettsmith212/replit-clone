import React, { useState } from 'react';
import axios from 'axios'
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/Theme";
import GlobalStyles from "./components/styles/Global";
import NavBar from "./components/NavBar";
import Body from "./components/Body";

function App() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    const payload = {
      language: 'javascript',
      code,
    };

    try {
      const { data } = await axios.post("https://replit-backend.brettsmith212.repl.co/run", payload);
      setOutput(data.output)
    } catch (err) {
      console.log(err.response)
    }
    setIsLoading(false);
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <NavBar handleSubmit={handleSubmit} isLoading={isLoading} />
        <Body code={code} setCode={setCode} output={output} />
      </>
    </ThemeProvider>
  );
}

export default App;