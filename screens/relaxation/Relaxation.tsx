import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import logo from '../../assets/pppp.jpeg'
import NavButton from '../../components/NavButton';

export default function Relaxation() {
  return (
    <View style={styles.container}>
      <Text>Relaxation</Text>
       <NavButton destination='RelaxationSound' text='RelaxationSound' image={logo} />
       <NavButton destination='RelaxationSound' text='RelaxationSound' image={logo} />
       <NavButton destination='RelaxationSound' text='RelaxationSound' image={logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b0c4de",
    alignItems: 'center',
  },
});