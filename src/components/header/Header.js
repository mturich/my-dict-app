import { Switch, withStyles } from '@material-ui/core';

import './Header.css';
import { grey, yellow, black } from '@material-ui/core/colors';

// Ganz WICHTIG DIE DÄMLICHEN KLAMMERN darum machen
const Header = ({ LightMode, setLightMode }) => {
  const LightModeSwitch = withStyles({
    switchBase: {
      color: grey[100],
      '&$checked': {
        color: yellow[100],
      },
      '&$checked + $track': {
        backgroundColor: grey[200],
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
        <LightModeSwitch
          checked={LightMode}
          onChange={() => setLightMode(!LightMode)}
        />
      </div>

      <span
        id="line"
        style={{ borderBottomColor: LightMode ? '#000' : '#fff' }}
      ></span>
    </div>
  );
};

export default Header;
