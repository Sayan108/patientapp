import {View, Text, Image, Touchable} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import React, {useState} from 'react';
import {colors, style} from '../styles';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../redux/silces';
import {authRequested} from '../redux/silces/auth.silce';
import useAuthService from '../hooks/useAuthServices';

const OTPInputScreen = ({navigation}: {navigation: any}) => {
  const {handleLogIn} = useAuthService();
  const dispatch = useDispatch();
  const phoneNumber = useSelector(
    (state: RootState) => state.auth.userDetails?.phoneNumber,
  );
  const [OTP, setOTP] = useState<string>('');
  const handleOTPChange = (text: string) => {
    setOTP(text);
  };

  const handleLoginButtonClick = () => {
    handleLogIn(OTP, navigation);
  };
  return (
    <View style={style.view}>
      <View style={style.headerView}>
        <Text style={style.loginPageHeader}>Log in</Text>
      </View>

      <Image
        style={style.loginPageImage}
        source={require('./OTPInput.png')}></Image>

      <View style={style.loginPageTextContainer}>
        <Text style={style.loginPageTextPrimary}>OTP Verification</Text>
        <Text style={style.loginPageTextSecondary}>
          {`We have sent you a verification code in your mobile no ${phoneNumber}`}
        </Text>
        <View>
          <TextInput
            keyboardType="phone-pad"
            maxLength={4}
            autoFocus
            value={OTP}
            label="OTP"
            mode="outlined"
            activeOutlineColor={colors.primaryColor}
            onChangeText={handleOTPChange}
            placeholder="0000"
            placeholderTextColor="gray"></TextInput>

          <View style={{paddingTop: 10}}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Text
                style={{
                  color: colors.textColor,
                  justifyContent: 'space-between',
                }}>
                Didn't recieve the code?
              </Text>
              <Text
                style={{
                  marginLeft: 10,
                  justifyContent: 'space-between',
                  color: colors.primaryColor,
                }}
                onPress={() => {
                  navigation.navigate('phoneinput');
                }}>
                Resend
              </Text>
            </View>
            <Button
              aria-disabled
              mode="text"
              style={{alignSelf: 'center'}}
              onPress={() => navigation.navigate('phoneinput')}>
              Change number
            </Button>
          </View>

          <View style={{paddingTop: 50}}>
            <Button
              style={{backgroundColor: colors.primaryColor}}
              mode="contained"
              onPress={handleLoginButtonClick}>
              Login
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OTPInputScreen;
