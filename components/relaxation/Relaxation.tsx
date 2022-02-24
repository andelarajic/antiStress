import { StyleSheet, Text, View } from 'react-native';

export default function Relaxation() {
  return (
    <View style={styles.container}>
      <Text>Relaxation</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});