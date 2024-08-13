import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';

const DetailsScreen = ({ navigation, route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-circle-left" size={28} color="white" />
        </Pressable>
        <FontAwesome name="heart-o" size={28} color="white" />
      </SafeAreaView>

      <View style={styles.detailsContainer}>
        <View style={styles.imageWrapper}>
          <Image
            source={item.image}
            style={styles.image}
          />
        </View>

        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0072FF',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    margin: 16,
  },
  backButton: {
    flex: 1,
  },
  detailsContainer: {
    backgroundColor: '#fff',
    flex: 1,
    marginTop: 240,
    borderTopLeftRadius: 56,
    borderTopRightRadius: 56,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  imageWrapper: {
    height: 300,
    width: 300,
    position: 'absolute',
    top: -150,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 50,
  },
  name: {
    marginTop: 220,
    fontSize: 28,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 20,
    marginVertical: 16,
  },
});
