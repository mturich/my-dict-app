import React from 'react';

import TextField from '@material-ui/core/TextField';

import categories from '../header/data/languagesCat.js';
import './Header.css';
import { createTheme, MenuItem, ThemeProvider } from '@material-ui/core';

const Header = ({category, setCategory , word, setWord}) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#000',
      },
      type: 'light',
    },
  });

  return (
    <div className="header" >
      <span className="title" style={{margin:'2rem'}}>Get the meaning of words. Instantly !</span>
      <span id="line" ></span>
      <div
        className="inputs"
        style={{
          display: 'inline',
          alignContent: 'center',
          // backgroundColor: '#292c34',
          width: '80%',
          margin:'5rem'
        }}
      >
        <ThemeProvider theme={darkTheme}>
          <TextField
            id="standard-basic"
            className="search"
            value={word}
            onInput={(e)=>setWord(e.target.value)}
            label="Search a word"
            style={{ margin: '2rem 1rem', width: '55%' }}
          />

          <TextField
            id="standard-select-currency"
            select
            label="Select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            helperText=""
            style={{ margin: '2rem 0', width: '30%' }}
          >
            {categories.map((cat) => (
              <MenuItem key={cat.label} value={cat.label}>
                {cat.value}
              </MenuItem>
            ))}
          </TextField>

        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
