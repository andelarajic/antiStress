import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import logo from '../../assets/pppp.jpeg'
import NavButton from '../../components/NavButton';

export default function Breathing() {
  return (
    <View style={styles.container}>
      <Text>Breathing</Text>
      <NavButton destination='BreathingAnimation' text='Breathing' image={logo} />
      <NavButton destination='BreathingAnimation' text='Breathing' image={logo} />
      <NavButton destination='BreathingAnimation' text='Breathing' image={logo} />
      <NavButton destination='BreathingAnimation' text='Breathing' image={logo} />
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