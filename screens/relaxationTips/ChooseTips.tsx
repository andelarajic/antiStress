import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { RelaxationTip } from '../../model/Relaxation';

export const ChooseTips = (tip: RelaxationTip) => {
  return (
    <View style={styles.container}>
      { /* <TouchableOpacity
       onPress={tip.title}
        style={styles.button}>
  </TouchableOpacity>*/ }
      <Text>{tip.title}</Text>
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
  },
  button: {
    backgroundColor: '#444'
  }
});