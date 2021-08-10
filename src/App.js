import React from 'react';
import { Container } from '@material-ui/core';

import Header from './components/header/Header.js'
import GetDataFromServer from './adapters/loadDataFromServer.js';
//import './App.js';

const language_code = 'en_US';
const word = 'plane';
const API_URL = `https://api.dictionaryapi.dev/api/v2/entries/${language_code}/${word}`;

function App() {
  return (
    <div className="App" style={{ height: '100vh', color: 'black' }}>
      <Container
        maxWidth="md"
        style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
      >
        <Header />
        <GetDataFromServer apiURL={API_URL} />
      </Container>
    </div>
  );
}

export default App;
