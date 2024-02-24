import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AppointmenSuccess = ({navigation}: {navigation: any}) => {
  return (
    <View style={{alignItems: 'center', marginTop: 200}}>
      <Icon name="check-circle" size={150} color={'green'} />
      <Text style={{fontSize: 20, color: 'black'}}>
        Your appointment is done successfully
      </Text>
    </View>
  );
};

export default AppointmenSuccess;
