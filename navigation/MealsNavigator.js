
import React from 'react'
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from "../components/HeaderButton";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";



import Colors from "../constants/Colors";
import defaultStackNavOptions from "./DefaultStackNavOptions";

// we declare different screens we want to move between
const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: {
      screen: CategoryMealsScreen,
      headerTitle: "Meals Of Category",
      navigationOptions: {
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primary : ""
        },
        headerTintColor: "black"
      }
    },
    MealDetail: {
      screen: MealDetailScreen,
      headerTitle: "Meal Details"
    }
  },
  {
    initialRouteName: "Categories",
    defaultNavigationOptions: defaultStackNavOptions
  }
);



// wrap the root (most important) navigator in createAppContainer

// using MealsFavTabNavigator instead of MealsNavigator because it already has MealsNavigator in it
export default MealsNavigator;
