import React from 'react';

import Navigation from './src/navigation/MainNavigation';
import {StatusBar, View} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={'rgb(255,255,255)'} />
      <Navigation />
    </>
  );
};

export default App;
