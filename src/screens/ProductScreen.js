import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function NextScreen() {
  return (
    <View style={styles.container}>
      <Text>Dit is het volgende scherm!</Text>
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
