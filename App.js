import 'react-native-gesture-handler';

import * as React from 'react';
// import { Text } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './components/Home.js';
import Login from './components/Login.js';
import Splash from './components/Splash.js';
import ProductDetails from './components/ProductDetails.js';
import Shop from './components/Shop.js';
import StoreDetails from './components/StoreDetails.js';
import ShoppingBag from './components/ShoppingBag.js';
import Address from './components/Address.js';
import Payment from './components/Payment.js';
import OrderConfirmation from './components/OrderConfirmation.js';
import MyAccount from './components/MyAccount.js';
import SetUpShop from './components/SetUpShop.js';
import MyStore from './components/MyStore.js';
import StoreDashboard from './components/StoreDashboard.js';
import StoreShop from './components/StoreShop.js';
import AddProduct from './components/AddProduct.js';
import SoldItems from './components/SoldItems.js';
import OrdeNotConfirmed from './components/OrdeNotConfirmed.js';
import Loading from './components/Loading.js';
import HelpCenter from './components/HelpCenter.js';
import NameYourShop from './components/NameYourShop.js';
import YourShopDetails from './components/YourShopDetails.js';
import SavedAddress from './components/SavedAddress.js';
import Menu from './components/Menu.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Loading"
          component={Loading}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="NameYourShop"
          component={NameYourShop}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SavedAddress"
          component={SavedAddress}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="YourShopDetails"
          component={YourShopDetails}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="HelpCenter"
          component={HelpCenter}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="OrdeNotConfirmed"
          component={OrdeNotConfirmed}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SoldItems"
          component={SoldItems}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AddProduct"
          component={AddProduct}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="StoreShop"
          component={StoreShop}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="StoreDashboard"
          component={StoreDashboard}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MyStore"
          component={MyStore}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SetUpShop"
          component={SetUpShop}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MyAccount"
          component={MyAccount}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="OrderConfirmation"
          component={OrderConfirmation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Address"
          component={Address}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ShoppingBag"
          component={ShoppingBag}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="StoreDetails"
          component={StoreDetails}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Shop"
          component={Shop}
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
