import React from 'react';
import { View, Text,FlatList, StyleSheet } from 'react-native';
import { CATEGORIES , MEALS} from '../data/dummy';
import MealItem from '../components/MealItem'

const CategoryMealScreen = props => {

  const renderMealItem = itemData =>{
    return (
      <MealItem 
      title={itemData.item.title}
      duration={itemData.item.duration}
      image={itemData.item.imageUrl}
      complexity={itemData.item.complexity}
      affordability={itemData.item.affordability}
      onSelectMeal={()=>{props.navigation.navigate({
        routeName:'MealDetail',
        params:{
          mealId: itemData.item.id
        }
      })}}
      />
    );
  }

  const categoryId = props.navigation.getParam('categoryId');

  const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >=0)

  const selectedCategory = CATEGORIES.find(cat =>cat.id === categoryId )
  return (
    <View style={styles.screen}>
      <FlatList data={displayedMeals} 
      renderItem={renderMealItem}
      />
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
