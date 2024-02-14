import {View, Text, StyleSheet, Image} from 'react-native';
import {Button, TextInput} from 'react-native-paper';

import React, {useState} from 'react';
import {colors, style} from '../styles';
import useAuthService, {sendOTPPayload} from '../hooks/useAuthServices';
import {phoneNumberRegex} from '../regex.config';
import {Toast} from 'toastify-react-native';
const PhoneInputScreen = ({navigation}: {navigation: any}) => {
  const {handleSendOTP} = useAuthService();
  const [phoneNumber, setphoneNumber] = useState<string>('');
  const [validNumber, setvalidNumber] = useState<boolean>(true);
  const handlePhoneNumberChange = (text: string) => {
    setphoneNumber(text);
  };

  const handleSendOTPButtonClick = () => {
    if (phoneNumber.length === 10) {
      const payload: sendOTPPayload = {phoneNumber};
      handleSendOTP(payload, navigation);
    } else {
      Toast.success('Enter valid number');
    }
  };
  return (
    <View style={style.view}>
      <View style={style.headerView}>
        <Text style={style.loginPageHeader}>Log in</Text>
      </View>

      <Image
        style={style.loginPageImage}
        source={require('./phoneNumberInput.png')}></Image>

      <View style={style.loginPageTextContainer}>
        <Text style={style.loginPageTextPrimary}>Let's get started</Text>
        <Text style={style.loginPageTextSecondary}>
          An OTP will be sent to verify the mobile number
        </Text>
        <View>
          <TextInput
            maxLength={14}
            autoFocus
            autoComplete="tel"
            value={phoneNumber}
            label="Mobile number"
            mode="outlined"
            activeOutlineColor={colors.primaryColor}
            onChangeText={handlePhoneNumberChange}
            placeholder="0000000000"
            placeholderTextColor="gray"></TextInput>

          <View style={{paddingTop: 100}}>
            <Button
              style={{backgroundColor: colors.primaryColor}}
              mode="contained"
              onPress={handleSendOTPButtonClick}>
              Get OTP
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PhoneInputScreen;
