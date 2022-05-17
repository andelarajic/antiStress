import React, { useState } from "react";
import { View, Text, LogBox } from "react-native";
import { NavigationContainer,  DefaultTheme  } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from './screens/HomeScreen'
import Relaxation from "./screens/relaxation/Relaxation";
import RelaxationTips from "./screens/relaxationTips/RelaxationTips";
import Breathing from "./screens/breathing/Breathing";
import { Yoga } from "./screens/yoga/Yoga";
import { BreathingAnimation } from "./screens/breathing/BreathingAnimation";
import { RelaxationSound } from "./screens/relaxation/RelaxationSound";
import RelaxationTipsFetch from "./screens/relaxationTips/RelaxationTipsFetch";
import YogaFetch from "./screens/yoga/YogaFetch";
import { ChooseTips } from "./screens/relaxationTips/ChooseTips";

LogBox.ignoreLogs(['Remote debugger']);

const Drawer = createDrawerNavigator()

const MyTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    primary: 'black',
    background: "#99badd",
    card: '#99badd',
    text: 'rgb(28, 28, 30)',
    border: '#99badd',
    notification: '#99badd',
  },
};

export default function App() {

  return (
    <>
      <NavigationContainer theme={MyTheme}>
        <Drawer.Navigator >
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="RelaxationTips" component={RelaxationTips} />
          <Drawer.Screen name="Breathing" component={Breathing} />
          <Drawer.Screen name="Yoga" component={Yoga} />
          <Drawer.Screen name="Relaxation" component={Relaxation} />
          <Drawer.Screen name="BreathingAnimation" component={BreathingAnimation} options={{
            drawerItemStyle: { display: 'none' }
          }} />
          <Drawer.Screen name="RelaxationTipsFetch" component={RelaxationTipsFetch} options={{
            drawerItemStyle: { display: 'none' }
          }} />
          <Drawer.Screen name="RelaxationSound" component={RelaxationSound} options={{
            drawerItemStyle: { display: 'none' }
          }}
          />
          <Drawer.Screen name="YogaFetch" component={YogaFetch} options={{
            drawerItemStyle: { display: 'none' }
          }} />
           <Drawer.Screen name="ChooseTips" component={ChooseTips} 
           />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}
