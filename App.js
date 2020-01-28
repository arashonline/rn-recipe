import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import {useScreens} from 'react-native-screens';

import MainNavigator from './navigation/MainNavigator';

// call useScreen after import navigator before anything else

useScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return (
    <MainNavigator />
  );
}
