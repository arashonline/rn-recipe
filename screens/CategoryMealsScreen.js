import React from 'react';
// we using a hook to get data using redux
import {useSelector} from 'react-redux';
import { View, Text,FlatList, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/dummy';
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';

const CategoryMealScreen = props => {

  const categoryId = props.navigation.getParam('categoryId');

  const availableMeals = useSelector(state => state.meals.filteredMeals)

  const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(categoryId) >=0)

  if(displayedMeals.length ===0){
    <View style={styles.content}>
    <DefaultText>No Meals Found, Check The Filters.</DefaultText>
    </View>
  }else{
    return <MealList listData={displayedMeals} navigation={props.navigation}/>;
  }

  
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
  },
  content:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealScreen;
