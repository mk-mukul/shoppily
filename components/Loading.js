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

export default Loading = ({navigation}) => {
  return (
    <>
      <SafeAreaView>
        <View style={style.mainContainer}>

          <View style={style.headingWrapper}>
            <Image
              style={{width: 319, height: 216, marginBottom: 19}}
              source={images.loadingImage}
            />
            <Text style={style.heading}>Shoppily</Text>
          </View>

        </View>
      </SafeAreaView>
    </>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    // display: 'flex',
    // flexDirection: "column",
    // Width: "100%",
    // justifyContent: "center",
    // backgroundColor: colors.orange,
  },
  headingWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginTop:200,
  },
  heading: {
    color: colors.red,
    fontFamily: 'Lato-Bold',
    fontSize: 70,
    textAlign: 'center',
  },
});
