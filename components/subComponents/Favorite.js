import React, {useState} from 'react';
import {
  TextInput,
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import colors from '../../assets/colors/colors';
import images from '../../assets/images/images';

export default Favorite = () => {
  // const navigation = useNavigation();

  return (
    <>
      <View style={style.recommendedItemFavorite}>
        <Image source={images.heart}></Image>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  recommendedItemFavorite: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 37,
    height: 37,
    backgroundColor: colors.white,
    borderRadius: 18.5,
    shadowColor: colors.black,
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 4,
  },
});
