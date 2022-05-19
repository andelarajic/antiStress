import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import logo from '../../assets/pppp.jpeg'
import breathingexercise from "../../assets/breathingE.jpg"
import tension from "../../assets/tension.jpg"
import write from "../../assets/write.jpg"
import NavButton from '../../components/NavButton';

export default function RelaxationTips() {
  return (
    <View style={styles.container}>
     <Text>RelaxationTips</Text>
   <NavButton destination='RelaxationTipsFetch' text='RelaxationTips' image={breathingexercise} />
     <NavButton destination='RelaxationTipsFetch' text='RelaxationTips' image={tension} />
  <NavButton destination='RelaxationTipsFetch' text='RelaxationTips' image={write} />
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
