import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import logo from '../../assets/pppp.jpeg'
import NavButton from '../../components/NavButton';

export default function RelaxationTips() {
  return (
    <View style={styles.container}>
     <Text>RelaxationTips</Text>
     <NavButton destination='Breathing' text='Breathing' image={logo} />
     <NavButton destination='Yoga' text='Yoga' image={logo} />
     <NavButton destination='Relaxation' text='Relaxation' image={logo} />
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
