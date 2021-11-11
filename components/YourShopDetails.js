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

export default YourShopDetails = ({navigation}) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [about, setAbout] = useState('');
  const [photo, setPhoto] = useState('');

  return (
    <>
      <Header back={'Home'} title={'Shop Details'} isWhite={true} />
      <ScrollView
        style={{backgroundColor: colors.white}}
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        <SafeAreaView>
          <View
            style={{
              backgroundColor: colors.white,
              paddingHorizontal: 24,
              paddingTop: 25,
            }}>
            <Text style={style.heading}>Write to Us:</Text>

            <View style={{marginBottom: 10}}>
              <Input
                lable={'Name of Owner'}
                placeholder={'Name'}
                text={name}
                setText={setName}
              />
            </View>

            <View style={{marginBottom: 10}}>
              <Input
                lable={'City'}
                placeholder={'City Name'}
                text={city}
                setText={setCity}
              />
            </View>
            <View style={{marginBottom: 10}}>
              <Input
                lable={'Address'}
                placeholder={'Street, Locality'}
                text={address}
                setText={setAddress}
              />
            </View>
            <View style={{marginBottom: 10}}>
              <Input
                lable={'State'}
                placeholder={'State'}
                text={state}
                setText={setState}
              />
            </View>
            <View style={{marginBottom: 10}}>
              <Input
                lable={'About'}
                placeholder={'Describe your Shop; the Why, the What, etc.'}
                text={about}
                setText={setAbout}
              />
            </View>
            <View style={{marginBottom: 10}}>
              <Input
                lable={'Photos'}
                placeholder={'+ Add Photos'}
                text={photo}
                setText={setPhoto}
              />
            </View>

            <View style={{marginBottom: 30, marginTop: 50}}>
              <Button
                alert={'Submitted'}
                lable={"Save & GO TO Shop"}
              />
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
      <Navigation />
    </>
  );
};

const style = StyleSheet.create({
  heading: {
    color: colors.black,
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    marginBottom: 10,
  },
});
