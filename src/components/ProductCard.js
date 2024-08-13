import { FlatList, StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { colors, productList } from '../Constant'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ProductCard = () => {
  const navigation= useNavigation();
  return (
    <View>
      <FlatList data={productList}
      renderItem={({item})=> (
      <Pressable onPress={() => navigation.navigate("DetailsScreen", {item: item})}
      
      style={{backgroundColor: colors.COLOR_LIGHT, shadowColor: "#000", shadowOffset: {width: 0, height: 4}, shadowOpacity: 0.1, shadowRadius: 7, borderRadius: 16, marginVertical: 16, alignItems: "center", paddingHorizontal: 8, paddingVertical: 26,}}>

        <Image source={item.image} style={{width: 150, height: 150, resizeMode: "center"}}/>
        <Text>{item.name}</Text>
        <View style={{flexDirection: "row", marginTop: 8}}>
          <Text>{item.price}</Text>
          <Text> | </Text>
          <View style= {{flexDirection: "row"}}>
          <Text style={{marginRight: 4}}>{item.rating}</Text>
          <FontAwesome name="star" size={16} color= {colors.COLOR_PRIMARY}/>
          </View>
        </View>
      </Pressable>)}
      numColumns={2}
      columnWrapperStyle={{
        justifyContent: "space-between",
      }}

      showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ProductCard

const styles = StyleSheet.create({})