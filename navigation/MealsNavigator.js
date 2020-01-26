import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import {createBottomTabNavigator} from 'react-navigation-tabs'

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

import FavoritesScreen from '../screens/FavoritesScreen'

import Colors from "../constants/Colors";

// we declare different screens we want to move between
const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      headerTitle: "Meal Categories"
    },
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
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : ""
      },
      headerTintColor: "black"
    }
  }
);

const MealsFavTabNavigator = createBottomTabNavigator({
  // first setup an identifier like Meals
  // screen should take a react component
  Meals:MealsNavigator,
  Favorites:FavoritesScreen
});

// wrap the root (most important) navigator in createAppContainer

// using MealsFavTabNavigator instead of MealsNavigator because it already has MealsNavigator in it
export default createAppContainer(MealsFavTabNavigator);
