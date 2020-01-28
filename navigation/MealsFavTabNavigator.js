import React from "react";
import { Platform, Text, StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createBottomTabNavigator } from "react-navigation-tabs";

import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";

import MealsNavigator from "./MealsNavigator";
import FavoritesNavigator from "./FavoritesNavigator";

const tabScreenConfig = {
  // first setup an identifier like Meals
  // screen should take a react component
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primary,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}>Meals</Text>
        ) : (
          "Meals"
        )
    }
  },
  Favorites: {
    screen: FavoritesNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.tinted,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}>My Favorites</Text>
        ) : (
          "My Favorites"
        )
    }
  }
};

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: Colors.secondary,
        shifting: true,
        barStyle: {
          backgroundColor: Colors.primary
        }
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.secondary
        },
        labelStyle: {
          fontFamily: "open-sans-bold"
        }
      });

      
const styles = StyleSheet.create({
    tabs: { fontFamily: "open-sans-bold" }
  });

export default MealsFavTabNavigator;

