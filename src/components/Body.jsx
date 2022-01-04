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

const Body = () => {
  const [lang, setLang] = useState('');
  const [srcDoc, setSrcDoc] = useState('');
  const language = "javascript";

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
        <script>${lang}</script>
      </html>
      `)
    }, 250);

    return () => clearTimeout(timeout);
  }, [language]);

  return (
    <BodyContainer>
      <SideBar />
      <CodeEditor 
        language={language} 
        value={lang} 
        onChange={setLang}
      />
      <OutputPanel srcDoc={srcDoc}/>
    </BodyContainer>
  )
}

export default Body;