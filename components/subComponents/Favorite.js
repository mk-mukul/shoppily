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
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <>
      <View style={style.recommendedItemFavorite}>
        <TouchableOpacity
          onPress={() => {
            setIsFavorite(prev => !prev);
          }}>
          <Image
            style={{width: 20, height: 18.35}}
            source={isFavorite ? images.heartFill : images.heart}></Image>
        </TouchableOpacity>
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
