import * as React from 'react';
import {View, Text} from 'react-native';
import {Appbar, BottomNavigation, Button, List} from 'react-native-paper';
import HomePageComponent from '../components/homePageComponents';

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const NotificationsRoute = () => <Text>Notifications</Text>;

const HomeScreen = ({navigation}: {navigation: any}) => {
  const homePageRoute = () => (
    <HomePageComponent setIndex={setIndex} navigation={navigation} />
  );
  const [expanded, setexpanded] = React.useState(false);
  const handleShowHideMyProfile = () => {
    setexpanded(!expanded);
  };
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'home',
      title: 'Home',
      focusedIcon: 'home',
      unfocusedIcon: 'home-outline',
    },
    {
      key: 'albums',
      title: 'Appoinments',
      focusedIcon: 'timer-sand-full',
      unfocusedIcon: 'timer-sand-empty',
    },
    {
      key: 'recents',
      title: 'Recents',
      focusedIcon: 'history',
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: homePageRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    notifications: NotificationsRoute,
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
