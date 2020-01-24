import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MealDetailScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Meal Detail Screen!</Text>
      <Button title='Categories' onPress={()=>{
        props.navigation.navigate({
          routeName:'Categories'
        })
      }} />
      <Button title='Categories With push' onPress={()=>{
        props.navigation.push('Categories')
      }} />
      <Button title='Category Meals' onPress={()=>{
        props.navigation.navigate({
          routeName:'CategoryMeals'
        })
      }} />
      <Button title='Go Back' onPress={()=>{
        props.navigation.goBack()
      }} />
      <Button title='Go Back POP' onPress={()=>{
        props.navigation.popToTop();
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

export default MealDetailScreen;
