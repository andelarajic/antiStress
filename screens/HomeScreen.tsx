import React from 'react';
import { View, StyleSheet } from 'react-native';
import logo from '../assets/pppp.jpeg'
import breathing from '../assets/Breathing.png'
import yoga from '../assets/Yoga.png'
import relax from '../assets/Song.png'
import NavButton from '../components/NavButton';

export default function HomeScreen() {
  return (
    <View>
     <NavButton destination='RelaxationTips' text='Relaxation Tips' image={logo} />
     <NavButton destination='Breathing' text='Breathing' image={breathing} />
     <NavButton destination='Yoga' text='Yoga' image={yoga} />
     <NavButton destination='Relaxation' text='Relaxation' image={relax} />
</View>
  );
}