import {View, Text, StyleSheet, Image} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import React, {useState} from 'react';
import {colors, style} from '../styles';
import useAuthService, {sendOTPPayload} from '../hooks/useAuthServices';
const PhoneInputScreen = ({navigation}: {navigation: any}) => {
  const {handleSendOTP} = useAuthService();
  const [phoneNumber, setphoneNumber] = useState('');
  const handlePhoneNumberChange = (text: string) => {
    setphoneNumber(text);
  };

  const handleSendOTPButtonClick = () => {
    const payload: sendOTPPayload = {phoneNumber};
    handleSendOTP(payload, navigation);
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
