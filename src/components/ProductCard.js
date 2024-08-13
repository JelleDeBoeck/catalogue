import { FlatList, StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import { colors, productList } from '../Constant';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ProductCard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={productList}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate("DetailsScreen", { item })}
            style={styles.card}
          >
            <Image source={item.image} style={styles.image} />
            <Text style={styles.productName}>{item.name}</Text>
            <View style={styles.priceRow}>
              <Text style={styles.price}>{item.price}</Text>
              <Text style={styles.separator}> | </Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.rating}>{item.rating}</Text>
                <FontAwesome name="star" size={16} color={colors.COLOR_PRIMARY} />
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
  container: {
    padding: 10,
    backgroundColor: colors.COLOR_BACKGROUND,
  },
  card: {
    backgroundColor: colors.COLOR_LIGHT,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    borderRadius: 16,
    marginVertical: 10,
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 26,
    width: '48%',
  },
  image: {
    width: 140,
    height: 140,
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
    color: "#666",
  },
  separator: {
    fontSize: 14,
    paddingLeft: 12,
    paddingRight: 12,
    color: colors.COLOR_TEXT_SECONDARY,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    fontSize: 14,
    fontWeight: '600',
    color: "#666",
    marginRight: 4,
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
});
