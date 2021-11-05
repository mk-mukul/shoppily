import React, {useState} from 'react';
import {
  TextInput,
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

import colors from '../../assets/colors/colors';
import images from '../../assets/images/images';

export default Header = props => {
  const navigation = useNavigation();
  const [isSearch, setIsSearch] = useState(false);

  return (
    <>
      <SafeAreaView>
        <View
          style={[
            style.headerWrapper,
            {
              backgroundColor: props.isWhite ? colors.white : colors.red,
            },
          ]}>
          {!isSearch ? (
            <>
              {props.isWhite||!props.back ? null : (
                <TouchableOpacity onPress={() => navigation.navigate(props.back)}>
                  <Image
                    style={{marginRight: 25, width: 24, height: 24}}
                    source={images.back}
                  />
                </TouchableOpacity>
              )}
              <Text
                style={[
                  style.heading,
                  {
                    color: props.isWhite ? colors.red : colors.white,
                  },
                ]}>
                {props.title ? props.title : 'Shoppily'}
              </Text>
              {props.isSearch ? (
                <TouchableOpacity
                  onPress={() => {
                    setIsSearch(true);
                  }}>
                  {props.isWhite ? (
                    <Image
                      style={{width: 30, height: 30}}
                      source={images.searchRed}
                    />
                  ) : (
                    <Image
                      style={{width: 30, height: 30}}
                      source={images.search}
                    />
                  )}
                </TouchableOpacity>
              ) : null}
            </>
          ) : (
            <>
              <TouchableOpacity
                style={{}}
                onPress={() => {
                  setIsSearch(false);
                }}>
                {props.isWhite ? (
                  <Image
                    style={{marginRight: 25, width: 24, height: 24}}
                    source={images.backRed}
                  />
                ) : (
                  <Image
                    style={{marginRight: 25, width: 24, height: 24}}
                    source={images.back}
                  />
                )}
              </TouchableOpacity>
              <View style={{flexGrow: 1}}>
                <Search search={props.search} setSearch={props.setSearch} />
              </View>
            </>
          )}
        </View>
      </SafeAreaView>
    </>
  );
};

const Search = props => {
  return (
    <View style={{width: '100%'}}>
      <View style={style.inputTextWrapper}>
        <Image
          style={{height: 21, width: 21, alignSelf: 'center'}}
          source={images.searchRed}></Image>
        <TextInput
          style={style.input}
          placeholder={' Search on Shoppily'}
          placeholderTextColor={colors.red}
          onChangeText={text => props.setSearch(text)}
          defaultValue={props.search}
          selectionColor={colors.red}
        />
        <View></View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  headerWrapper: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heading: {
    fontFamily: 'Lato-Bold',
    fontSize: 30,
    flexGrow: 1,
    marginVertical: 5,
  },
  inputTextWrapper: {
    backgroundColor: colors.white,
    paddingVertical: 9,
    paddingHorizontal: 19,
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 20,
    maxWidth: '88%',
  },
  input: {
    padding: 0,
    marginLeft: 20,
    flexGrow: 1,
    fontFamily: 'Lato-Bold',
    color: colors.red,
    fontSize: 14,
  },
});
