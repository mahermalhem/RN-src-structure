import React, {useState} from 'react';
import {colors} from '../styles/colors';
import {typography} from '../styles/typography';

export const ThemeContext = React.createContext();

const ThemeProvider = ({children}) => {
  const [isLightTheme, setLightTheme] = useState(true);
  const toggleTheme = () => setLightTheme(previousState => !previousState);

  const theme = {
    colors: isLightTheme ? colors.light : colors.dark,
    typography,
    toggleTheme,
    isLightTheme,
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
