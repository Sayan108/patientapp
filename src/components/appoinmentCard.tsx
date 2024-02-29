import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../styles';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/silces';
import {upcomingAppoinmentRequested} from '../redux/silces/userdata.slice';
const AppoinmentCard = (props: any) => {
  const appoinmentDetails = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );

  return (
    <>
      {appoinmentDetails && (
        <View
          style={{
            height: 186,
            width: '98%',
            backgroundColor: 'rgba(245, 71, 73, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            padding: 10,
            paddingRight: 10,
            borderRadius: 20,
            alignItems: 'flex-start',
          }}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Icon
              name="doctor"
              color="black"
              style={{color: 'black', justifyContent: 'space-between'}}
              size={45}
            />
            <View style={{justifyContent: 'space-between'}}>
              <View style={{paddingLeft: 20}}>
                <Text
                  style={{
                    color: colors.textColor,
                    fontSize: 16,
                    fontWeight: '600',
                  }}>
                  {'Doctor Strange'}
                </Text>
                <Text
                  style={{
                    color: colors.textColor,
                    fontSize: 14,
                    paddingTop: 5,
                  }}>
                  Specalization | Association
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingTop: 10,
            }}>
            <View
              style={{
                height: 'auto',
                width: 'auto',
                borderRadius: 20,
                backgroundColor: 'rgba(245, 71, 73, 0.3)',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <Icon
                name="calendar-blank"
                color="black"
                style={{
                  color: 'black',
                  justifyContent: 'space-between',
                  paddingLeft: 5,
                }}
                size={25}
              />
              <Text
                style={{
                  color: 'black',
                  justifyContent: 'space-between',
                  padding: 6,
                }}>
                Date
              </Text>
            </View>
            <View
              style={{
                height: 'auto',
                width: 'auto',
                borderRadius: 20,
                backgroundColor: 'rgba(245, 71, 73, 0.3)',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                marginLeft: 60,
              }}>
              <Icon
                name="clock-outline"
                color="black"
                style={{
                  color: 'black',
                  justifyContent: 'space-between',
                  paddingLeft: 5,
                }}
                size={25}
              />
              <Text
                style={{
                  color: 'black',
                  justifyContent: 'space-between',
                  padding: 6,
                }}>
                10.00 AM
              </Text>
            </View>
          </View>
          <View
            style={{
              height: 'auto',
              width: 'auto',
              borderRadius: 20,
              backgroundColor: 'rgba(245, 71, 73, 0.3)',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginTop: 25,
            }}>
            <Icon
              name="map-marker-outline"
              color="black"
              style={{
                color: 'black',
                justifyContent: 'space-between',
                paddingLeft: 5,
              }}
              size={25}
            />
            <Text
              style={{
                color: 'black',
                justifyContent: 'flex-start',
                padding: 6,
              }}>
              Kolkata, West Bengal
            </Text>
          </View>
        </View>
      )}
    </>
  );
};

export default AppoinmentCard;
