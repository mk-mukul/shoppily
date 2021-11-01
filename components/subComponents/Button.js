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
        <View style={[style.totalWrapper, props.total ? style.shadow : null]}>
          {props.total ? (
            <Text style={style.total}>TOTAL: {props.total}</Text>
          ) : null}
          <View
            style={[
              style.button,
              {
                backgroundColor: props.isWhite
                  ? colors.white
                  : props.bgColor
                  ? props.bgColor
                  : colors.blue,
                borderWidth: props.isWhite ? (props.isBorder ? 2 : 0) : 0,
              },
              props.isShadow ? style.shadow : null,
            ]}>
            {props.icon?<Image style={{width: 17.5, height: 16.5,marginRight:10,}} source={props.icon} />:null}
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
    alignItems:"center",
    borderRadius: 30,
    flexGrow: 1,
  },
  buttonText: {
    alignSelf: 'center',
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    letterSpacing: 1,
  },
  shadow: {
    shadowColor: colors.black,
    shadowOpacity: 0.5,
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 5,
  },
  totalWrapper: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: colors.white,
    height: 54,
    borderRadius: 30,
  },
  total: {
    marginHorizontal: 24,
    color: colors.orange,
    alignSelf: 'center',
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    letterSpacing: 1,
  },
});
