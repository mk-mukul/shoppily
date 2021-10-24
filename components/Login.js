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

export default Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setChecked] = useState(true);

  return (
    <>
      <View style={{backgroundColor:colors.white}}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          showsVerticalScrollIndicator={false}>
          <SafeAreaView>
            <View style={style.topView}>
              <Image source={images.vector1} style={style.topVector} />
              <View style={style.topWrapper}>
                <Image source={images.topArrow} />
                {/* </View>
                            <View> */}
                <Text style={style.topHeading}>Start your own store!</Text>
              </View>
            </View>

            {/* Loginn form */}
            <View style={style.loginFormWrapper}>
              <View style={{marginBottom: 36}}>
                <Input
                  lable={'Email address'}
                  placeholder={'Enter your email'}
                  text={email}
                  setText={setEmail}
                  icon={images.envelopeSimple}
                  // error={images.errorCircle}
                />
              </View>
              <View style={{marginBottom: 28}}>
                <Input
                  lable={'Password'}
                  placeholder={'Enter your password'}
                  text={password}
                  setText={setPassword}
                  icon={images.lock}
                  secure={true}
                />
              </View>

              <View style={style.preLoginWrapper}>
                <CheckBox
                  style={style.checkBox}
                  onValueChange={() => {
                    setChecked(!isChecked);
                  }}
                  value={isChecked}
                />
                <Text
                  style={[
                    style.preLoginTest,
                    {flexGrow: 1, color: colors.black},
                  ]}>
                  Keep me signed in
                </Text>
                <Text style={[style.preLoginTest, {color: colors.red}]}>
                  Forgot Password?
                </Text>
              </View>

              <View style={{marginBottom: 18}}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Home');
                  }}>
                  <Button lable="LOG IN" />
                </TouchableOpacity>
              </View>

              <View style={style.postLoginWrapper}>
                <Text style={[style.preLoginTest, {color: colors.black}]}>
                  Not registered yet?{' '}
                </Text>
                <Text style={[style.preLoginTest, {color: colors.red}]}>
                  Create an Account
                </Text>
              </View>
            </View>
          </SafeAreaView>
        </ScrollView>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  topView: {
    position: 'relative',
    height: 338,
  },
  topVector: {
    position: 'absolute',
    top: 0,
  },
  topWrapper: {
    paddingTop: 25,
    paddingLeft: 25,
  },
  topHeading: {
    fontFamily: 'Lato-Bold',
    fontSize: 52,
    lineHeight: 45,
    paddingTop: 27,
    paddingLeft: 12,
    width: 165,
    color: colors.white,
  },
  loginFormWrapper: {
    padding: 30,
  },
  preLoginWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  preLoginTest: {
    fontFamily: 'Lato-Regular',
    fontSize: 12,
  },
  postLoginWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 18,
    justifyContent: 'center',
  },
  checkBox: {
    margin: 0,
    padding: 0,
    height: 20,
    width: 20,
    marginRight: 16,
    borderRadius: 10,
    // color: colors.blueLight,
    // backgroundColor: colors.blue
  },
});
