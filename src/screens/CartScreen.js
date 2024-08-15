import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';

const CartScreen = ({ navigation, route }) => {
  const { item } = route.params; // Ontvang de doorgegeven parameters

  // Functie om een item te verwijderen
  const handleRemoveItem = () => {
    // Logica om het item te verwijderen (optioneel, afhankelijk van je app-logica)
    // Ga vervolgens terug naar het vorige scherm
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-circle-left" size={28} color="white" />
        </Pressable>
        <Text style={styles.headerTitle}>Winkelmandje</Text>
      </SafeAreaView>

      <View style={styles.cartContainer}>
        {item ? (
          <View style={styles.itemContainer}>
            <View style={styles.itemContent}>
              <Image source={item.image} style={styles.itemImage} />
              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
              </View>
            </View>
            <Pressable style={styles.removeButton} onPress={handleRemoveItem}>
              <FontAwesome name="trash" size={24} color="white" />
              <Text style={styles.removeButtonText}>Verwijder</Text>
            </Pressable>
          </View>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#0072FF',
  },
  backButton: {
    // De terugknop neemt slechts de ruimte in die nodig is, geen flex eigenschap meer
  },
  headerTitle: {
    flex: 1, // Dit zorgt ervoor dat de titel de resterende ruimte opvult
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cartContainer: {
    flex: 1,
    padding: 16,
  },
  itemContainer: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    elevation: 3,
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  itemDetails: {
    flex: 1,
    marginLeft: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 16,
    color: '#0072FF',
  },
  removeButton: {
    backgroundColor: '#FF4C4C',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 8,
  },
});

export default CartScreen;
