
import { createStackNavigator } from "react-navigation-stack";

import FiltersScreen from "../screens/FiltersScreen";
import DefaultStackNavOptions from "./DefaultStackNavOptions";



const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
  },{
    // navigationOptions: {
    //   drawerLabel: 'Filter!'
    // },
    defaultNavigationOptions: DefaultStackNavOptions
  })

  export default FiltersNavigator;