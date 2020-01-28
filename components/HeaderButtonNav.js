import React from 'react'
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from './HeaderButton'

// const HeaderButtonNav = props=>{<HeaderButtons HeaderButtonComponent={HeaderButton}>
//     <Item title="Menu" iconName="ios-menu" onPress={() => { }} />
// </HeaderButtons>};

const HeaderButtonNav = props=>{<HeaderButtons HeaderButtonComponent={HeaderButton}>
<Item
  title="Menu"
  iconName="ios-menu"
  onPress={props.navigation.toggleDrawer()}
/>
</HeaderButtons>};

export default HeaderButtonNav;
