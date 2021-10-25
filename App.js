import 'react-native-gesture-handler';

import * as React from 'react';
// import { Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import Home from "./components/Home.js"
import Login from './components/Login.js';
import Splash from './components/Splash.js';
import ProductDetails from './components/ProductDetails.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen 
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen 
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen 
        name="ProductDetails"
        component={ProductDetails}
        options={{
          headerShown: false,
        }}
        />
      </Stack.Navigator>
      {/* <Navigation/> */}
    </NavigationContainer>
  );
}
