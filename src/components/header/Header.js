import React, { useEffect, useState } from 'react';
import { Switch, withStyles } from '@material-ui/core';

import './Header.css';
import { grey } from '@material-ui/core/colors';

// Ganz WICHTIG DIE DÄMLICHEN KLAMMERN darum machen
const Header = ({LightMode, setLightMode}) => {

  const LightModeSwitch = withStyles({
    switchBase: {
      color: grey[200],
      '&$checked': {
        color: grey[600],
      },
      '&$checked + $track': {
        backgroundColor: grey[400],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  // const handleChange = () => {
  //   setLightMode(!LightMode);
  // };

  return (
    <div className="header">
      <span className="title">Get the meaning of words. Instantly !</span>
      <div class="switch--lightDark">
        <span class="switch__label">
          {LightMode ? 'light mode' : 'dark mode'}
        </span>
        <LightModeSwitch checked={LightMode} onChange={() => setLightMode(!LightMode)} />
      </div>

      <span id="line" style={{borderBottomColor: LightMode ? '#000' : '#fff',}}></span>
    </div>
  );
};

export default Header;
