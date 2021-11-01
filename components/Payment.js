import React, {useState} from 'react';
import {
  View,
  Image,
  FlatList,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../assets/colors/colors';
import images from '../assets/images/images';
import Input from './subComponents/Input';
import Button from './subComponents/Button';
import Navigation from './subComponents/Navigation';
import Header from './subComponents/Header';

export default Payment = ({navigation}) => {
  return (
    <>
      <Header title={'Payment'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        <SafeAreaView>
          <View
            style={{
              backgroundColor: colors.white,
              paddingHorizontal: 24,
              paddingTop: 25,
            }}>
            <Text style={style.heading}>Select a Payment Method:</Text>

            <View style={[style.button, {shadowColor: colors.orange}]}>
              <Image
                style={{height: 27, width: 126}}
                source={images.razorpay}
              />
            </View>
            <View style={style.button}>
              <Image
                style={{height: 27, width: 126}}
                source={images.razorpay}
              />
            </View>

            <View style={{marginBottom: 30, marginTop: 310}}>
              <Button lable="PLACE YOUR ORDER" total="$103" />
            </View>

          </View>
        </SafeAreaView>
      </ScrollView>
      <Navigation />
    </>
  );
};

const style = StyleSheet.create({
  heading: {
    color: colors.black,
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    marginBottom: 15,
    height: 54,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: colors.white,
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 8,
  },
});
