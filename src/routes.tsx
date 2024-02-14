import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import PhoneInputScreen from './screens/phoneInputScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {RootState} from './redux/silces';
import OTPInputScreen from './screens/otpScreen';
import HomeScreen from './screens/homeScreen';

const Routes = () => {
  const {isAuthenticated} = useSelector((state: RootState) => state.auth);
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Group>
          <Stack.Screen name="phoneinput" component={PhoneInputScreen} />
          <Stack.Screen name="otpverification" component={OTPInputScreen} />
          <Stack.Screen
            name="home"
            component={isAuthenticated ? HomeScreen : PhoneInputScreen}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
