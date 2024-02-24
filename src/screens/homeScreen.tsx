import * as React from 'react';
import {View, Text} from 'react-native';
import {Appbar, BottomNavigation, Button, List} from 'react-native-paper';
import HomePageComponent from '../components/homePageComponents';
import AppoinmentList from './appoinmentList';

const HomeScreen = ({navigation}: {navigation: any}) => {
  const [index, setIndex] = React.useState(0);
  const homePageRoute = () => (
    <HomePageComponent setIndex={setIndex} navigation={navigation} />
  );

  const allAppoinmentList = () => (
    <AppoinmentList navigation={navigation} setIndex={setIndex} />
  );
  const [expanded, setexpanded] = React.useState(false);
  const handleShowHideMyProfile = () => {
    setexpanded(!expanded);
  };

  const [routes] = React.useState([
    {
      key: 'home',
      title: 'Home',
      focusedIcon: 'home',
      unfocusedIcon: 'home-outline',
    },
    {
      key: 'appoinments',
      title: 'Appoinments',
      focusedIcon: 'timer-sand-full',
      unfocusedIcon: 'timer-sand-empty',
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: homePageRoute,
    appoinments: allAppoinmentList,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default HomeScreen;
