
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import MealsFavTabNavigator from "./MealsFavTabNavigator";
import FiltersNavigator from "./FiltersNavigator";
import Colors from "../constants/Colors";



const MainNavigator = createDrawerNavigator(
    {
      MealsFavs:{
        screen: MealsFavTabNavigator,
        navigationOptions:{drawerLabel: 'Categories'}
      },
      Filters: {
        screen: FiltersNavigator,
        navigationOptions:{drawerLabel: 'Filters'}
      },
    },
    {
      contentOptions:{
        activeTintColor:Colors.secondary ,
        labelStyle:{
          fontFamily: 'open-sans-bold',
        }
      }
    }
    
  );

 export default createAppContainer(MainNavigator);