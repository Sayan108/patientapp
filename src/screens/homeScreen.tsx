import * as React from 'react';
import {BottomNavigation} from 'react-native-paper';
import HomePageComponent from '../components/homePageComponents';
import AppoinmentList from './appoinmentList';
import {StyleSheet} from 'react-native';

const HomeScreen = ({navigation}: {navigation: any}) => {
  const [index, setIndex] = React.useState(0);
  const [expanded, setExpanded] = React.useState(false);

  const homePageRoute = () => (
    <HomePageComponent setIndex={setIndex} navigation={navigation} />
  );

  const allAppointmentList = () => (
    <AppoinmentList navigation={navigation} setIndex={setIndex} />
  );

  const [routes] = React.useState([
    {
      key: 'home',
      title: 'Home',
      focusedIcon: 'home',
      unfocusedIcon: 'home-outline',
    },
    {
      key: 'appointments',
      title: 'Appointments',
      focusedIcon: 'timer-sand-full',
      unfocusedIcon: 'timer-sand-empty',
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: homePageRoute,
    appointments: allAppointmentList,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
      style={styles.bottomNavigation}
    />
  );
};

const styles = StyleSheet.create({
  bottomNavigation: {
    backgroundColor: 'white', // Example background color
    borderTopWidth: 1, // Example border style
    borderTopColor: 'gray', // Example border color
  },
});

export default HomeScreen;
