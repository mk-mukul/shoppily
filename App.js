import 'react-native-gesture-handler';

import * as React from 'react';
// import { Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import Home from "./components/Home.js"
import Login from './components/Login.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}