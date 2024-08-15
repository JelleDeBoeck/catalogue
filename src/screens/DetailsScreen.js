import { Image, Pressable, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';

const DetailsScreen = ({ navigation, route }) => {
  const { item } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-circle-left" size={28} color="white" />
        </Pressable>
        <Pressable style={styles.favoriteButton} onPress={toggleFavorite}>
          <FontAwesome name={isFavorite ? "heart" : "heart-o"} size={28} color="white" />
        </Pressable>
      </SafeAreaView>

      <View style={styles.detailsContainer}>
        <View style={styles.imageWrapper}>
          <Image
            source={item.image}
            style={styles.image}
          />
        </View>

        <Text style={styles.name}>{item.name}</Text>
        
        <View style={styles.priceRatingContainer}>
          <Text style={styles.price}>{item.price}</Text>
          <View style={styles.ratingContainer}>
            <FontAwesome name="star" size={20} color="#FFB400" />
            <Text style={styles.rating}>{item.rating}</Text>
          </View>
        </View>

        <Text style={styles.description}>{item.description}</Text>
        
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={() => navigation.navigate('CartScreen', { item })}
        >
          <Text style={styles.buttonText}>Toevoegen aan winkelmandje</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0072FF', 
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#0072FF',
  },
  backButton: {
    flex: 1,
  },
  favoriteButton: {
    flex: 1,
    alignItems: 'flex-end',
  },
  detailsContainer: {
    backgroundColor: '#fff',
    flex: 1,
    marginTop: 80,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 16,
    paddingBottom: 80,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  imageWrapper: {
    width: 250,
    height: 250,
    borderRadius: 125,
    overflow: 'hidden',
    marginTop: -125,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  priceRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0072FF',
    marginRight: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 16,
    color: '#666',
    marginLeft: 5,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  addToCartButton: {
    backgroundColor: '#0072FF',
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 24,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
