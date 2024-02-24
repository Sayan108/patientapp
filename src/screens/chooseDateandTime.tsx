import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import ChipsGrid from '../components/gridRadioButtons';
import {Appbar, Button} from 'react-native-paper';
import {colors} from '../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Layout from '../components/layOut';
const ChooseDateandTime = ({navigation}: {navigation: any}) => {
  const [selectedDateId, setselectedDateId] = useState<any>({
    id: 'f5e42d36-5602-4a7d-a632-35fc12760158',
    value: 'Jan 15',
  });
  const [selectedTimeSlot, setselectedTimeSlot] = useState<any>({
    id: 'b5af6e56-dae1-41a9-9ba5-d9b11a975c9e',
    value: '9:00 AM',
  });
  const consecutiveDays = [
    {id: 'f5e42d36-5602-4a7d-a632-35fc12760158', value: 'Jan 15'},
    {id: '7c8c3d5f-e6f5-4b30-ba3e-8311b617b3a2', value: 'Jan 16'},
    {id: '4a5cbf1c-8e6b-4d2c-afdb-bd74b1690804', value: 'Jan 17'},
    {id: '9debc465-8b39-434b-88d8-f1b14b4567a3', value: 'Jan 18'},
    {id: '75c3b7a1-f543-4b7b-b29e-50c1c79c0b1b', value: 'Jan 19'},
    {id: '368191b2-8633-48d4-8178-220f96f893bf', value: 'Jan 20'},
    {id: '0e3bdf5c-975b-4b5a-816b-7547a4d80190', value: 'Jan 21'},
    {id: '2318e9b1-0c63-4eb7-97d0-ec0a36adfd7c', value: 'Jan 22'},
    {id: 'b3b26d9b-7b8d-4c08-ace1-07b8e0a8e04e', value: 'Jan 23'},
    {id: '514c01da-98c0-40ae-b73b-d7338b30ab8d', value: 'Jan 24'},
    {id: '9fb86c23-67e7-42a8-ba95-e8d0cb3ad2f5', value: 'Jan 25'},
    {id: '7e883f65-d3b9-42c1-973b-0aeb5bf78fa2', value: 'Jan 26'},
    {id: '02967072-8657-4fb5-bb6f-358ee97a5c9e', value: 'Jan 27'},
  ];

  const timeSlots = [
    {id: '7c36303b-d69d-4a14-844e-20a00d39e9b3', value: '12:00 PM'},
    {id: 'e131d073-6d7a-46b4-bd77-694295325b58', value: '01:00 PM'},
    {id: 'fd1f3432-cfb7-4871-b3d4-90f60db8e49c', value: '02:00 PM'},
    {id: 'f50a7a19-14f7-448d-947b-45bbdb21b168', value: '03:00 PM'},
    {id: 'b739d760-9302-4b5a-90a6-d1a3353b6be3', value: '04:00 PM'},
    {id: 'ff9b0a37-c660-4d8b-b5a3-7a95fc2a9fb8', value: '05:00 PM'},
    {id: '99c5a0d7-52d1-4047-9753-eb85e289290f', value: '06:00 PM'},
    {id: 'd19218ab-d456-4817-8ff3-16c2a5a58c69', value: '07:00 PM'},
    {id: '7a6b72b5-7d42-4f76-a98c-63a2327b8e29', value: '08:00 PM'},
    {id: 'b5af6e56-dae1-41a9-9ba5-d9b11a975c9e', value: '09:00 AM'},
    {id: '1d2bbcb2-1a06-4fc9-8e1b-4ec95bf1a66f', value: '10:00 AM'},
    {id: '5cf4f6e3-cb78-4c4e-9613-8ab93b378336', value: '11:00 AM'},
  ];

  // Handler for chip selection
  const handleDateSelect = (item: any) => {
    setselectedDateId(item);
  };

  const handleTimeSlotSelect = (item: any) => {
    setselectedTimeSlot(item);
    // Handle chip selection logic here
  };

  const handleNavigation = () => {
    navigation.navigate('addappoinment');
  };

  return (
    <Layout navigation={handleNavigation} headerText="Choose date and time">
      <Text style={styles.subtitle}>{'Choose date'}</Text>
      <ChipsGrid
        data={consecutiveDays}
        onSelect={handleDateSelect}
        selectedId={selectedDateId.id}
      />
      <Text style={styles.subtitle}>{'Choose time'}</Text>
      <ChipsGrid
        data={timeSlots}
        onSelect={handleTimeSlotSelect}
        selectedId={selectedTimeSlot.id}
      />
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate('chooseclinic');
        }}
        style={styles.button}
        labelStyle={styles.buttonLabel}>
        Next
      </Button>
    </Layout>
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
    fontWeight: '400',
    marginLeft: 30,
    color: colors.textColor,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '400',
    marginLeft: 20,
    color: colors.textColor,
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

export default ChooseDateandTime;
