import React, { useState } from 'react';
import { Container } from '@material-ui/core';

import Header from './components/header/Header.js';
import MeaningCards from './adapters/MeaningCards.js';
//import './App.js';

function App() {
  const [category, setCategory] = useState('en');
  const [word, setWord] = useState(' ');
  
  const API_URL = `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`;
  console.log(API_URL)

  return (
    <div className="App" style={{ height: '100vh', color: 'black' }}>
      <Container
        maxWidth="md"
        style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
      >
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
        />
        <MeaningCards apiURL={API_URL} />
      </Container>
    </div>
  );
}

export default App;
