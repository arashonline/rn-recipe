import React from 'react';
import { View, Text,FlatList, StyleSheet } from 'react-native';
import { CATEGORIES , MEALS} from '../data/dummy';
import MealList from '../components/MealList';

const CategoryMealScreen = props => {

  const categoryId = props.navigation.getParam('categoryId');

  const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >=0)

  return <MealList listData={displayedMeals} navigation={props.navigation}/>;
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
