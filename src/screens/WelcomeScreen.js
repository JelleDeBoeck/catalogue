import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/image1.webp')}
        style={styles.image}
      />
      <Text style={styles.title}>De gekste reiskoffers</Text>
      <Text style={styles.subtitle}>Ontdek unieke en innovatieve koffers voor jouw volgende avontuur.</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ProductScreen')}
      >
        <Text style={styles.buttonText}>Neem een kijkje</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 30,
    borderRadius: 20,
    borderWidth: 6,
    borderColor: '#0072FF',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#0072FF',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff', // White text for contrast
    fontWeight: 'bold',
  },
});
