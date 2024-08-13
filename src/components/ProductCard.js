import { FlatList, StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../Constant'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ProductCard = ({ products }) => {
  const navigation= useNavigation();
  
  return (
    <View>
      <FlatList 
        data={products}
        renderItem={({item}) => (
          <Pressable 
            onPress={() => navigation.navigate("DetailsScreen", {item})}
            style={styles.card}
          >
            <Image source={item.image} style={styles.image}/>
            <Text style={styles.productName}>{item.name}</Text>
            <View style={styles.priceRow}>
              <Text style={styles.price}>{item.price}</Text>
              <Text> | </Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.rating}>{item.rating}</Text>
                <FontAwesome name="star" size={16} color={colors.COLOR_PRIMARY}/>
              </View>
            </View>
          </Pressable>
        )}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.COLOR_LIGHT,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    borderRadius: 16,
    marginVertical: 10,
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 26,
    width: '48%',
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.COLOR_TEXT,
    textAlign: 'center',
    marginBottom: 6,
  },
  priceRow: {
    flexDirection: "row",
    marginTop: 8,
    alignItems: "center",
  },
  price: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.COLOR_PRIMARY,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.COLOR_PRIMARY,
    marginRight: 4,
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
});
