import * as React from 'react';
import {
  View,
  Image,
  FlatList,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import colors from '../../assets/colors/colors';
// import colors from '../assets/colors/colors';
// import images from '../assets/images/images';

export default Button = props => {
  return (
    <>
      <View style={style.buttonWrapper}>
        <View
          style={[
            style.button,
            {
              backgroundColor: props.isWhite ? colors.white : colors.blue,
              borderWidth: props.isWhite ? (props.isBorder ? 2 : 0) : 0,
            },
            props.isShadow? style.shadow: null
          ]}>
          <Text
            style={[
              style.buttonText,
              {
                color: props.isWhite ? colors.black : colors.white,
              },
            ]}>
            {props.lable}
          </Text>
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  buttonWrapper: {
    width: '100%',
    // padding: 10,
  },
  button: {
    height: 54,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 30,
  },
  buttonText: {
    alignSelf: 'center',
    fontFamily: 'Lato-Bold',
    fontSize: 14,
  },
  shadow: {
    shadowColor: colors.black,
    shadowOpacity: 0.5,
    shadowRadius: 3,
    // shadowOffset: {
    //   height: 0,
    //   width: 0,
    // },
    elevation: 5,
  },
});
