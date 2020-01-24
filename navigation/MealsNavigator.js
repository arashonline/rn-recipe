import { createStackNavigator, createAppContainer } from "react-navigation";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

// we declare different screens we want to move between
const MealsNavigator =  createStackNavigator({
  Categories: { screen: CategoriesScreen },
  CategoryMeals: { screen: CategoryMealsScreen },
  MealDetail: { screen: MealDetailScreen }
});

// wrap the root (most important) navigator in createAppContainer
export default createAppContainer(MealsNavigator);