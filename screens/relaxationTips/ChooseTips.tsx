import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { RelaxationTip } from '../../model/Relaxation';

export const ChooseTips = (tip: RelaxationTip) => {
  return (
    <View style={styles.container}>
    <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={styles.button}>
        <Text style={styles.text}>{tip.title}Proba</Text>
      </TouchableOpacity>
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
    backgroundColor: '#444',
    width: "100%",
    height: 100,
    borderRadius: 30,
    justifyContent: 'center',
  }, 
  text: {
    color: 'white'
  }
});