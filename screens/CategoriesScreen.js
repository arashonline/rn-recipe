import React from 'react';
import { View, Text,Button, StyleSheet } from 'react-native';
import CategoryMealScreen from './CategoryMealsScreen';

const CategoriesScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen!</Text>
      <Button title='To Meals' onPress={()=>{
        props.navigation.navigate({
          routeName:'CategoryMeals'
        })
      }} />
      <Button title='To Meals Replace' onPress={()=>{
        props.navigation.replace('CategoryMeals')
      }} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoriesScreen;
