/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import ToastManager from 'toastify-react-native';

import Routes from './src/routes';
function App(): React.JSX.Element {
  return (
    <>
      <ToastManager />
      <Routes />
    </>
  );
}

export default App;
