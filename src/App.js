import React, { useState } from 'react';
import { Container } from '@material-ui/core';

import InputFields from './components/InputFields.js';
import Header from './components/header/Header.js';
import MeaningCards from './components//MeaningCards.js';
import GetMeaning from './adapters/GetMeaning.js';



function App() {
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState('en');
  const [word, setWord] = useState('');
  
 

  return (
    <div className="App" style={{ height: '100vh', color: 'black' }}>
      <Container
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          padding: '0',
        }}
      >
        <Header />
        <InputFields
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
        />

        <MeaningCards
          meanings={meanings}
          word={word}
          setMeanings={setMeanings}
          category={category}
        />
      </Container>
    </div>
  );
}

export default App;
