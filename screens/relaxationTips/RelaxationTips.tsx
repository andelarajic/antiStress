import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import logo from '../../assets/pppp.jpeg'
import NavButton from '../../components/NavButton';

export default function RelaxationTips() {
  return (
    <View style={styles.container}>
     <Text>RelaxationTips</Text>
   <NavButton destination='RelaxationTipsFetch' text='RelaxationTips' image={logo} />
     <NavButton destination='RelaxationTipsFetch' text='RelaxationTips' image={logo} />
  <NavButton destination='RelaxationTipsFetch' text='RelaxationTips' image={logo} />
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
