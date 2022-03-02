import React from 'react';
import { View, StyleSheet } from 'react-native';
import logo from '../assets/pppp.jpeg'
import NavButton from '../components/NavButton';

export default function HomeScreen() {

  return (
    <View>
     <NavButton destination='RelaxationTips' text='Relaxation Tips' image={logo} />
     <NavButton destination='Breathing' text='Breathing' image={logo} />
     <NavButton destination='Yoga' text='Yoga' image={logo} />
     <NavButton destination='Relaxation' text='Relaxation' image={logo} />
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center"
  },
  image: {
    flexDirection: "row",
    height: 100,
    width: 100,
  },
  text: {
    flexDirection: "row"

  },
});