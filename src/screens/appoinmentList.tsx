import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import Layout from '../components/layOut';
import {colors} from '../styles';
import AddAppoinmentButton from '../components/addAppoinmentButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AppoinmentList = (props: any) => {
  const {navigation, setIndex} = props;
  const appointments = [
    {
      doctorName: 'Dr. Smith',
      patientName: 'John Doe',
      location: '123 Main St',
      time: '10:00 AM',
      date: '2024-02-24',
      clinicPhone: '123-456-7890',
      clinicEmail: 'clinic@example.com',
    },
    {
      doctorName: 'Dr. Johnson',
      patientName: 'Jane Smith',
      location: '456 Elm St',
      time: '2:00 PM',
      date: '2024-02-25',
      clinicPhone: '987-654-3210',
      clinicEmail: 'info@clinic.com',
    },
    {
      doctorName: 'Dr. Garcia',
      patientName: 'Michael Brown',
      location: '789 Oak St',
      time: '9:30 AM',
      date: '2024-02-26',
      clinicPhone: '555-123-4567',
      clinicEmail: 'appointments@clinic.com',
    },
    {
      doctorName: 'Dr. Lee',
      patientName: 'Emily Johnson',
      location: '321 Pine St',
      time: '3:30 PM',
      date: '2024-02-27',
      clinicPhone: '888-555-1234',
      clinicEmail: 'reception@clinic.com',
    },
    {
      doctorName: 'Dr. Patel',
      patientName: 'David Wilson',
      location: '567 Maple St',
      time: '11:00 AM',
      date: '2024-02-28',
      clinicPhone: '777-999-8888',
      clinicEmail: 'info@healthclinic.com',
    },

    {
      doctorName: 'Dr. Smith',
      patientName: 'John Doe',
      location: '123 Main St',
      time: '10:00 AM',
      date: '2024-02-24',
      clinicPhone: '123-456-7890',
      clinicEmail: 'clinic@example.com',
    },
    {
      doctorName: 'Dr. Johnson',
      patientName: 'Jane Smith',
      location: '456 Elm St',
      time: '2:00 PM',
      date: '2024-02-25',
      clinicPhone: '987-654-3210',
      clinicEmail: 'info@clinic.com',
    },
    {
      doctorName: 'Dr. Garcia',
      patientName: 'Michael Brown',
      location: '789 Oak St',
      time: '9:30 AM',
      date: '2024-02-26',
      clinicPhone: '555-123-4567',
      clinicEmail: 'appointments@clinic.com',
    },
    {
      doctorName: 'Dr. Lee',
      patientName: 'Emily Johnson',
      location: '321 Pine St',
      time: '3:30 PM',
      date: '2024-02-27',
      clinicPhone: '888-555-1234',
      clinicEmail: 'reception@clinic.com',
    },
    {
      doctorName: 'Dr. Patel',
      patientName: 'David Wilson',
      location: '567 Maple St',
      time: '11:00 AM',
      date: '2024-02-28',
      clinicPhone: '777-999-8888',
      clinicEmail: 'info@healthclinic.com',
    },

    {
      doctorName: 'Dr. Smith',
      patientName: 'John Doe',
      location: '123 Main St',
      time: '10:00 AM',
      date: '2024-02-24',
      clinicPhone: '123-456-7890',
      clinicEmail: 'clinic@example.com',
    },
    {
      doctorName: 'Dr. Johnson',
      patientName: 'Jane Smith',
      location: '456 Elm St',
      time: '2:00 PM',
      date: '2024-02-25',
      clinicPhone: '987-654-3210',
      clinicEmail: 'info@clinic.com',
    },
    {
      doctorName: 'Dr. Garcia',
      patientName: 'Michael Brown',
      location: '789 Oak St',
      time: '9:30 AM',
      date: '2024-02-26',
      clinicPhone: '555-123-4567',
      clinicEmail: 'appointments@clinic.com',
    },
    {
      doctorName: 'Dr. Lee',
      patientName: 'Emily Johnson',
      location: '321 Pine St',
      time: '3:30 PM',
      date: '2024-02-27',
      clinicPhone: '888-555-1234',
      clinicEmail: 'reception@clinic.com',
    },
    {
      doctorName: 'Dr. Patel',
      patientName: 'David Wilson',
      location: '567 Maple St',
      time: '11:00 AM',
      date: '2024-02-28',
      clinicPhone: '777-999-8888',
      clinicEmail: 'info@healthclinic.com',
    },
  ];
  const conditionalFunction = () => {
    setIndex(0);
  };

  return (
    <Layout headerText="All appoinments" navigation={conditionalFunction}>
      <ScrollView>
        {appointments.map((item: any, index: number) => (
          <View
            style={styles.card}
            key={item?.doctorName?.length * Math.random()}>
            <View style={styles.textContainer}>
              <Text style={styles.addressHeader}>{item.doctorName}</Text>
              <Text style={styles.address}>{item.patientName}</Text>
              <View
                style={{display: 'flex', flexDirection: 'row', paddingTop: 10}}>
                <Icon
                  name="clock-outline"
                  color="black"
                  style={{
                    color: 'black',
                    justifyContent: 'space-between',
                    marginRight: 5,
                  }}
                  size={25}
                />
                <Text style={styles.address}>{item.time}</Text>
                <Icon
                  name="calendar-blank"
                  color="black"
                  style={{
                    color: 'black',
                    justifyContent: 'space-between',
                    marginLeft: 15,
                    marginRight: 5,
                  }}
                  size={25}
                />
                <Text style={styles.address}>{item.date}</Text>
              </View>

              <View
                style={{display: 'flex', flexDirection: 'row', paddingTop: 10}}>
                <Icon
                  name="map-marker-outline"
                  color="black"
                  style={{
                    color: 'black',
                    justifyContent: 'space-between',
                  }}
                  size={25}
                />
                <Text style={styles.address}>{item.location}</Text>
              </View>
            </View>

            <Icon
              onPress={() => {}}
              name="phone"
              color={colors.primaryColor}
              size={35}
              style={{marginRight: 20}}
            />
            <Icon
              onPress={() => {}}
              name="whatsapp"
              color={'green'}
              size={35}
            />
          </View>
        ))}
      </ScrollView>
      <AddAppoinmentButton navigation={navigation} />
    </Layout>
  );
};
const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  textContainer: {
    flex: 1,
  },
  address: {
    fontSize: 16,
    color: '#333',
    justifyContent: 'space-between',
  },
  addressHeader: {
    fontSize: 20,
    color: '#333',
    fontWeight: '600',
  },
  radioButtonContainer: {
    justifyContent: 'center',
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
export default AppoinmentList;
