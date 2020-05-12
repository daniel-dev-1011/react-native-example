/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import React from 'react';
import MainStackNavigator from './src/navigation/MainStackNavigator';
import { Provider } from 'react-redux';
import store from './src/redux/store/reduxStore';

export default function App() {
  return (
    <Provider store={store}>
      <MainStackNavigator />
    </Provider>
  );
}
