import {View, Text} from 'react-native';
import React from 'react';
import Layout from '../components/layOut';
import {colors} from '../styles';

const AboutDoctor = ({navigation}: {navigation: any}) => {
  const handleNavigation = () => {
    navigation.navigate('home');
  };
  return (
    <Layout navigation={handleNavigation} headerText="About doctor">
      <Text style={{color: colors.textColor}}> About doctor</Text>
    </Layout>
  );
};

export default AboutDoctor;
