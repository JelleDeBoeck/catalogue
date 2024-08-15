import { FlatList, StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import { colors } from '../Constant';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ProductCard = ({ products }) => {
  const navigation = useNavigation();
  
  return (
    <FlatList 
      data={products}
      renderItem={({ item }) => (
        <Pressable 
          onPress={() => navigation.navigate("DetailsScreen", { item })}
          style={styles.card}
        >
          <Image source={item.image} style={styles.image} />
          <Text style={styles.productName}>{item.name}</Text>
          <View style={styles.priceRow}>
            <Text style={styles.price}>{item.price}</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.rating}>{item.rating}</Text>
              <FontAwesome name="star" size={16} color="#FFB400" />
            </View>
          </View>
        </Pressable>
      )}
      numColumns={2}
      columnWrapperStyle={styles.columnWrapper}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.COLOR_LIGHT,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    borderRadius: 16,
    marginVertical: 10,
    alignItems: "center",
    padding: 16,
    width: '48%',
    marginHorizontal: '1%',
    borderColor: '#eee',
    borderWidth: 1,
  },
  image: {
    width: '100%',
    height: 140,
    resizeMode: "cover", 
    borderRadius: 12,
    marginBottom: 12,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.COLOR_DARK_ALT,
    textAlign: 'center',
    marginBottom: 8,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
    marginTop: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.COLOR_PRIMARY,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  rating: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.COLOR_DARK_ALT,
    marginRight: 4,
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
});
