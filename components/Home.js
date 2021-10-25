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

export default Home = ({navigation}) => {
  const [search, setSearch] = useState('');

  const cards = [
    {id: 1, card: images.card},
    {id: 2, card: images.card},
    {id: 3, card: images.card},
  ];

  const recommendedData = [
    {image: images.image18, name: 'High Heels', price: '$29.99'},
    {image: images.image24, name: 'High Heels', price: '$39.99'},
  ];

  const categories = [
    {name: 'Home Decor', color: colors.redLight},
    {name: 'Clothing', color: colors.blueLight},
    {name: 'Jewelry', color: colors.orange},
    {name: 'Art & Antiques', color: colors.blue},
  ];

  return (
    <>
      {/* <View style={{backgroundColor: colors.white}}> */}
      <Header search={search} setSearch={setSearch} isWhite={true} />
      {/* Header */}
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        <SafeAreaView style={{backgroundColor: colors.white}}>
          {/* Cards diaplay */}
          <View style={style.cardsWrapper}>
            <FlatList
              data={cards}
              renderItem={randerHomeCard}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          {/* Recommended */}
          <View style={[style.sectionWrapper, {marginBottom: 28}]}>
            <Text style={style.sectionHeading}>Recommended for you</Text>
            <View style={style.recommendedItemsWrapper}>
              {recommendedData.map((val, ind) => {
                return (
                  <RecommendedItem
                    key={ind}
                    data={val}
                    navigation={navigation}
                  />
                );
              })}
            </View>
          </View>

          {/* Category */}
          <View style={style.sectionWrapper}>
            <Text style={style.sectionHeading}>Explore by Category</Text>
            <View style={style.recommendedItemsWrapper}>
              {categories.map((val, ind) => {
                return <Category key={ind} data={val} />;
              })}
            </View>
          </View>

          <View style={{paddingHorizontal: 34, marginBottom: 10}}>
            <Text
              style={{
                fontFamily: 'Lato-Bold',
                color: colors.blackLight,
                fontSize: 14,
              }}>
              {'View all Products >'}
            </Text>
          </View>
        </SafeAreaView>
      </ScrollView>
      <Navigation />
      {/* </View> */}
    </>
  );
};

const randerHomeCard = ({item}) => {
  return (
    <>
      <View
        style={[
          style.card,
          {
            marginLeft: item.id === 1 ? 14 : 0,
            // marginHorizontal: item.id === 1 ? 0 : 14,
          },
        ]}>
        <Image style={style.cardImage} source={item.card}></Image>
      </View>
    </>
  );
};

const RecommendedItem = ({data, navigation}) => {
  return (
    <>
      <View style={style.recommendedItemWrapper}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ProductDetails');
          }}>
          <Image style={style.recommendedItemImage} source={data.image}></Image>
        </TouchableOpacity>

        <View style={style.recommendedItemDetails}>
          <Text style={style.recommendedItemName}>{data.name}</Text>
          <Text style={style.recommendedItemPrice}>{data.price}</Text>
          <View style={style.favorite}>
            <Favorite />
          </View>
        </View>
      </View>
    </>
  );
};
const Category = ({data}) => {
  return (
    <>
      <View style={[style.category, {backgroundColor: data.color}]}>
        <Text style={style.categoryName}>{data.name}</Text>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  cardsWrapper: {
    marginTop: 10,
    marginBottom: 24,
  },
  card: {
    // display: 'flex',
    // alignItems: 'center',
    // marginHorizontal: 14,
    // height: 278,
    // width: 361,
    // borderRadius: 20,
    // backgroundColor: colors.white,
    // shadowColor: colors.black,
    // shadowOpacity: 0.5,
    // shadowRadius: 3,
    // shadowOffset: {
    //   height: 0,
    //   width: 0,
    // },
    // elevation: 5,
  },
  cardImage: {
    width: 361,
    height: 278,
    // width: "100%",
    // height: "100%",
    borderRadius: 20,
  },
  sectionWrapper: {
    paddingHorizontal: 26,
  },
  sectionHeading: {
    fontFamily: 'Lato-Bold',
    color: colors.blue,
    fontSize: 24,
    marginBottom: 17,
  },
  recommendedItemsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  recommendedItemWrapper: {
    // backgroundColor: colors.blueLight, // sddfgsdf
    width: '47%',
    height: 252,
    borderRadius: 20,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 3,
  },
  recommendedItemImage: {
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  recommendedItemDetails: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 17,
    paddingVertical: 10,
    // position: 'relative',
  },
  recommendedItemName: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    color: colors.black,
    marginBottom: 10,
  },
  recommendedItemPrice: {
    fontFamily: 'Lato-Bold',
    fontSize: 12,
    color: colors.black,
  },
  favorite: {
    position: 'absolute',
    top: 52,
    right: 12,
  },
  category: {
    width: '47%',
    height: 148,
    borderRadius: 20,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 23,
  },
  categoryName: {
    fontFamily: 'Lato-Bold',
    fontSize: 28,
    color: colors.white,
  },
});
