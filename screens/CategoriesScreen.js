import React from "react";
import { FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy";
import CategoryGridTile from "../components/CategoryGridTile";

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from "../components/HeaderButton";

const CategoriesScreen = props => {
  const renderGridItem = itemData => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: itemData.item.id
            }
          });
        }}
      />
    );
  };

  CategoriesScreen.navigationOptions = navData => {
    return {
      headerTitle: 'Meal Categories',
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

  // CategoriesScreen.navigationOptions =  {  
  //   headerTitle: ()=>"Meal Categories",
  //   headerLeft:()=>{
  //     return (   <HeaderButtons HeaderButtonComponent={HeaderButton}>
  //       <Item title="Menu" iconName="ios-star" onPress={() => {console.log('clicked')}} />
  //     </HeaderButtons>)
  //   }
  // }

 

  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

export default CategoriesScreen;
