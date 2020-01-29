import React, {useEffect, useCallback} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {
  ScrollView,
  View,
  Image,
  Text,
  StyleSheet
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { Ionicons } from "@expo/vector-icons";
import DefaultText from "../components/DefaultText";

import { toggleFavorite} from '../store/actions/meals'

const ListItem = props=>{
  return (<View style={styles.listItem}>
  <DefaultText>{props.children}</DefaultText>
  </View>)
}

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam("mealId");

  const availableMeals = useSelector(state=> state.meals.meals);
  const isInFavoriteMeals = useSelector(state =>state.meals.favoriteMeals.some(meal=>meal.id === mealId))
  const selectedMeal = availableMeals.find(meal => meal.id === mealId);

  const dispatch = useDispatch();

  // to prevent infinite loop we use useCallback and set the dependency on their change or function which is wrapped with useCallback will change
  const toggleFavoriteHandler = useCallback(()=>{
    dispatch(toggleFavorite(mealId))
  },[dispatch,mealId]);

  useEffect(()=>{
    // props.navigation.setParams({mealTitle: selectedMeal.title});
    props.navigation.setParams({toggleFav: toggleFavoriteHandler})
  },[toggleFavoriteHandler]);

  useEffect(()=>{
    props.navigation.setParams({isInFavoriteMeals: isInFavoriteMeals})
  },[isInFavoriteMeals]);
  

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients:</Text>
      {selectedMeal.ingredients.map(ingredient => {
        return <ListItem key={ingredient}>{ingredient}</ListItem>;
      })}
      <Text style={styles.title}>Steps:</Text>
      {selectedMeal.steps.map(step => {
        return <ListItem key={step}>{step}</ListItem>;
      })}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = navigationData => {
  // const mealId = navigationData.navigation.getParam("mealId"); 
  const mealTitle = navigationData.navigation.getParam('mealTitle');
  const toggleFavorite = navigationData.navigation.getParam('toggleFav');
  const isInFavoriteMeals = navigationData.navigation.getParam('isInFavoriteMeals');


  return {
    headerTitle: mealTitle,
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="My Favorite"
            iconName={isInFavoriteMeals?'ios-star':'ios-star-outline'}
            onPress={toggleFavorite}
          />
        </HeaderButtons>
      );
    }
  };
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center"
  },
  image: {
    width: "100%",
    height: 200
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around"
  },
  listItem:{
    marginVertical:10,
    marginHorizontal:20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10
  }
});

export default MealDetailScreen;
