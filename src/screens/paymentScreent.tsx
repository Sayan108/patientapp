import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Layout from '../components/layOut';
import {Button, RadioButton} from 'react-native-paper';
import {updateAppoinmentForm} from '../redux/silces/userdata.slice';
import {colors} from '../styles';
import {useDispatch} from 'react-redux';

const Payment = ({navigation, route}: {navigation: any; route: any}) => {
  const {id} = route.params;
  const [paymentType, setpaymentType] = useState('pay-at-clinic');
  const dispatch = useDispatch();
  const handleNavigation = () => {
    navigation.navigate(id === -1 ? 'choosedateandtime' : 'choosedateandtime', {
      id: id,
    });
  };
  return (
    <Layout navigation={handleNavigation} headerText="Make mayment">
      <RadioButton.Group
        onValueChange={newValue => {
          setpaymentType(newValue);
        }}
        value={paymentType}>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <RadioButton value="pay-at-clinic" color={colors.primaryColor} />
          <Text style={{marginLeft: 8, color: colors.textColor}}>
            Pay at clinic
          </Text>
        </View>

        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <RadioButton value="pay-online" color={colors.primaryColor} />
          <Text style={{marginLeft: 8, color: colors.textColor}}>
            Pay online
          </Text>
        </View>
      </RadioButton.Group>
      <Button
        mode="contained"
        onPress={() => {
          dispatch(updateAppoinmentForm({}));
          navigation.navigate(id === -1 ? 'bookingdetails' : 'bookingdetails', {
            id: id,
          });
        }}
        style={styles.button}
        labelStyle={styles.buttonLabel}>
        <Text>
          {paymentType === 'pay-at-clinic'
            ? 'Payment at clinic'
            : 'Proceed to pay online'}
        </Text>
      </Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 24,
    backgroundColor: colors.primaryColor,
  },
  buttonLabel: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Payment;
