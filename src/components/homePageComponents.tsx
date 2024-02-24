import {View, Text, Image} from 'react-native';
import React from 'react';
import {Appbar, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../styles';
import AppoinmentCard from './appoinmentCard';
import AddAppoinmentButton from './addAppoinmentButton';

const HomePageComponent = (props: any) => {
  const {setIndex, navigation} = props;
  return (
    <View style={{height: '100%'}}>
      <Appbar.Header>
        <Icon
          style={{paddingLeft: 10}}
          name="account-circle-outline"
          size={35}
          color={colors.primaryColor}
        />
      </Appbar.Header>
      <View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            paddingBottom: 25,
            marginLeft: 10,
            width: 'auto',
          }}>
          <Text
            style={{
              color: colors.textColor,
              justifyContent: 'space-between',
              fontSize: 18,
            }}>
            Check your upcoming appoinments
          </Text>
          <Text
            style={{
              marginLeft: 30,
              justifyContent: 'space-between',
              color: colors.primaryColor,
            }}
            onPress={() => {
              setIndex(1);
            }}>
            See all
          </Text>
        </View>

        <View style={{marginTop: 10, marginLeft: 10}}>
          <AppoinmentCard />
        </View>
      </View>
      <AddAppoinmentButton navigation={navigation} />
    </View>
  );
};

export default HomePageComponent;
