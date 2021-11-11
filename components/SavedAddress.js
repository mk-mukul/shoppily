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

export default SavedAddress = ({navigation}) => {
  const [search, setSearch] = useState('');

  const items = [
    {
      image: images.image18,
      name: 'High Heels',
      price: '$29.99',
      isCoscustomizable: true,
    },
  ];

  return (
    <>
      <Header back="Home" title={'My Addresses'} />
      <ScrollView
        style={{backgroundColor: colors.white}}
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        <SafeAreaView>
          <View style={{backgroundColor: colors.white, paddingHorizontal: 24}}>
            <View style={{marginBottom: 10, marginTop: 25}}>
              <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
                <Item name={'M/o Tanya Jain'} />
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
                <Item name={'Tanya Jain'} />
              </TouchableOpacity>
            </View>

            <View style={{marginBottom: 30, marginTop: 0}}>
              <Button to={'Address'} lable={'ADD NEW ADDRESS'} />
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
      <Navigation />
    </>
  );
};

const Item = props => {
  return (
    <>
      <View style={style.itemWrapper}>
        <View style={{width: '34%'}}>
          <Image
            style={{width: 96, height: 96}}
            source={images.homeAddress}></Image>
        </View>

        <View style={{width: '60%', display: 'flex'}}>
          <Text style={style.procuctName}>{props.name}</Text>
          <Text style={[style.procuctAddress]}>48 Trails End Road</Text>
          <Text style={[style.procuctAddress]}>Florida</Text>
          <Text style={[style.procuctAddress]}>33311</Text>
          <Text style={[style.procuctAddress]}>954-296-6493</Text>
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  heading: {
    marginTop: 25,
    color: colors.blue,
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    // marginBottom: 15,
  },
  topInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 12,
    marginBottom: 21,
  },
  noOfResult: {
    color: colors.blue,
    fontFamily: 'Lato-Bold',
    fontSize: 14,
  },
  sortWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  sort: {
    color: colors.black,
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    marginHorizontal: 7,
  },
  itemWrapper: {
    display: 'flex',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 20,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 5,
  },
  procuctName: {
    marginBottom: 4,
    color: colors.black,
    fontFamily: 'Lato-Bold',
    fontSize: 18,
  },
  procuctQuantity: {
    color: colors.blackLight,
    opacity: 0.5,
    fontFamily: 'Lato-Bold',
    fontSize: 18,
  },
  procuctDetails: {
    color: colors.black,
    fontFamily: 'Lato-Bold',
    fontSize: 14,
  },
  personalizedWrapper: {
    marginBottom: 6,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: colors.orange,
    fontFamily: 'Lato-Bold',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  personalized: {
    // marginBottom: 6,
    color: colors.white,
    fontFamily: 'Lato-Bold',
    fontSize: 13,
  },
  procuctAddress: {
    color: colors.blackLight,
    opacity: 0.5,
    fontFamily: 'Lato-Bold',
    fontSize: 14,
  },
  allDetails: {
    color: colors.blue,
    fontFamily: 'Lato-Bold',
    fontSize: 14,
  },
});
