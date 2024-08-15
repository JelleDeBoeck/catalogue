import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { categories } from '../Constant';

const CategoriesFilter = ({ selectedCategory, onSelectCategory }) => {
  return (
    <View style={styles.container}>
      {categories.map(({ category }) => (
        <TouchableOpacity
          key={category}
          style={[
            styles.button,
            selectedCategory === category && styles.selectedButton
          ]}
          onPress={() => onSelectCategory(category)}
        >
          <Text
            style={[
              styles.buttonText,
              selectedCategory === category && styles.selectedButtonText
            ]}
          >
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
    backgroundColor: '#ddd',
    margin: 4,
  },
  selectedButton: {
    backgroundColor: '#0072FF',
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
  },
  selectedButtonText: {
    color: '#fff',
  },
});

export default CategoriesFilter;
