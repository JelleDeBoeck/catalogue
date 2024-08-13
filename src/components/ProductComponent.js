import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function ProductComponent({ name, price, imageSource }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>{price}</Text>
      <TouchableOpacity style={[styles.favoriteButton, isFavorite && styles.favorite]} onPress={toggleFavorite}>
        <Text style={styles.favoriteText}>{isFavorite ? '❤️' : '🤍'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10,
    width: '45%',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: 'gray',
  },
  favoriteButton: {
    marginTop: 10,
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#eee',
  },
  favorite: {
    backgroundColor: '#ffe0e0',
  },
  favoriteText: {
    fontSize: 20,
  },
});
