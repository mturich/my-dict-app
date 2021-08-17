import React from 'react';
import { createTheme, Switch } from '@material-ui/core';

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
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className="header">
      <span className="title">Get the meaning of words. Instantly !</span>
      <Switch
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />

      <span id="line"></span>
    </div>
  );
};

export default Header;
