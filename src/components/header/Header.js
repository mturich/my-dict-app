import React from 'react';
import { createTheme, Switch } from '@material-ui/core';
import { StylesProvider } from '@material-ui/core/styles';

import './Header.css';

<StylesProvider injectFirst>
  {/* Your component tree.
      Now, you can override Material-UI's styles. */}
</StylesProvider>;

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
        className="darkModeToggle"
        id="darkModeToggle"
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        color="primary"
        
        inputProps={{ 'aria-label': 'primary checkbox'  }}
      />

      <span id="line"></span>
    </div>
  );
};

export default Header;
