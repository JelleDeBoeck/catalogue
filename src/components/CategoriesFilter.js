import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { categories, colors } from '../Constant'

const CategoriesFilter = ({ selectedCategory, onSelectCategory }) => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category) => {
          const isSelected = selectedCategory === category.id;
          return (
            <Pressable
              key={category.id}
              onPress={() => onSelectCategory(category.id)}
              style={[
                styles.categoryContainer,
                { 
                  backgroundColor: isSelected ? colors.COLOR_PRIMARY : colors.COLOR_LIGHT 
                }
              ]}
            >
              <Text
                style={[
                  styles.categoryText,
                  { color: isSelected ? colors.COLOR_LIGHT : colors.COLOR_TEXT }
                ]}
              >
                {category.category}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  )
}

export default CategoriesFilter

const styles = StyleSheet.create({
  categoryContainer: {
    marginRight: 36,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    marginVertical: 16,
  },
  categoryText: {
    fontSize: 18,
  },
});
