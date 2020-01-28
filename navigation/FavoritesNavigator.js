import { createStackNavigator } from "react-navigation-stack";
import FavoritesScreen from "../screens/FavoritesScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import defaultStackNavOptions from "./DefaultStackNavOptions";



const FavoritesNavigator = createStackNavigator(
    {
      Favorites: {
        screen: FavoritesScreen,
        headerTitle: "My Favorites"
      }, 
      MealDetail: {
        screen: MealDetailScreen,
        headerTitle: "Meal Details"
      }
    },
    {
      initialRouteName: "Favorites",
      defaultNavigationOptions: defaultStackNavOptions 
    }
  );
  
export default FavoritesNavigator;