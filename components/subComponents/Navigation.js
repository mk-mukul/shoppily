import React, {useState} from 'react';
import {
  TextInput,
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import colors from '../../assets/colors/colors';
import images from '../../assets/images/images';

export default Navigation = () => {
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView>
        <View style={style.navigationWrapper}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image style={{width: 20, height: 17}} source={images.home} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ShoppingBag')}>
            <Image style={{width: 18, height: 18}} source={images.cart} />
          </TouchableOpacity>

          <View></View>
          <View style={style.navigationStore}>
            <TouchableOpacity onPress={() => navigation.navigate('StoreDashboard')}>
              <Image style={{width: 18, height: 16}} source={images.store} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('MyAccount')}>
            <Image style={{width: 17, height: 17}} source={images.account} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
            <Image style={{width: 18, height: 12}} source={images.menu} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};
import {SafeAreaView} from 'react-native-safe-area-context';
// import { useNavigation } from '@react-navigation/native';

const style = StyleSheet.create({
  navigationWrapper: {
    backgroundColor: colors.white,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 25,
    shadowColor: colors.black,
    shadowOpacity: 0.8,
    shadowRadius: 30,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 40,
  },
  navigationStore: {
    backgroundColor: colors.red,
    width: 53,
    height: 53,
    borderRadius: 26.5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: '50%',
  },
});
