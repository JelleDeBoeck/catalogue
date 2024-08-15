import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import Header from '../components/Header';
import CategoriesFilter from '../components/CategoriesFilter';
import ProductCard from '../components/ProductCard';
import { categories, productList } from '../Constant';

const ProductScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('Alles');

  const filteredProducts = selectedCategory === 'Alles'
    ? productList
    : productList.filter(product => product.category === selectedCategory);

  return (
    <SafeAreaView style={styles.container}>
      <Header headerText="Hey, Stijn" headerIcon="bell-o" />

      <View style={styles.categoriesSection}>
        <Text style={styles.sectionTitle}>Categorieën</Text>
        <CategoriesFilter 
          selectedCategory={selectedCategory} 
          onSelectCategory={setSelectedCategory} 
        />
      </View>

      <View style={styles.productsSection}>
        <Text style={[styles.sectionTitle, styles.productTitle]}>Producten</Text>
        <ProductCard products={filteredProducts} />
      </View>
    </SafeAreaView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    marginTop: 32,
  },
  categoriesSection: {
    marginTop: 22,
    marginBottom: 22,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  productsSection: {
    flex: 1,
  },
  productTitle: {
    marginBottom: 12,
  },
});
