import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import ThemeProvider from './src/theme/ThemeProvider';

const App = () => {
  return (
    <ThemeProvider>
      <HomeScreen />
    </ThemeProvider>
  );
};

export default App;
