import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Appbar, TextInput, Button, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HelperText from '../components/helperText';
import {colors} from '../styles';

const AddAppointment = ({navigation}: {navigation: any}) => {
  const [appointmentDetails, setAppointmentDetails] = useState<any>({});

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Icon
          name="arrow-left"
          size={35}
          color={colors.textColor}
          onPress={() => {
            navigation.navigate('home');
          }}
        />
        <Text style={styles.title}>Make an appointment</Text>
      </Appbar.Header>
      <TextInput
        maxLength={50}
        autoFocus
        value={appointmentDetails?.fullname}
        label="Full name"
        mode="outlined"
        onChangeText={(text: string) => {
          setAppointmentDetails({...appointmentDetails, fullname: text});
        }}
        style={styles.input}
        placeholder="Jhon Doe"
        placeholderTextColor="gray"
        activeOutlineColor={colors.primaryColor}
      />
      <HelperText
        text="This field is required"
        type="error"
        show={appointmentDetails?.fullname?.length === 0}
      />
      <TextInput
        activeOutlineColor={colors.primaryColor}
        maxLength={2}
        value={appointmentDetails?.age}
        label="Age"
        mode="outlined"
        onChangeText={(text: string) => {
          setAppointmentDetails({...appointmentDetails, age: text});
        }}
        style={styles.input}
        placeholder="69"
        placeholderTextColor="gray"
        keyboardType="numeric"
      />
      <HelperText
        text="This field is required"
        type="error"
        show={appointmentDetails?.age?.length === 0}
      />
      <TextInput
        activeOutlineColor={colors.primaryColor}
        maxLength={15}
        value={appointmentDetails?.gender}
        label="Gender"
        mode="outlined"
        onChangeText={(text: string) => {
          setAppointmentDetails({...appointmentDetails, gender: text});
        }}
        style={styles.input}
        placeholder="Male"
        placeholderTextColor="gray"
      />
      <HelperText
        text="This field is required"
        type="error"
        show={appointmentDetails?.gender?.length === 0}
      />
      <TextInput
        activeOutlineColor={colors.primaryColor}
        maxLength={10}
        value={appointmentDetails?.phone}
        label="Phone"
        mode="outlined"
        onChangeText={(text: string) => {
          setAppointmentDetails({...appointmentDetails, phone: text});
        }}
        style={styles.input}
        placeholder="1234567890"
        placeholderTextColor="gray"
        keyboardType="phone-pad"
      />
      <HelperText
        text="This field is required"
        type="error"
        show={appointmentDetails?.phone?.length === 0}
      />
      <TextInput
        activeOutlineColor={colors.primaryColor}
        maxLength={500}
        value={appointmentDetails?.problem}
        label="Describe your problem"
        mode="outlined"
        onChangeText={(text: string) => {
          setAppointmentDetails({...appointmentDetails, problem: text});
        }}
        style={{...styles.input, height: 100}}
        placeholder="Lorem ipsum lorem ipsum lorem ipsum"
        placeholderTextColor="gray"
        multiline
      />
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate('choosedateandtime');
        }}
        style={styles.button}
        labelStyle={styles.buttonLabel}>
        Next
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'transparent',
    elevation: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 30,
  },
  input: {
    marginBottom: 8,
    backgroundColor: 'white',
  },
  button: {
    marginTop: 24,
    backgroundColor: colors.primaryColor,
  },
  buttonLabel: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default AddAppointment;
