import React from 'react';
import { Platform } from "react-native";
import Colors from "../constants/Colors";

const DefaultStackNavOptions = {
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primary : ""
    },
    headerBackTitleStyle:{
      fontFamily:'open-sans'
    },
    headerTitleStyle:{
      fontFamily: 'open-sans-bold',
    },
    headerTintColor: "black"
  };

  export default DefaultStackNavOptions;