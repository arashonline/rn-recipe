import React from 'react';
// we using a hook to get data using redux
import {useSelector} from 'react-redux';
import { View, Text,FlatList, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/dummy';
import MealList from '../components/MealList';

const CategoryMealScreen = props => {

  const categoryId = props.navigation.getParam('categoryId');

  const availableMeals = useSelector(state => state.meals.filteredMeals)

  const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(categoryId) >=0)

  return <MealList listData={displayedMeals} navigation={props.navigation}/>;
};

CategoryMealScreen.navigationOptions = navigationData=>{  
    const categoryId =  navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat=>cat.id === categoryId )
    return {
      headerTitle: selectedCategory.title
    }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealScreen;
