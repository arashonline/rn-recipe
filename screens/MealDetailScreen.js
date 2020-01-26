import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton'
import { MEALS } from '../data/dummy';
import { Ionicons } from '@expo/vector-icons';

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId)

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
    </View>
  );
};



MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId)
  return {
    headerTitle: selectedMeal.title,
    headerRight: () => {return (    
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title='My Favorite'
        iconName="ios-star"
        onPress={() => {
          console.log('favorite')
        }} />
    </HeaderButtons>
    )}
  };
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MealDetailScreen;
