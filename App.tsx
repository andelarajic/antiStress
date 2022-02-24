import 'react-native-gesture-handler'
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import RelaxationTips from "./components/relaxationTips/RelaxationTips";
import Breathing from "./components/breathing/Breathing";
import Home from './components/home/home';
import Yoga from './components/yoga/Yoga'
import Relaxation from './components/relaxation/Relaxation';


const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Relaxation tips" component={RelaxationTips} />
        <Drawer.Screen name="Breathing" component={Breathing} />
        <Drawer.Screen name="Yoga" component={Yoga} />
        <Drawer.Screen name="Relaxation" component={Relaxation} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

