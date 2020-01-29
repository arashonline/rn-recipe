import React from 'react';
import {useSelector} from 'react-redux';
import MealList from '../components/MealList';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from "../components/HeaderButton";
import { View, StyleSheet } from 'react-native';
import DefaultText from '../components/DefaultText';

const FavoritesScreen = props => {
  const favMeals = useSelector(state=> state.meals.favoriteMeals);
  // const favMeals = MEALS.filter(meal => meal.id === 'm1' ||meal.id === 'm2'  )

  if(favMeals.length === 0 || !favMeals){
    return (<View style={styles.content}>
      <DefaultText>No Favorite Meals Yet!</DefaultText>
    </View>)
  }else{
    return <MealList listData={favMeals} navigation={props.navigation}/>;
  }
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

const styles = StyleSheet.create({
  content:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})


export default FavoritesScreen;
