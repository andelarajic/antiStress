import React from 'react';
import { View, StyleSheet } from 'react-native';
import logo from '../assets/pppp.jpeg'
import NavButton from '../components/NavButton';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
     <NavButton destination='RelaxationTips' text='Relaxation Tips' image={logo} />
     <NavButton destination='Breathing' text='Breathing' image={logo} />
     <NavButton destination='Yoga' text='Yoga' image={logo} />
     <NavButton destination='Relaxation' text='Relaxation' image={logo} />
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15 ,
    backgroundColor: "#999",
margin: 10,
borderRadius: 30,  
  }
});