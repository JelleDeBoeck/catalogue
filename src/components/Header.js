import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

const Header = ({headerText, headerIcon }) => {
  return (
    <View style={{flexDirection: "row"}}>
      <Text style={{flex: 1, fontSize: 24, fontWeight: "700"}}>{headerText}</Text>
      <FontAwesome name={headerIcon} size={24} color="#f96165" />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})