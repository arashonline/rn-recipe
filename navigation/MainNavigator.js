
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import MealsFavTabNavigator from "./MealsFavTabNavigator";
import FiltersNavigator from "./FiltersNavigator";



const MainNavigator = createDrawerNavigator(
    {
      MealsFavs: MealsFavTabNavigator,
      Filters: FiltersNavigator
    }
    
  );

 export default createAppContainer(MainNavigator);