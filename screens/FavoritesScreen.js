import React from 'react';
import {useSelector} from 'react-redux';
import MealList from '../components/MealList';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from "../components/HeaderButton";

const FavoritesScreen = props => {
  const favMeals = useSelector(state=> state.meals.favoriteMeals);
  // const favMeals = MEALS.filter(meal => meal.id === 'm1' ||meal.id === 'm2'  )

  return <MealList listData={favMeals} navigation={props.navigation}/>;
};



FavoritesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Favorite Foods',
    headerLeft: ()=>(
      // <HeaderButtonNav navigation={navData.navigation} />
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
           navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};


export default FavoritesScreen;
