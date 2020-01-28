
import React from 'react'
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";


import defaultStackNavOptions from "./DefaultStackNavOptions";

// we declare different screens we want to move between
const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail:  MealDetailScreen
  },
  {
    initialRouteName: "Categories",
    defaultNavigationOptions: defaultStackNavOptions
  }
);



// wrap the root (most important) navigator in createAppContainer

// using MealsFavTabNavigator instead of MealsNavigator because it already has MealsNavigator in it
export default MealsNavigator;
