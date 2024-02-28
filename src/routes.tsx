import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import PhoneInputScreen from './screens/phoneInputScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {RootState} from './redux/silces';
import OTPInputScreen from './screens/otpScreen';
import HomeScreen from './screens/homeScreen';
import AddAppoinment from './screens/adddAppoinment';
import ChooseDateandTime from './screens/chooseDateandTime';
import ClinicLocation from './screens/clinicLocation';
import BookingDetails from './screens/bookingDetails';
import AppoinmentList from './screens/appoinmentList';
import AppointmenSuccess from './screens/appoinmentSuccess';
import MyProfile from './screens/myProfile';
import AboutDoctor from './screens/aboutDoctor';

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
          <Stack.Screen
            name="appoinmentlist"
            component={isAuthenticated ? AppoinmentList : PhoneInputScreen}
          />
          <Stack.Screen
            name="addappoinment"
            component={isAuthenticated ? AddAppoinment : PhoneInputScreen}
          />
          <Stack.Screen
            name="choosedateandtime"
            component={isAuthenticated ? ChooseDateandTime : PhoneInputScreen}
          />
          <Stack.Screen
            name="chooseclinic"
            component={isAuthenticated ? ClinicLocation : PhoneInputScreen}
          />
          <Stack.Screen
            name="appointmentdetails"
            component={isAuthenticated ? BookingDetails : PhoneInputScreen}
          />
          <Stack.Screen
            name="appoinmentsuccess"
            component={isAuthenticated ? AppointmenSuccess : PhoneInputScreen}
          />
          <Stack.Screen
            name="myprofile"
            component={isAuthenticated ? MyProfile : PhoneInputScreen}
          />
          <Stack.Screen
            name="aboutdoctor"
            component={isAuthenticated ? AboutDoctor : PhoneInputScreen}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
