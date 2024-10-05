import React from 'react';

import Navigation from './src/navigation/MainNavigation';
import {StatusBar, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={'rgb(255,255,255)'} />

      <Navigation />
    </>
  );
};

export default App;
