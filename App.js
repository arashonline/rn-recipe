import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import {useScreens} from 'react-native-screens';

import { createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import MainNavigator from './navigation/MainNavigator';
import mealsReducer from './store/reducers/meals';
// call useScreen after import navigator before anything else

useScreens();


// mapping reducers to the combineReducers
const rootReducer = combineReducers({
  meals: mealsReducer
});

//  create our store
// createStore takes a reducer
const store = createStore(rootReducer);

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

  // we wrap Provider around root App component
  return (
    <Provider store={store}><MainNavigator /></Provider>
  );
}
