import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";
import ProductCard from "../components/ProductCard";

const ProductScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header headerText="Hey, Stijn" headerIcon="bell-o" />
            <SearchFilter icon="search" placeholder="Zoek wat specifieker" />

            <View style={styles.categoriesSection}> 
                <Text style={styles.sectionTitle}>Categorieën</Text>
                <CategoriesFilter />
            </View>

            <View style={styles.productsSection}> 
                <Text style={[styles.sectionTitle, styles.productTitle]}>Producten</Text>
                <ProductCard />
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
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  productsSection: {
    marginTop: 22,
    flex: 1,
    marginBottom: 36,
  },
  productTitle: {
    marginBottom: 12,
  },
});
