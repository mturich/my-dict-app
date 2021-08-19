import React, { useState } from 'react';
import { Container } from '@material-ui/core';

import InputFields from './components/InputFields.js';
import Header from './components/header/Header.js';
import MeaningCards from './components//MeaningCards.js';

import './App.css';

function App() {
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState('en');
  const [word, setWord] = useState('');
  const [LightMode, setLightMode] = useState(true);

  return (
    <div
      className="App"
      style={{

        // backgroundColor: LightMode ? '#ffd469' : '#282c34',
        background: LightMode ? 'linear-gradient(45deg, #d6a103, #Fec80c)' : '#282c34',
        color: LightMode ? '#000' : '#fff',
        height: '100vh',
        
      }}
    >
      <Container
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          height: '100%',
          padding: '0',
        }}
      >
        <Header LightMode={LightMode} setLightMode={setLightMode} />
        <InputFields
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
          LightMode ={LightMode}
        />

        <MeaningCards
          meanings={meanings}
          word={word}
          setMeanings={setMeanings}
          category={category}
          LightMode ={LightMode}
        />
      </Container>
    </div>
  );
}

export default App;
