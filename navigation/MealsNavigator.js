import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

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

// wrap the root (most important) navigator in createAppContainer
export default createAppContainer(MealsNavigator);
