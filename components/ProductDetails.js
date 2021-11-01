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
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../assets/colors/colors';
import images from '../assets/images/images';
import Header from './subComponents/Header';
import Navigation from './subComponents/Navigation';
import Favorite from './subComponents/Favorite';
import Button from './subComponents/Button';

export default ProductDetails = () => {
  const [search, setSearch] = useState('');
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      {/* <View style={{backgroundColor: colors.white}}> */}
      <Header search={search} setSearch={setSearch} isSearch={true} />
      {/* Header */}
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        <SafeAreaView style={{backgroundColor: colors.white}}>
          {/* Product diaplay */}
          <View style={[style.card]}>
            <Image style={style.cardImage} source={images.bag}></Image>
          </View>

          {/* Product details */}
          <View style={style.detailsWrapper}>
            <Text style={style.productName}>Hand Bag</Text>
            <View style={style.storeDetailsWrapper}>
              <Image style={{width: 15.3, height: 13, marginRight:6}} source={images.storeDark} />
              <Text style={style.storeOwner}>by Tanya</Text>
              <Image style={{width: 12.8, height: 15,marginHorizontal: 6}} source={images.location} />
              <Text style={style.location}>Chandighar</Text>
            </View>
            <View style={style.priceWrapper}>
              <Text style={style.price}>$49</Text>
              <Favorite />
            </View>

            <Text style={style.descriptionTitle}>Product Description</Text>
            <Text style={style.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </View>

          <View style={[style.boxWrapper, {marginBottom: 15}]}>
            <Text style={[style.quantity, {flexGrow: 1}]}>Quantity</Text>

            <TouchableOpacity
              onPress={() => {
                setQuantity(prev => prev - 1);
              }}>
              <Image style={{marginHorizontal: 11,width:20, height:20}} source={images.minus} />
            </TouchableOpacity>

            <Text style={style.quantity}>{quantity}</Text>

            <TouchableOpacity
              onPress={() => {
                setQuantity(prev => prev + 1);
              }}>
              <Image style={{marginHorizontal: 11,width:20, height:20}} source={images.plus} />
            </TouchableOpacity>
          </View>

          <View style={[style.boxWrapper, {marginBottom: 42}]}>
            <View style={style.personalizationWrapper}>
              <Text style={style.personalizationTitle}>
                Add Personalization
              </Text>
              <Text style={style.personalizationDesc}>
                Star shapes on right side of sticker.
              </Text>
            </View>
          </View>

          <View style={[style.buttonWrapper, {marginBottom: 15}]}>
            <View style={{width: '47.5%'}}>
              <Button lable="VISIT STORE" isWhite={true} isShadow={true} />
            </View>
            <View style={{width: '47.5%'}}>
              <Button lable="ADD TO CART" />
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
      <Navigation />
      {/* </View> */}
    </>
  );
};

const style = StyleSheet.create({
  card: {
    // width: '',
    display: 'flex',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 20,
    marginHorizontal: 20,
    height: 240,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  detailsWrapper: {
    paddingHorizontal: 26,
    marginBottom: 19,
  },
  productName: {
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    color: colors.black,
    marginBottom: 4,
  },
  storeDetailsWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  storeOwner: {
    fontFamily: 'Lato-Bold',
    fontSize: 12,
    color: colors.blue,
  },
  location: {
    fontFamily: 'Lato-Bold',
    fontSize: 12,
    color: colors.orange,
  },
  priceWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  price: {
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    color: colors.black,
  },
  descriptionTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    color: colors.black,
  },
  description: {
    fontFamily: 'Lato-Regular',
    fontSize: 12,
    color: colors.blackLight,
  },
  boxWrapper: {
    // width: "47%",
    marginHorizontal: 26,
    paddingHorizontal: 16,
    paddingVertical: 12,
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
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    color: colors.black,
  },
  personalizationTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    color: colors.blue,
    marginBottom: 6,
  },
  personalizationDesc: {
    fontFamily: 'Lato-Bold',
    fontSize: 12,
    color: colors.blackLight,
  },
  buttonWrapper: {
    marginHorizontal: 26,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
