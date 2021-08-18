import React from 'react';
import { createTheme, MenuItem, ThemeProvider } from '@material-ui/core';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import TranslateIcon from '@material-ui/icons/Translate';

import categories from './data/languagesCat.js';

import './InputFields.css';

const Header = ({ category, setCategory, word, setWord }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#000',
      },
      type: 'light',
    },
  });

  return (
    <div className="InputFieldContainer">
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            id="input-with-icon-adornment"
            className="search"
            value={word}
            onInput={(e) => setWord(e.target.value)}
            label="Search a word"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            id="standard-select-currency"
            select
            label="Select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            helperText=""
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <TranslateIcon />
                </InputAdornment>
              ),
            }}
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
