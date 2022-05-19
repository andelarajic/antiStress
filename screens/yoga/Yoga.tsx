import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import logo from '../../assets/pppp.jpeg'
import NavButton from '../../components/NavButton';

export const Yoga = () => {
  return (
    <View style={styles.container}>
      <Text>Yoga</Text>
     <NavButton destination='YogaFetch' text='Yoga' image={logo} />
      <NavButton destination='YogaFetch' text='Yoga' image={logo} />
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