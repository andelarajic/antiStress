import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import logo from '../../assets/mm.png'
import NavButton from '../../components/NavButton';

export default function Breathing() {
  return (
    <View style={styles.container}>
      <Text>Breathing</Text>
      <NavButton destination='BreathingAnimation' text='Short break' image={logo} />
      <NavButton destination='BreathingAnimation' text='Basic exercise' image={logo}  />
      <NavButton destination='BreathingAnimation' text='Rest and sleep' image={logo} />
      <NavButton destination='BreathingAnimation' text='Breathing' image={logo}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  }, image: {
    color: '#000'
  }
});