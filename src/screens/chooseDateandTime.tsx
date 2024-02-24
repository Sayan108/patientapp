import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import ChipsGrid from '../components/gridRadioButtons';
import {Appbar, Button} from 'react-native-paper';
import {colors} from '../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const ChooseDateandTime = ({navigation}: {navigation: any}) => {
  const consecutiveDays = [
    'Jan 15',
    'Jan 16',
    'Jan 17',
    'Jan 18',
    'Jan 19',
    'Jan 20',
    'Jan 21',
    'Jan 22',
    'Jan 23',
    'Jan 24',
    'Jan 25',
    'Jan 26',
    'Jan 27',
  ];

  // Handler for chip selection
  const handleChipSelect = (item: string) => {
    console.log('Selected Chip:', item);
    // Handle chip selection logic here
  };
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Icon
          name="arrow-left"
          size={35}
          color={colors.textColor}
          onPress={() => {
            navigation.navigate('addappoinment');
          }}
        />
        <Text style={styles.title}>Choose date and time</Text>
      </Appbar.Header>
      <Text style={styles.subtitle}>{'Choose date'}</Text>
      <ChipsGrid data={consecutiveDays} onSelect={handleChipSelect} />
      <Text style={styles.subtitle}>{'Choose time'}</Text>
      <ChipsGrid data={consecutiveDays} onSelect={handleChipSelect} />
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
