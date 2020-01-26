import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

import FavoritesScreen from "../screens/FavoritesScreen";

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

const tabScreenConfig = {
  // first setup an identifier like Meals
  // screen should take a react component
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons
            name="ios-restaurant"
            size={25}
            color={tabInfo.tintColor}
          />
        );
      },
      tabBarColor: Colors.primary
    }
  },
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: {
      tabBarLabel: "My Favorites",
      tabBarIcon: tabInfo => {
        return (
          <Ionicons
            name="ios-star"
            size={25}
            color={tabInfo.tintColor}
          />
        );
      },
      tabBarColor: Colors.tinted
    }
  }
};

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig,
      {
        activeColor: Colors.secondary,
        shifting:true,
        barStyle:{
          backgroundColor:Colors.primary
        }
      })
    : createBottomTabNavigator(tabScreenConfig,
      {
        tabBarOptions: {
          activeTintColor: Colors.secondary
        }
      }
        
      );

// wrap the root (most important) navigator in createAppContainer

// using MealsFavTabNavigator instead of MealsNavigator because it already has MealsNavigator in it
export default createAppContainer(MealsFavTabNavigator);
