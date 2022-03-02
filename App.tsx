import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from './screens/HomeScreen'
import Relaxation from "./screens/relaxation/Relaxation";
import RelaxationTips from "./screens/relaxationTips/RelaxationTips";
import Breathing from "./screens/breathing/Breathing";
import { Yoga } from "./screens/yoga/Yoga";

const Drawer = createDrawerNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="RelaxationTips" component={RelaxationTips} />
        <Drawer.Screen name="Breathing" component={Breathing} />
        <Drawer.Screen name="Yoga" component={Yoga} />
        <Drawer.Screen name="Relaxation" component={Relaxation} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

