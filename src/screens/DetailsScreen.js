import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome } from '@expo/vector-icons'

const DetailsScreen = ({navigation, route}) => {

  const {item} = route.params;

  console.log(item);
  return (
    <View style={{backgroundColor: item.color, flex: 1}}>
        <SafeAreaView style={{flexDirection: "row", marginHorizontal: 16}}>
            <Pressable style={{flex: 1}} onPress={() => navigation.goBack()}>
            <FontAwesome name={"arrow-circle-left"} size={28} color="white" />
            </Pressable>
            <FontAwesome name={"heart-o"} size={28} color="white"/>
        </SafeAreaView>
        <View style={{backgroundColor: "#fff", flex: 1, marginTop: 240, borderTopLeftRadius: 56, borderTopRightRadius: 56, alignItems: "center", paddingHorizontal: 16}}>

            <View style={{height: 300, width: 300, position: "absolute", top: -150,}}>
                <Image source={item.image} style={{width:"100%", height: "100%", resizeMode:"contain", borderRadius: 50}}/>
            </View>

            <Text style={{marginTop: 220, fontSize: 28, fontWeight: "bold", }}>{item.name}</Text>

            <Text style= {{fontSize: 20, marginVertical: 16}}>{item.description}</Text>

            <View style={{flexDirection: "row"}}>

            </View>
        </View>
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({})