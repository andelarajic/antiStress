import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import logo from '../../assets/pppp.jpeg'
import NavButton from '../../components/NavButton';

export const Yoga = () => {
  return (
    <View style={styles.container}>
      <Text>Yoga</Text>
      <NavButton destination='RelaxationTips' text='Relaxation Tips' image={logo} />
      <NavButton destination='RelaxationTips' text='Relaxation Tips' image={logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});