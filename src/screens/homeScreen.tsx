import {View, Text, Image} from 'react-native';
import React from 'react';
import {Appbar, Button} from 'react-native-paper';
import {Icon} from 'react-native-paper/lib/typescript/components/List/List';

const HomeScreen = () => {
  return (
    <View>
      <Appbar>
        <Button onPress={() => {}}>
          <Text>My Profile</Text>
        </Button>
      </Appbar>
    </View>
  );
};

export default HomeScreen;
