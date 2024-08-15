import React from 'react';
import { FlatList, StyleSheet, Text, View, Pressable } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
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
          <Card style={styles.cardContainer}>
            <Card.Cover source={item.image} style={styles.image} />
            <Card.Content>
              <Title style={styles.productName}>{item.name}</Title>
              <View style={styles.priceRow}>
                <Text style={styles.price}>{item.price}</Text>
                <View style={styles.ratingContainer}>
                  <Text style={styles.rating}>{item.rating}</Text>
                  <FontAwesome name="star" size={16} color="#FFB400" />
                </View>
              </View>
            </Card.Content>
          </Card>
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
    marginVertical: 8,
    marginHorizontal: '1%',
    width: '48%',
  },
  cardContainer: {
    backgroundColor: colors.COLOR_LIGHT,
    borderRadius: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  image: {
    height: 120,
    resizeMode: "contain",
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.COLOR_TEXT,
    marginBottom: 6,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
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
    color: colors.COLOR_TEXT,
    marginRight: 4,
  },
  columnWrapper: {
    justifyContent: "space-between",
  }
});
