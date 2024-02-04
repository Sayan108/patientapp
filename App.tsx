/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Button, SafeAreaView, useColorScheme, View} from 'react-native';
import {useDispatch, UseDispatch} from 'react-redux';
import {authRequested, authSuccess} from './src/redux/silces/auth.silce';
function App(): React.JSX.Element {
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <Button
        title="click me"
        onPress={() => {
          dispatch(authSuccess({}));
        }}></Button>
    </SafeAreaView>
  );
}

export default App;
