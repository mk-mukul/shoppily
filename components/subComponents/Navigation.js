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
            <View style={style.navigationIcon}>
              <Image style={{width: 20, height: 17}} source={images.home} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('ShoppingBag')}>
            <View style={style.navigationIcon}>
              <Image style={{width: 18, height: 18}} source={images.cart} />
            </View>
          </TouchableOpacity>

          <View style={style.navigationIcon}></View>
          
          <TouchableOpacity style={style.navigationStore}
            onPress={() => navigation.navigate('StoreDashboard')}>
              <Image style={{width: 18, height: 16}} source={images.store} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('MyAccount')}>
            <View style={style.navigationIcon}>
              <Image style={{width: 17, height: 17}} source={images.account} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
            <View style={style.navigationIcon}>
              <Image style={{width: 18, height: 12}} source={images.menu} />
            </View>
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
    paddingHorizontal: 25,
    paddingVertical: 8,
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
  navigationIcon: {
    backgroundColor: colors.white,
    width: 53,
    height: 53,
    borderRadius: 26.5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
