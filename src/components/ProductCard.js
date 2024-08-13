import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { productList } from '../Constant'

const ProductCard = () => {
  return (
    <View>
      <FlatList data={productList} renderItem={({item}) => <View style={{backgroundColor: '#f96165' }}> </View>}/>
      <Text>{item.name}</Text>
    </View>
  )
}

export default ProductCard

const styles = StyleSheet.create({})