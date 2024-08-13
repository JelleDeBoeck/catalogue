import { StyleSheet, View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import ProductCard from "../components/ProductCard";

const ProductScreen = () => {
    return (
        <SafeAreaView style={{flex: 1, margin: 16}}>
            <Header headerText={"Hey, Stijn "} headerIcon={"bell-o"}/>
            <SearchFilter icon="search" placeholder={"Zoek wat specifieker"}/>

            <View style={{ marginTop: 22, flex: 1 }}>
				<Text style={{ fontSize: 22, fontWeight: "bold" }}>Producten</Text>

				<ProductCard/>
			</View>
        </SafeAreaView>

        
    )
}


export default ProductScreen;

const styles = StyleSheet.create({});
