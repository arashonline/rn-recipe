import React from "react";
import { Platform } from "react-native";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createBottomTabNavigator } from "react-navigation-tabs";

import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";

import MealsNavigator from './MealsNavigator';
import FavoritesNavigator from './FavoritesNavigator';

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
        screen: FavoritesNavigator,
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
                shifting: true,
                barStyle: {
                    backgroundColor: Colors.primary
                }
            })
        : createBottomTabNavigator(tabScreenConfig,
            {
                tabBarOptions: {
                    activeTintColor: Colors.secondary
                }
            }

        );

export default MealsFavTabNavigator;