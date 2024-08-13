import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/image1.webp')}
        style={styles.image}
      />
      <Text style={styles.title}>De gekste reiskoffers</Text>
      <Button
        title="Neem een kijkje"
        onPress={() => navigation.navigate('ProductScreen')}
      />
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
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
