import React from 'react';
import { createTheme,} from '@material-ui/core';

import './Header.css';


const Header = () => {
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
      <span className="title" >Get the meaning of words. Instantly !</span>
      <span id="line" ></span>
    </div>
  );
};

export default Header;
