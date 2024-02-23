import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Appbar, TextInput} from 'react-native-paper';
import {colors} from '../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AddAppoinment = () => {
  const [appoinmentDetails, setAppoinmentDetails] = useState<any>({});

  return (
    <View>
      <Appbar.Header>
        <Icon
          style={{paddingLeft: 10}}
          name="arrow-left"
          size={35}
          color={colors.textColor}
        />
      </Appbar.Header>
      <TextInput
        autoFocus
        value={appoinmentDetails?.name}
        label="Full name"
        mode="outlined"
        activeOutlineColor={colors.primaryColor}
        onChangeText={(text: string) => {
          setAppoinmentDetails({...appoinmentDetails, fullname: text});
        }}
        placeholder="Jhon Doe"
        placeholderTextColor="gray"></TextInput>
    </View>
  );
};

export default AddAppoinment;
