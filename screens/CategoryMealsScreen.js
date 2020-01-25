import React from 'react';
import { View, Text,Button, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/dummy';

const CategoryMealScreen = props => {
  const categoryId = props.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat =>cat.id === categoryId )
  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen!</Text>
      <Text>{selectedCategory.title}</Text>
      <Button title='Meals Detail' onPress={()=>{
        props.navigation.navigate({
          routeName:'MealDetail'
        })
      }} />
    </View>
  );
};

CategoryMealScreen.navigationOptions = navigationData=>{  
    const categoryId =  navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat=>cat.id === categoryId )
    return {headerTitle: selectedCategory.title}
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealScreen;
