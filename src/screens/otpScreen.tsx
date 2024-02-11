import {View, Text, Image, Touchable} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import React, {useState} from 'react';
import {colors, style} from '../styles';

const OTPInputScreen = ({navigation}: {navigation: any}) => {
  const [OTP, setOTP] = useState('');
  const handleOTPChange = (text: string) => {
    setOTP(text);
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
          We have sent you a verification code in your mobile no +9174*****293
        </Text>
        <View style={{paddingBottom: 30}}>
          <TextInput
            value={OTP}
            label="OTP"
            mode="outlined"
            activeOutlineColor={colors.primaryColor}
            onChangeText={handleOTPChange}
            placeholder="0000"
            placeholderTextColor="gray"></TextInput>

          <View style={{display: 'flex'}}>
            <Text style={{color: colors.textColor}}>
              Did'nt recieve the code? <Button mode="text"> Resend</Button>
            </Text>
          </View>

          <View style={{paddingTop: 100}}>
            <Button
              aria-disabled
              mode="text"
              style={{alignSelf: 'center'}}
              onPress={() => navigation.navigate('phoneinput')}>
              Change number
            </Button>
            <Button
              style={{backgroundColor: colors.primaryColor}}
              mode="contained"
              onPress={() => console.log('Pressed')}>
              Login
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OTPInputScreen;
