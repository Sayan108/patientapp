import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Pressable} from 'react-native';
import Layout from '../components/layOut';
import {colors} from '../styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {List} from 'react-native-paper';
import CancelAppoinmentDialoge from '../components/cancelAppoinmentDialogue';

interface Customer {
  name: string;
  email: string;
  phone: string;
}

interface Product {
  name: string;
  price: number;
  quantity: number;
}

interface Payment {
  method: string;
  total: number;
}

interface BookingDetailsProps {
  customer: Customer;
  product: Product;
  payment: Payment;
}

const AppoinmentDetails = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const [visible, setvisible] = useState<boolean>(false);
  const [showCancelModal, setshowCancelModal] = useState<boolean>(false);
  const {id} = route.params;
  const customer = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
  };
  const product = {
    name: '1234567890',
    price: '12/12/2024',
    quantity: '12.12 PM',
  };
  const payment = {id: '1234567890', method: 'Credit Card', total: 1000};
  const problem = {
    text: ' Lorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsum',
  };
  const handleNavigation = () => {
    navigation.navigate('home');
  };

  return (
    <Layout headerText="Booking details" navigation={handleNavigation}>
      {showCancelModal ? (
        <CancelAppoinmentDialoge
          visible={showCancelModal}
          setVisible={setshowCancelModal}
        />
      ) : (
        <ScrollView>
          <View style={styles.container}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                //  backgroundColor: 'black',
              }}>
              <Text
                style={{
                  ...styles.sectionHeading,
                  justifyContent: 'flex-start',
                }}>
                Patient Details
              </Text>
              <Pressable
                style={{marginLeft: '60%', justifyContent: 'flex-end'}}
                onPress={() => {
                  setvisible(!visible);
                }}>
                <Icon name="dots-vertical" color={colors.textColor} size={30} />
              </Pressable>
              {visible ? (
                <View
                  style={{
                    position: 'absolute',
                    top: 60, // Adjust as needed
                    left: '35%',
                    right: 0,
                    backgroundColor: 'rgba(255,255 ,255 ,1)',
                    zIndex: 10, // Ensure the menu is above other elements
                    elevation: 400,
                    width: '70%',
                    borderRadius: 25,
                    shadowColor: 'black',
                  }}>
                  <List.Section>
                    <List.Item
                      title="Reschedule appoinment"
                      titleStyle={{
                        color: 'black', // Text color
                      }}
                      left={() => (
                        <Icon
                          style={{paddingLeft: 10}}
                          name="calendar-arrow-right"
                          size={35}
                          color={colors.textColor}
                        />
                      )}
                      onPress={() => {
                        navigation.navigate('choosedateandtime', {id: id});
                        setvisible(!visible);
                      }}
                    />
                    <List.Item
                      title="Cancel appoinment"
                      titleStyle={{
                        color: 'black', // Text color
                      }}
                      left={() => (
                        <Icon
                          style={{paddingLeft: 10}}
                          name="cancel"
                          size={35}
                          color={colors.textColor}
                        />
                      )}
                      onPress={() => {
                        setshowCancelModal(true);
                        setvisible(!visible);
                      }}
                    />
                  </List.Section>
                </View>
              ) : null}
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionDetails}>Name: {customer.name}</Text>
              <Text style={styles.sectionDetails}>Email: {customer.email}</Text>
              <Text style={styles.sectionDetails}>Phone: {customer.phone}</Text>
            </View>
            <Text style={styles.sectionHeading}>Booking Details</Text>
            <View style={styles.section}>
              <Text style={styles.sectionDetails}>
                Booking id: {product.name}
              </Text>
              <Text style={styles.sectionDetails}>Date: {product.name}</Text>
              <Text style={styles.sectionDetails}>Time: ${product.price}</Text>
            </View>
            <Text style={styles.sectionHeading}>Payment Details</Text>
            <View style={styles.section}>
              <Text style={styles.sectionDetails}>
                Payment id: {payment.id}
              </Text>
              <Text style={styles.sectionDetails}>
                Payment Method: {payment.method}
              </Text>
              <Text style={styles.sectionDetails}>
                Total Amount: {payment.total}
              </Text>
            </View>
            <Text style={styles.sectionHeading}>Problem</Text>
            <View style={styles.section}>
              <Text style={styles.sectionDetails}>{problem.text}</Text>
            </View>
          </View>
        </ScrollView>
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {},
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: colors.textColor,
  },
  section: {
    width: 'auto',
    borderRadius: 20,
    margin: 10,
    backgroundColor: 'rgba(245, 71, 73, 0.08)',
    padding: 10,
    borderColor: colors.primaryColor,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: colors.textColor,
  },
  sectionDetails: {
    fontSize: 14,

    marginBottom: 8,
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

export default AppoinmentDetails;
